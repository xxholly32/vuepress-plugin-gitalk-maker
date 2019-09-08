const { resolve } = require('path');

module.exports = options => ({
  define: {
    GITALK: options.gitalkConfig || {},
  },
  clientRootMixin: resolve(__dirname, 'mixin.js'),
});
