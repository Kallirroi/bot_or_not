/**
* Returns a random number between min (inclusive) and max (exclusive)
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* An array of objects which define the different views of the game.
* Each object contains the text as well as which components will be rendered.
*/
export const stateMap = [
  {
    step: 1, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Welcome to Bot or Not     🤖',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 2, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'You’ll have to guess whether the other player is a 🤷‍♀️ or a 🤖',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 3, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'To play, enter your name below👇',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 4, 
    timeLimit: getRandomInt(6,12)*1000,
    messages: [],
    main: 'MatchingScreen',
    headerText: '',
    fieldTop: 'you are currently being matched with another player...',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Hold on a sec ✋',
    button1Text: '',
    button2Text: '',
  },{
    step: 5, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'You were matched! Now, introduce yourselves 🤝',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Chat',
    button1Text: '',
    button2Text: '',
  },{
    step: 6, 
    timeLimit: 45*1000,
    messages: [],
    headerText: 'Practice round',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 7, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'Now that your free chat is over….⏰',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 8, 
    timeLimit: getRandomInt(4,6)*1000,
    messages: [],
    main: 'NarratorWait',
    headerText: '',
    fieldTop: 'is composing a challenge for you  💬',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Give them a sec ✋',
    button1Text: '',
    button2Text: '',
  },{
    step: 9, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'First up: Truth ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I am ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 10, 
    timeLimit: 45*1000,
    messages: [],
    headerText: '',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 11, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'Good round 🥊 ',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 12, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'Now it’s your turn to devise a truth challenge ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I’m Ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 13, 
    timeLimit: 45*1000,
    messages: [],
    main: 'Chat',
    headerText: '',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 14, 
    timeLimit: getRandomInt(4,6)*1000,
    messages: [],
    main: 'NarratorWait',
    headerText: '',
    fieldTop: 'is composing the last challenge for you  💬',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Give them a sec ✋',
    button1Text: '',
    button2Text: '',
  },{
    step: 15, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: '',
    fieldTop: 'Last round: Truth ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I am ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 16, 
    timeLimit: 45*1000,
    headerText: '',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 17, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Welp, thats all the time the two of you get….⏰ ',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 18, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Narrator',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Do you think you were chatting with a 🤷‍♀️ or a 🤖?',
    fieldBottom: '',
    input: 'DoubleButton',
    singleButtonText: '',
    button1Text: 'Bot 🤖',
    button2Text: 'Human 🤷‍♀️',
  },{
    step: 19, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'End',
    headerText: 'Thanks for playing!',
    fieldTop: '',
    fieldBottom: 'Many chat bots today use cheap tactics to keep the conversation going, but rarely self-identify to you who they “actually” are.',
    input: 'SingleButton',
    singleButtonText: 'Find out more!',
    button1Text: '',
    button2Text: '',
  },{
    step: 20, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'About',
    headerText: 'What is the deal with chatbots?',
    fieldTop: '',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'About this project',
    button1Text: '',
    button2Text: '',
  },{
    step: 21, 
    timeLimit: 1000*1000,
    messages: [],
    main: 'Credits',
    headerText: 'About',
    fieldTop: '',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Do you want to chat more?',
    button1Text: '',
    button2Text: '',
  },{
    step: 22, 
    timeLimit: 10000*1000,
    messages: [],
    headerText: 'Free chat zone',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  }
];

