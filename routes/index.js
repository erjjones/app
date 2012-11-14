
/*
 * GET home page.
 */

 exports.index = function(req, res){
	res.render('index', { 
		title: 'Starter App',
		author: 'Eric Jones', 
		description: 'A quick starter app'	
	});
}; 
