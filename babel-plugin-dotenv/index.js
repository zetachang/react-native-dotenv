var dotEnv = require('dotenv');
var fs = require('fs');
var sysPath = require('path');
var process = require('process');

module.exports = function (data) {
    var t = data.types;

    return {
        visitor: {
            ImportDeclaration: function(path, state) {
                var options = state.opts;

                if (options.replacedModuleName === undefined)
                  return;

                var configDir = options.configDir ? options.configDir : './';

                if (path.node.source.value === options.replacedModuleName) {
                  var config = dotEnv.config({ path: sysPath.join(configDir, '.env'), slient: true }) || {};
                  var platformPath = (process.env.BABEL_ENV === 'development' || process.env.BABEL_ENV === undefined) ? '.env.development' : '.env.production';
                  var config = Object.assign(config, dotEnv.config({ path: sysPath.join(configDir, platformPath) }));

                  path.node.specifiers.forEach(function(specifier, idx){
                    if (specifier.type === "ImportDefaultSpecifier") {
                      throw path.get('specifiers')[idx].buildCodeFrameError('Import dotenv as default is not supported.')
                    }
                    var importedId = specifier.imported.name
                    var localId = specifier.local.name;

                    if(!config[importedId]) {
                      throw path.get('specifiers')[idx].buildCodeFrameError('Try to import dotenv variable "' + importedId + '" which is not defined in any .env files.')
                    }

                    var binding = path.scope.getBinding(localId);
                    binding.referencePaths.forEach(function(refPath){
                      if (config[importedId]) {
                        refPath.replaceWith(t.valueToNode(config[importedId]))
                      }
                    });
                  })

                  path.remove();
                }
            }
        }
    }
}
