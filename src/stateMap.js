export const stateMap = [
  {
    step: 1, 
    timeLimit: 1000,
    messages: [],
    headerText: 'Screen 1',
    main: 'Narrator',
    fieldTop: 'Ready to play some truth or dare?',
    fieldBottom: '',
    input: 'SingleButton',
    singleButtonText: 'Chat',
    button1Text: '',
    button2Text: '',
  }, {
    step: 2, 
    timeLimit: 1000,
    messages: [],
    headerText: 'Screen 2',
    main: 'Narrator',
    fieldTop: 'Choose below',
    fieldBottom: '',
    input: 'DoubleButton',
    singleButtonText: '',
    button1Text: 'Truth',
    button2Text: 'Dare',
  },
  // {
  //   step: 3, 
  //   timeLimit: 3,
  //   messages: [],
  //   headerText: 'Screen 3',
  //   main: 'Chat',
  //   fieldTop: '',
  //   fieldBottom: '',
  //   input: 'MessageBar',
  //   singleButtonText: '',
  //   button1Text: '',
  //   button2Text: '',
  // },
  {
    step: 3, 
    timeLimit: 100,
    messages: [],
    headerText: '• Recording',
    main: 'AudioVis',
    fieldTop: '',
    fieldBottom: '',
    input: 'MessageBar',
    singleButtonText: 'Stop recording',
    button1Text: '',
    button2Text: '',
  },
  // {
  //   step: 4, 
  //   timeLimit: 10,
  //   messages: [],
  //   headerText: 'Screen 3',
  //   main: 'Chat',
  //   fieldTop: '',
  //   fieldBottom: '',
  //   input: 'MessageBar',
  //   singleButtonText: '',
  //   button1Text: '',
  //   button2Text: '',
  // },
  {
    step: 4, 
    messages: [],
    timeLimit: 1000,
    headerText: 'Womp womp',
    main: 'Narrator',
    fieldTop: 'Nooooooo time is up!',
    fieldBottom: 'There are for sure more bugs you can discover, how about another round?',
    input: 'SingleButton',
    singleButtonText: 'OOOOOOOOK.....',
    button1Text: '',
    button2Text: '',
  }
];