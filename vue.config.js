module.exports = {
  runtimeCompiler: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/registerServiceWorker.js',
    },
  },
};
