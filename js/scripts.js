var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var illegalCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "|", "\\", "/", "~", "[", "]", "{", "}"];
var allowedPunctuation = [".", "?", "!", ","];

var illegalInput = false;
var multiWord = false;
var stringsArray = [];

var pigTranslator = function(input) {
  var string = input;
  var indexMarker = 0;
  if (string.charAt(0)=== "q" && string.charAt(1) === "u") {
    string = string.slice(2) + string.slice(0,2);
  }
  else {
    while (consonants.includes(string.charAt(0))) {
      string =  string.slice(1) + string.slice(0,1);
    }
  }
  string += "ay";
  for (i = 0; i < string.length; i ++) {
    indexMarker ++;
    if (allowedPunctuation.includes(string.charAt(indexMarker))) {
      string = string.slice(0, indexMarker) + string.slice(indexMarker + 1) + string.slice(indexMarker, indexMarker + 1);
      indexMarker -= 1;
    }
  }
  return string;
};

var inputTranslator = function(input) {
  var string = input.toLowerCase();
  illegalInput = false;
  multiWord = false;
  for (i = 0; i < string.length; i++) {
    if (illegalCharacters.includes(string.charAt(i))) {
      illegalInput = true;
    }
    else if (string.charAt(i) === " ") {
      multiWord = true;
    }
    //may want to refactor to have a different default case? else?
  }
  if (illegalInput) {
    alert("bad input");
  }
  else if (multiWord) {
    stringsArray = string.split(" ");
    var pigArray = [];
    pigArray = stringsArray.map(function(word) {
      return pigTranslator(word);
    });
    var result = pigArray.join(' ');
    return result;
  }
  else {
    return pigTranslator(string);
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
