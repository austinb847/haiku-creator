import { Haiku } from './../src/haiku.js';

describe('Haiku', () => { 
  let poem;

  it('should correctly create a haiku object containing one string', () => {
    var haiku = new Haiku("On an island of music in a city of drumbeats the drum dream girldreamed");
    expect(typeof haiku.poem).toBe('string');
  });


  
})