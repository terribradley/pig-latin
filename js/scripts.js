var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var pigtranslator = function(input) {
  var string = input

  if (string.charAt(0)=== "q" && string.charAt(1) === "u") {
    string = string.slice(2) + string.slice(0,2)
  }
  else { while (consonants.includes(string.charAt(0))) {
    string =  string.slice(1) + string.slice(0,1)
  }}
  string += "ay"
  return string
}
