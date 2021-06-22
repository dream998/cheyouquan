// vue.config.js

const path = require('path')
const themePath = path.resolve(__dirname,'./src/assets/style/covervant.less')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
			'font-family':'PingFang-SC-Medium',
            orange: '#FFCC32',
			 hack: `true; @import "${themePath}";`,
          },
        
      },
    },
  },
};