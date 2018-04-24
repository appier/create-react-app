module.exports = {
  extends: ['react-app', 'plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'import/resolver': {
      node: {
        paths: [`${__dirname}/src`],
      },
    },
  },
};
