/** @type {import("snowpack").SnowpackUserConfig } */
const webpack = require('webpack');

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(new webpack.DefinePlugin({
            __SNOWPACK_ENV__: JSON.stringify({
              MODE: 'production',
              NODE_ENV: 'production',
              SSR: false,
            })
          }));
          return config;
        }
      },
    ],
  ],
  alias: {
    "@containers": "./src/containers",
    "@components": "./src/components",
    "@store": "./src/store",
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  exclude: [
    '**/node_modules/**/*',
    '**/src/stories/**/*',
  ],
  optimize: {
    /* Example: Bundle your final build: */
    "bundle": true,
    "minify": true,
    "treeshake": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
