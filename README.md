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
