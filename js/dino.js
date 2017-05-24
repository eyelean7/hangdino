function Words(userInput){
  this.userInput = userInput;
}

Words.prototype.blankLetters = function() {
  console.log(this.userInput);
  blankWords = [];
  wordSplit = this.userInput.split(" ");
  for(var i=0;i<wordSplit.length;i++){
    letterSplit = wordSplit[i].split("");
    blankArray = [];
    for(var j=0;j<letterSplit.length;j++){
      blankArray.push("_");
    }
    blankWords.push(blankArray.join(" "));
  }
  return blankWords.join("   ");
};

Words.prototype.answerLetters = function() {
  spacedWords = [];
  wordSplit = this.userInput.split(" ");
  for(var i=0;i<wordSplit.length;i++){
    letterSplit = wordSplit[i].split("");
    spacedWords.push(letterSplit.join(" "));
  }
  return spacedWords.join("   ");
};

Words.prototype.guess = function(letter) {
  answer = this.answerLetters();
  if(answer.indexOf(letter)!==-1){
    letterIndex = answer.indexOf(letter); this.blankLetters().replace(this.blankLetters()[letterIndex],letter);
  }else{
    $("#wrong").append("<li>" + letter + "</li>");
  }
};

exports.dinoModule = Words;
