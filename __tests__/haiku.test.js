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

  
})