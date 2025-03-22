'use strict'
export default function sortHeroes(playerArray) {
  playerArray.sort((a, b) => b.health - a.health);
  return playerArray;
}


