function blankLetters(words){
  blankWords = [];
  wordSplit = words.split(" ");
  for(var i=0;i<wordSplit.length;i++){
    letterSplit = wordSplit[i].split("");
    blankArray = [];
    for(var j=0;j<letterSplit.length;j++){
      blankArray.push("_");
    }
    blankWords.push(blankArray.join(" "));
  }
  return blankWords.join("   ");
}

function answer
