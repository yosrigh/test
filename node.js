console.log ('hello world');
var mqtt = require('mqtt'),url = require('url')
var client = mqtt.createClient(13259,"m15.cloudmqtt.com",
{
    username: "yosri",
    password: "yosri1996"
});


client.on('connect', function() { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('heart/#', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });

   
});