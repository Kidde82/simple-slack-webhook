### Example how to post a message
```javascript
var slack = require('simple-slack-webhook');

slack.init({
	path: "/uri/path/to/webhook",

	# optional
	username: "My awesome bot",
	channel: "#general"
});

slack.text("Hello");
```

### Example how to post a message with attachments
```javascript
var slack = require('simple-slack-webhook');

slack.init({
	path: "/uri/path/to/webhook",

	# optional
	username: "My awesome bot",
	channel: "#general",
	log: false
});

var attachments = [{
	"fallback": "New ticket from Andrea Lee - Ticket #1943: Can't rest my password - https://groove.hq/path/to/ticket/1943",
	"pretext": "New ticket from Andrea Lee",
	"title": "Ticket #1943: Can't reset my password",
	"title_link": 'https://groove.hq/path/to/ticket/1943',
	"text": "Help! I tried to reset my password but nothing happened!",
	"color": "good"
}];

slack.attachments(attachments);
```

### References
https://api.slack.com/docs/attachments
