# react-snowpack

[![templates-react-snowpack](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ijbv8d&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ijbv8d/runs)

## Build

For consistent results build with `node 14` and `pnpm 6.3.0` e.g.
```bash
nvm use
pnpm install
```

## Tech, Frameworks and Libraries

- node
- snowpack
- typescript
- react
- react-redux
- redux-saga
- reduxjs-toolkit
- cypress
- storybook

## Scripts

### pnpm start

Runs the app in the development mode.  
Open http://localhost:8080 to view it in the browser.

### pnpm run build

Builds a static copy of your site to the `build/` folder.

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### pnpm run cy:open

Opens the cypress dashboard for running integration tests.

### pnpm run cy:run

Runs cypress tests from the command.

Additional options
- `--spec <spec>` limit the run to specified spec files found in `cypress/integration`
- `--record` records the test run and makes it available through the cypress dashboard

Note: recording requires the cypress record key to be set which may be retrieved by project contributors.

### pnpm run sb:run

Starts the `storybook` server running locally, displays the URL and (if applicable) opens in a browser window.

### pnpm run sb:build

Builds the storybook static website in `storybook-static`.