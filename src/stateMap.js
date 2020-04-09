/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export const stateMap = [
  {
    step: 1, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Welcome to Bot or Not     🤖',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 2, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'You’ll have to guess whether the other player is a 🤷‍♀️ or a 🤖',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 3, 
    timeLimit: 1000,
    messages: [],
    headerText: 'Bot or Not',
    main: 'Narrator',
    className: 'theme2',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'To play, enter your name below👇',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 4, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: '',
    fieldTop: 'Now, introduce yourselves 🤝',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Chat',
    button1Text: '',
    button2Text: '',
  },{
    step: 5, 
    timeLimit: 5,
    messages: [],
    className: 'theme1',
    headerText: 'Practice round',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 6, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: '',
    fieldTop: 'Now that your free chat is over….⏰',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 7, 
    timeLimit: getRandomArbitrary(2,6),
    messages: [],
    main: 'NarratorWait',
    className: 'theme2',
    headerText: '',
    fieldTop: 'is composing a challenge for you  💬',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Give them a sec',
    button1Text: '',
    button2Text: '',
  },{
    step: 8, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme1',
    headerText: '',
    fieldTop: 'First up: Truth ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I am ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 9, 
    timeLimit: 5,
    messages: [],
    className: 'theme1',
    headerText: '',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 10, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: '',
    fieldTop: 'Good round 🥊 ',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 11, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme1',
    headerText: '',
    fieldTop: 'Now it’s your turn to devise a truth challenge ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I’m Ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 12, 
    timeLimit: 5,
    messages: [],
    className: 'theme1',
    headerText: '',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 13, 
    timeLimit: getRandomArbitrary(2,6)*1000,
    messages: [],
    main: 'NarratorWait',
    className: 'theme2',
    headerText: '',
    fieldTop: 'is composing the last challenge for you  💬',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Give them a sec',
    button1Text: '',
    button2Text: '',
  },{
    step: 14, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme1',
    headerText: '',
    fieldTop: 'Last round: Truth ⚖️',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'I am ready!',
    button1Text: '',
    button2Text: '',
  },{
    step: 15, 
    timeLimit: 5,
    messages: [],
    className: 'theme1',
    headerText: '',
    main: 'Chat',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: '',
    button1Text: '',
    button2Text: '',
  },{
    step: 16, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Welp, thats all the time the two of you get….⏰ ',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Next',
    button1Text: '',
    button2Text: '',
  },{
    step: 17, 
    timeLimit: 1000,
    messages: [],
    main: 'Narrator',
    className: 'theme2',
    headerText: 'A Truth or Dare Turing Test',
    fieldTop: 'Were you chatting with a 🤷‍♀️ or a 🤖?',
    fieldBottom: '',
    input: 'DoubleButton',
    singleButtonText: '',
    button1Text: 'Bot 🤖',
    button2Text: 'Human 🤷‍♀️',
  },{
    step: 18, 
    timeLimit: 1000,
    messages: [],
    main: 'End',
    className: 'theme1',
    headerText: 'Thanks for playing!',
    fieldTop: 'You’re correct - this was a bot! ',
    fieldBottom: 'Many chat bots today use cheap tactics to keep the conversation going, but rarely self-identify to you who they “actually” are. Good job.',
    input: 'SingleButton',
    singleButtonText: 'Find out more!',
    button1Text: '',
    button2Text: '',
  },{
    step: 19, 
    timeLimit: 1000,
    messages: [],
    main: 'About',
    className: 'theme1',
    headerText: 'Whats the deal with chatbots?',
    fieldTop: '',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'About this project',
    button1Text: '',
    button2Text: '',
  },{
    step: 20, 
    timeLimit: 1000,
    messages: [],
    main: 'Credits',
    className: 'theme1',
    headerText: 'About this Project',
    fieldTop: '',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Play again',
    button1Text: '',
    button2Text: '',
  }
];

