function logLetters(name) {
  let i = 0
  while (i < name.length) {
    console.log(name[i]);
    i++
  }
}
// logLetters("Greg")

function everyThird(str) {
  let i = 2;
  while (i < str.length) {
    console.log(str[i]);
    i += 3;
  }
}
// everyThird("I am the alfalfa and the omelette.")


function logLettersBackwards(str) {
  let i = str.length - 1;
  while (i >= 0) {
    console.log(str[i]);
    i--
  }
}


// logLettersBackwards('hello')
// logLettersBackwards('oh hi')


function countVowels(str) {
  let i = 0;
  while (i < str.length) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      console.log(str[i]);
    }
    i = i + 1;
  }
}

// countVowels("Regular expressions are for term 2.")



function someCharacters(str, start) {
  let count = 0;
  while (start < str.length) {
    if (count < str.length) {
      console.log(str[start]);
      count += 1;
    }
    start += 1;
  }
}
// someCharacters('slaughter', 1);
// someCharacters('I don’t love you!', 7);


function allU(str) {
  let num = 0;
  while (num < str.length) {
    if (str[num] === 'u' || str[num] === 'U') {
      console.log(str[num])
    }
    num++
  }
}
// allU('You picked the wrong house bub!')

function firstFive(str) {
  let vowels = 'aeiou';
  let count = 0;
  let length = 0
  while (count < str.length && length < 5) {
    if (vowels.includes(str [count])) {
      console.log (str [count])
      length ++
    }
    count++
  }
}
// firstFive("Regular expressions are for term 2.")
// firstFive("Hello")

function indexOfU (str) {
  let count = 0;
  let length = 0
  while (count < str.length && length <) {
    if ('u'.includes(str [count])) {
      console.log ([count])
    } 
    count++
  } 
   
  }


indexOfU ('You picked the wrong house, bub.')