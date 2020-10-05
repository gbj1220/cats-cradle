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
  while( i < str.length ) {
    console.log( str[i] );
    i += 3;
  }
}
// everyThird("I am the alfalfa and the omelette.")


function logLettersBackwards( str ) {
  let i = str.length - 1
  while (i >= 0) {
    console.log(str [i]);
    i--
  }
}
// logLettersBackwards('hello')
// logLettersBackwards('oh hi')





