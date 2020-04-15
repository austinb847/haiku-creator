export class Haiku {
  constructor (poem) {
    this.poem = poem;
    this.lines = [];
  }

  lineCount() {
   
    const splitLines = this.poem.split("\n");
    splitLines.forEach(line => {
      this.lines.push(line);
     });
    
     if (this.lines.length != 3) {
       return false;
     }
  }
}