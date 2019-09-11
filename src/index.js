// this style file just makes it look nice
import "./styles.css";

/* The goal is to refactor this code! Based on the sentence we want to
randomize the order of the words on each line, separating them
with a <br>. The comments explain what the code is doing,
not what you need to do.

Whatever you would like to refactor is up to you, 
we're looking for:
- Clarity: splitting up your code in a readable and reusable way
- Context: can you explain to us what changes you have made and why?
*/

const sentence = "The quick brown fox lumped over the lazy cat";
//Change all variables to ES6 variables "let" and "const"

const words = sentence.split(" ");

//Create an arrow function in order to make it more readible and save some space

const makeRandom = i => (i = Math.floor(Math.random() * words.length));

//I have noticed that there were multiple "for" loops,
//so I have decided to use "map" method in order to modify
//the original array

const newArr = words
  .map((word, i) => {
    //Reassign the original index to the random one
    let randomIndex = makeRandom(i);

    //Use template literals to modify the word variable with space break added
    return `${words[randomIndex]}<br />`;
  })
  //Use "join" method to return back a string from the "newArr"
  .join("");

// put the numbers on the screen!

document.getElementById("app").innerHTML = newArr;
