export class Haiku {
  constructor (poem) {
    this.poem = poem;
    this.lines = [];
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.vowels = [];
    this.syllables = [];
  }

  lineCount() {
    const splitLines = this.poem.split("\n");
    splitLines.forEach(line => {
      this.lines.push(line);
    });
  }
  
  lineCheck() {
    if (this.lines.length != 3) {
      return false;
    }
  }

  wordSplit(line) {
    const splitWords = line.split(" ");
    return splitWords.filter(function(entry) { return entry.trim() != ''; });
  }

  vowelCount(lineOfWords) {
    let numSyllables = 0;
    lineOfWords.forEach(function(word) {
      
      let vowels = word.match(/[aeiou]/gi);
      let count = vowels === null ? 0 : vowels.length;
      numSyllables += count;
    }); 
    this.syllables.push(numSyllables);
    
  } 

}