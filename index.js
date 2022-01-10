const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

  function titleCased() {
    function editString(string) {
      const splitIt = string.split(" ");
      for (let i = 0; i < splitIt.length; i++) {
        splitIt[i] = splitIt[i][0].toUpperCase() + splitIt[i].substr(1);
      }
      return splitIt.join(" "); 
    }
    return tutorials.map(editString);
  }