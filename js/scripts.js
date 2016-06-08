var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var illegalCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "|", "\\", "/", "~", "[", "]", "{", "}"];
var pigtranslator = function(input) {
  var string = input
  var illegalInput = false
  for (i=0 ; i<string.length ; i ++) {
      if (illegalCharacters.includes(string.charAt(i))) {
        illegalInput = true
      }
  }

  if (illegalInput) {
    alert("bad input")
  }
  else if (string.charAt(0)=== "q" && string.charAt(1) === "u") {
    string = string.slice(2) + string.slice(0,2)
  }
  else { while (consonants.includes(string.charAt(0))) {
    string =  string.slice(1) + string.slice(0,1)
  }}
  string += "ay"
  return string
}
