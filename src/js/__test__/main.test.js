import sortHeroes from '../main.js'

const dataList = [
  [
    
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
   
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    
    [
      { name: 'мечник', health: 80 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 80 },
    ],
   
    [
      { name: 'мечник', health: 80 },
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 50 },
    ],
  ],
  [
    
    [
      { name: 'мечник', health: 70 },
      { name: 'маг', health: 50 },
    ],
   
    [
      { name: 'мечник', health: 70 },
      { name: 'маг', health: 50 },
    ],
  ],
];

test.each(dataList)('should sort heroes by health in descending order', (input, expected) => {
  const result = sortHeroes(input);
  expect(result).toEqual(expected);
});
