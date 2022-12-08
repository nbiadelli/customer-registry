module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_variables.scss";
          `,
      },
    },
  },
  devServer: {
    https: false,
    port: 8080,
    watchOptions: {
      poll: 1000,
    },
    open: true,
  },
};
