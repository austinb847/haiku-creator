import { Haiku } from './../src/haiku.js';

describe('Haiku', () => { 
  let poem;

  it('should correctly create a haiku object containing one string', () => {
    let haiku = new Haiku("On an island of music in a city of drumbeats the drum dream girldreamed");
    expect(typeof haiku.poem).toBe('string');
  });

  test('should check to see if poem has three lines', () => {
    let poem = new Haiku("On an island of music \n in a city of drumbeats \n the drum dream girldreamed");
    poem.lineCount();
    expect(poem.lines.length).toBe(3);
  });

  test('should determine if poem contains less or more than three lines', () => {
    let notHaiku = new Haiku ("On an island of music  in a city \n of drumbeats  the drum dream girldreamed");
    expect(notHaiku.lineCheck()).toBe(false);
  });
  

  test('should break up lines into separate words', () => {
    let poem = new Haiku("On an island of music \n in a city of drumbeats \n the drum dream girldreamed");
    poem.lineCount();
    let words = poem.wordSplit(poem.lines[0]);
    console.log(words); 
    expect(words).toEqual(["On", "an", "island", "of", "music"]);
  });
  
  test('should count all vowels in each word in lines', () => {
    let poem = new Haiku("On an island of music \n in a city of drumbeats \n the drum dream girldreamed");
    poem.wordSplit();
    poem.vowelCount();
    expect(poem.syllables).toBe(7);
  });
  
});

