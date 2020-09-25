module.exports = {
  runtimeCompiler: true,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/registerServiceWorker.js',
    },
  },
};
