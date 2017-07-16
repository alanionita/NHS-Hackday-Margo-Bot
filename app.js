// Node requirements
const path = require('path');

// Bot setup
const Botmaster = require('botmaster');
const TwitterBot = require('botmaster-twitter-dm');
const twitterSettings = require(path.resolve(__dirname, 'config'));
// where to find the config file which gives the access details to plug into the API

const botmaster = new Botmaster();
const twitterBot = new TwitterBot(twitterSettings);

botmaster.addBot(twitterBot);

// Own requirements: controllers, messages 
const messages = require(path.resolve(__dirname, 'messages', 'index'));

let myIncomingMiddlewareController = (bot, update) => {
    if (update.message.text === 'hi' ||
        update.message.text === 'Hi' ||
        update.message.text === 'hello' ||
        update.message.text === 'Hello' ||
        update.message.text === 'yo' ||
        update.message.text === 'Hey' ||
        update.message.text === 'hey') {
        bot.sendTextCascadeTo(messages.tutorial, update.sender.id);
    }
    else if (update.message.text === 'yes' ||
             update.message.text === 'Yes' ||
             update.message.text === 'YES' ||
             update.message.text === 'y') {
        bot.sendTextCascadeTo(messages.yes, update.sender.id);
    }
    
    else if (update.message.text === 'no' ||
             update.message.text === 'No' ||
             update.message.text === 'NO' ||
             update.message.text === 'n' ||
             update.message.text === 'nah'
            ) {
        bot.sendTextCascadeTo(messages.no, update.sender.id);
    }
    
     else {
        bot.sendTextCascadeTo(messages.apologies, update.sender.id);
    }
};

botmaster.use({
    type: 'incoming',
    name: 'My incoming middleware',
    controller: myIncomingMiddlewareController,
});