var https = require('https');
var querystring = require('querystring');

module.exports = {
	
	host: 'hooks.slack.com',
	path: null,
	config: {},
	
	init: function (config) {
		
		if (config.host)
			this.host = config.host;
		
		this.path = config.path;
		delete config.host;
		delete config.path;
		this.config = config;
	},
	
	text: function (text) {
		
		if (typeof this.path === 'undefined')
			return console.log('Slack path is not defined!');
		
		if (typeof text === 'undefined')
			return console.log('Slack text is empty!');		
		
		this.config.text = text;
		
		var data = querystring.stringify({
			payload: JSON.stringify(this.config)
		});
		
		var post_req = https.request({
			host: this.host,
			path: this.path,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': data.length
			}
		}, function(res) {
			res.on('data', function (chunk) {
				console.log(chunk);
			});
		});
		
		post_req.write(data);
		post_req.end();
		
	}
	
}