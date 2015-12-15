var Express=require('express');
var Imagemin = require('imagemin');
var App = Express();
App.get('/', function(req, res) {
	new Imagemin()
	.src('images/*.{gif,jpg,png,svg}')
	.dest('build/images')
	.use(Imagemin.optipng({optimizationLevel: 3}))
	.use(Imagemin.jpegtran({progressive: true}))
	.run(function (err, files) {
		//console.log(files[0]);
		// => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>} 
	});
	res.send('compress OK');
});

App.listen(3000, function() {
	console.log('uygulama çalışıyor');
});