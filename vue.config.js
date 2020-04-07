module.exports = {
  pluginOptions: {//安装vue add style-resources-loader，使用全局less文件
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/less/index.less']
    }
  }
}
