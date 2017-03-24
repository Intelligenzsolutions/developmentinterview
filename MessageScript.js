//Message to be posted into the HipChat room.
var data = "Lawrence Benzie sent the following link to his favourite web site: <a href=\"http://optimizilla.com/\">www.optimizilla.com</a>";

//Inititialise a new XMLHttpRequest.
var xhr = new XMLHttpRequest();

//An event listener is used to display "Message Sent" when the message has successfully been sent.
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === 4) {
		console.log("Message Sent");
	}
});

//Settings to post the message to the correct room. auth_token as a parameter.
xhr.open("POST", "https://intelligenz.hipchat.com/v2/room/Interviews/notification?auth_token=uCTbYG8RNqnVcQ11p2UGy7w6SilZv2R9eYN3qg8b");

//Setting the content-type header to text/html.
xhr.setRequestHeader("content-type", "text/html");

//Sending the message.
xhr.send(data);