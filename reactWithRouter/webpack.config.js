var config = {
	entry: './client/main.js',
	
	output:{
		filename:'bundle.js'
	},

	devServer:{
		inline: true,
		port: 8090
	},

	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}

module.exports = config;