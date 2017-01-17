const basicConfig =require('react-scripts-appier/config/webpack.config.dev.js');

module.exports = function(config, env) {
  const [asset, js, cssIn, cssEx, json, svg] = baseConfig.module.loaders;

  // Don't add CRA's "asset" loader, it'll break the storybook HMR
  config.module.loaders = config.module.loaders.concat([cssIn, cssEx, json, svg]);
  config.postcss = baseConfig.postcss;

  return config;
};

