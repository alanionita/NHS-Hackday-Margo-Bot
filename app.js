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
    
    else if (update.message.text === 'sad' ||
             update.message.text === 'Sad' ||
             update.message.text === 'unhappy' ||
             update.message.text === 'Unhappy' ||
             update.message.text === 'angry' ||
             update.message.text === 'Angry' ||
             update.message.text === 'depressed' ||
             update.message.text === 'Depressed' ||
             update.message.text === 'crap' ||
             update.message.text === 'Crap' ||
             update.message.text === 'crappy' ||
             update.message.text === 'Crappy' ||
             update.message.text === 'tired' ||
             update.message.text === 'Tired' ||
             update.message.text === 'humiliated' ||
             update.message.text === 'Humiliated' ||
             update.message.text === 'rejected' ||
             update.message.text === 'Rejected' ||
             update.message.text === 'upset' ||
             update.message.text === 'Upset'
            ) {
        bot.sendTextCascadeTo(messages.negative, update.sender.id);
    }
    
    else if (update.message.text === 'happy' ||
             update.message.text === 'Happy' ||
             update.message.text === 'joyful' ||
             update.message.text === 'Joyful' ||
             update.message.text === 'hopeful' ||
             update.message.text === 'Hopeful' ||
             update.message.text === 'cheerful' ||
             update.message.text === 'Cheerful' ||
             update.message.text === 'euphoric' ||
             update.message.text === 'Euphoric' ||
             update.message.text === 'satisfied' ||
             update.message.text === 'Satisfied' ||
             update.message.text === 'inspired' ||
             update.message.text === 'Inspired' ||
             update.message.text === 'energetic' ||
             update.message.text === 'Energetic' ||
             update.message.text === 'positive' ||
             update.message.text === 'Positive' ||
             update.message.text === 'lucky' ||
             update.message.text === 'Lucky' ||
             update.message.text === 'awesome' ||
             update.message.text === 'Awesome'
            ) {
        bot.sendTextCascadeTo(messages.positive, update.sender.id);
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