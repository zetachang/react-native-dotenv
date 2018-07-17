# Changelog

Changes are grouped as follows:
- **Added** for new features.
- **Changed** for changes in existing functionality.
- **Deprecated** for once-stable features to be removed in upcoming releases.
- **Removed** for deprecated features removed in this release.
- **Fixed** for any bug fixes.
- **Security** to invite users to upgrade in case of vulnerabilities.

<!--
Whitespace conventions:
- 4 spaces before ## titles
- 2 spaces before ### titles
- 1 spaces before normal text
 -->

## [0.2.0] - 2018-7-17

### Fixed

- Compatibility with RN 0.56 (Babel 7) (#42)

## [0.1.1] - 2018-1-14

### Fixed

- Empty env is treated as env not found. (#25)

## [0.1.0] - 2017-7-9

### Fixed

- Compatibility with RN 0.46+ (#21)

### Added

- Add filename config to allow user to custom filename of .env file (#16)

## [0.0.4] - 2017-4-4

### Fixed

- Misleading not found errors is shown (#14)

## [0.0.3] - 2017-1-9

### Fixed

- Sometimes .env file could not be found. (#3)
- Some of dotenv warnings are correctly ignored now, thanks @levity! (#4)
