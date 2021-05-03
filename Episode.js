 #### Episode 1

// ```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
  // Scenario Object is define at global level so it will be available inside any function so the result will be 'Miss Scarlet'
}

const verdict = declareMurderer();
console.log(verdict);
```

#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
  // As the murderer value is coming from the global scope and its available down the hirarecy but because its constasnt it cant be redefined as will get error
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
  // Here is will picup the murderer value as 'Professor Plum'
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// ```

#### Episode 3

//```js

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
// The above will output as normal, First Verdict:  firstVerdict

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// THe above will result as The murderer is Professor Plum, as it will picup from the global script as being Lexical scope
//```

 #### Episode 4

// // ```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  //Although we have access to suspectThree as Mrs Peacock, we are here redefining it to Colonel Mustard, so it will change the suspectThree value only in the Lexical scope of this function and will not affect the suspectThree defined in the Gloval scope
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// here the expected output will be Mrs Peacock.
// ```

#### Episode 5

// // ```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
  // it will update the weapn in the scenario object to 'Revolver'
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
this will show the weapon as The weapon is the Revolver
// ```

// // #### Episode 6

// // ```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
// The above function call will update the murdere value to 'Mrs. White'
const verdict = declareMurderer();
console.log(verdict);
As murderer is already updated twice so teh outpu will be The murderer is Mrs. White.
// // ```

// // #### Episode 7

// ```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  // This will update the murderer value to Mr Green in Global Lexical scope

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    // This murderere is blocked scoped to this function only

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
          // This murderere is blocked scoped to plotTwist function so only update the murderer value there and not the one in the global lexical scope

    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
  // Return will be The murderer is Mr. Green.
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The console Output will be The murderer is Mr. Green.
// // ```

#### Episode 8

// // ```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';
  // The above two will update the Scenario object values repectively (murderer= Mrs Peacock and room = Dining Room)

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
      // It will update the  scenario.murderer to 'Colonel Mustard' as the conndtion is true for room = 'Dining Room'
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
        // It will update the  scenario.weapon to 'Candle Stick' as the conndtion is true for murderer = 'Colonel Mustard' which has been updated through plotTwist function
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
  // return weapon will be Candle Stick
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
The console log will be The weapon is Candle Stick
// // ```

#### Episode 9

// // ```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
  // Even though the condition is True but the new Let murderere will be Blocked Scope to this if statement only
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
  // Return will be The murderer is Professor Plum. 
}

const verdict = declareMurderer();
console.log(verdict);
// The console output will be The murderer is Professor Plum.
// // ```

// // ### Extensions

// // Make up your own episode!