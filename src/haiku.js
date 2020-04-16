export class Haiku {
  constructor (poem) {
    this.poem = poem;
    this.lines = [];
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
    this.vowels = 0;
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
    let numVowels = 0;
    lineOfWords.forEach(function(word) {
      
      let vowels = word.match(/[aeiouy]/gi);
      let count = vowels === null ? 0 : vowels.length;
      numVowels += count;
    }); 
    this.vowels.push(numVowels);
    
  } 

  silentVowelCount(word) {
    let vowels = word.match(/[aeiouy]/gi);
    let counter = 0;
    if (word.length <= 3) {
      counter = 1;
    }
    let lastChar = word.length -1;
    if (word.charAt(lastChar) === "e") {
      this.vowels -= 1;
    }

    if (this.vowels === 0) {
      this.vowels += 1;
    }
    

    /* this.words = this.line.split(" ");
    let vowels = this.vowels;

    words.forEach(function(word) {
      vowels = word.split(" ");
      if (word != "me" && word != "be" && word != "he" && word != "we" && word != "she" && word != "the" && word.charAt(word.length-1) === "e" || word.charAt(word.length-2) === "e") {
        
      }
      vowels = vowels.join("");
      word.push(vowels);
    });
     */
    
  } 

}

// word = word.replace(/([^laeiouy]es|ed)$/i, '');
//       word = word.replace(/([.!?:;])$/i, '');
//       word = word.replace(/^y/i, '');
//       this.lineSyllableHolder.push(word.match(/[aeiouy]{1,2}/gi).length);