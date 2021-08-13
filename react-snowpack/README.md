# react-snowpack

[![templates-react-snowpack](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ijbv8d&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ijbv8d/runs)

## Build

```bash
nvm use
pnpm install
```

## Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### npm run build

Builds a static copy of your site to the `build/` folder.

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### npm run cy:open

Opens the cypress dashboard for running integration tests.

### npm run cy:run

Runs cypress tests from the command.

Additional options
- `--spec <spec>` limit the run to specified spec files found in `cypress/integration`
- `--record` records the test run and makes it available through the cypress dashboard

Note: recording requires the cypress record key to be set which may be retrieved by project contributors.
