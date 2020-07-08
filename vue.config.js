const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
	publicPath: '/vue-route-values-examples/',
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'vue-types':
					process.env.NODE_ENV === 'production' ? 'vue-types/es/shim.js' : 'vue-types',
            },
        },
        plugins: [
            // DOC: https://github.com/webpack-contrib/stylelint-webpack-plugin
            new StyleLintPlugin({
                files: ['**/*.{vue,htm,html,css,sss,less,scss,sass,!snap}'],
            }),
        ],
    },
}
