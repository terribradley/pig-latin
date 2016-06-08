///////////create arrays with all of elements we'll be checking our stings to//////////
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var illegalCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "|", "\\", "/", "~", "[", "]", "{", "}"];
var allowedPunctuation = [".", "?", "!", ","];
//////initializing all the variables that we want to be global - vcan be called upon in any function anf value remains the same//////
var illegalInput = false;
var multiWord = false;
var stringsArray = [];
/////FUNCTION///////// THIS FUNction is defined for b/c it is the basic function and is referred to in second function - basic scope////
var pigTranslator = function(input) {/////
  var indexMarker = 0
  var string = input;//ptake the input variable anf set it to it's own variable
  if (string.charAt(0)=== "q" && string.charAt(1) === "u") {
    string = string.slice(2) + string.slice(0,2)
  }
  else {
    while (consonants.includes(string.charAt(0))) { ///////while this function is true - which is that the first letter is an consonant
      string =  string.slice(1) + string.slice(0,1)
    }
  }
  string += "ay" ////////again it is taking augmented string variable anf added our selcted ay
  ////special allowd punctuation///////
  for (i = 0; i < string.length; i ++) { /////////
    indexMarker ++ ///////////this marked index marker behaves as i above - it pretends that it is i until we hit an allowed punctuation it is defined above as a variable of 0
    if (allowedPunctuation.includes(string.charAt(indexMarker))) { //////////using this indexmarker to keep pulling everything back so it's looking at all the words
    string = string.slice(0, indexMarker) + string.slice(indexMarker + 1, -1) + string.slice(indexMarker, indexMarker + 1)///at this point indexMarker represents the place that the allowedpunction happen
      indexMarker -= 1 ////this keeps it pointing towards the next character in th string
    }
  }
  return string ////returing the augmented string from this particular for loop
};
////////FUNCTION//////////it's called first!//////
var inputTranslator = function(input) {
  var string = input.toLowerCase(); /////sets user input to a lowercase string
  /////intializing some boolean variables/////
  illegalInput = false; ////these booleans are being set as false so if they are returned as false in our code, the function will keep moving on (turns off certain parts of the code). If the they return as true the code will be intialized to perform an action. in this case, it points to character's we've defined in an array and send an alert.
    multiWord = false;
    
    ////for our illgal characters anf to check if it's multiword/////
  for (i=0 ; i<string.length ; i ++) {
    if (illegalCharacters.includes(string.charAt(i))) { //////i points to at any point in the string where the loop is loking/checking for illegal characters defined in our illegal characters array
    illegalInput = true; ////changing our previously defined variable for this particular function if FALSE(meaning no illegal characters found) perfom else if (illegalInput) logic below - if true got to else {return pigTranslator}
    }
    else if (string.charAt(i) === " ") { ////this is going through string and checking for spaces - which is true it is multiword
      multiWord = true;  ////changing our previously defined variable for this particular function-if FALSE(meaning no " " -spaces- characters found) perfom else if (multiword) logic below - if true got to else {return pigTranslator}
    }
  };
  if (illegalInput) {
    alert("bad input");
  }
  else if (multiWord) {
    stringsArray = string.split(" "); /////this stringsArray is an empty array - we're turning our string into an array here
    var pigArray = []
    pigArray = stringsArray.map(function(word) { ////this map loop is taking each word of the string and passing through our above pigTranslator
      return pigTranslator(word);
    });
    var result = pigArray.join(' '); ///////.join function returns it to a string. this is the only place we've changed our string into an array
      return result
  }
  else {
    return pigTranslator(string)
  }
};



$(document).ready(function() {
  $(".pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("#user-input").val();
    var result = inputTranslator(input);
    $("#result").text(result);
  });
});
