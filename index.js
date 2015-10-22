var https = require('https');
var querystring = require('querystring');

module.exports = {

	host: 'hooks.slack.com',
	path: null,
	log: true,
	config: {},

	init: function (config) {
		if (config.host)
			this.host = config.host;

		if (typeof config.log !== 'undefined' && !config.log)
			this.log = config.log;

		this.path = config.path;
		delete config.host;
		delete config.path;
		delete config.log;
		this.config = config;
	},

	text: function (text) {

		if (typeof this.path === 'undefined')
			return console.log('Slack path is not defined!');

		if (typeof text === 'undefined')
			return console.log('Slack text is empty!');

		this.config.text = text;

		this.post();
	},

	attachments: function (attachment) {

		if (typeof this.path === 'undefined')
			return console.log('Slack path is not defined!');

		if (typeof attachment === 'undefined')
			return console.log('Slack attachment is empty!');

		this.config.attachments = attachment;

		this.post();
	},

	post: function() {
		var data = querystring.stringify({
			payload: JSON.stringify(this.config)
		});
		var log  = this.log;

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
				if (log)
					console.log(chunk);
			});
		});

		post_req.write(data);
		post_req.end();
	}

}
