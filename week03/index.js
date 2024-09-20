"use strict";

function runExperiment(sampleSize) {
  
  const valueCounts = [0, 0, 0, 0, 0, 0]; 

  for (let a = 0; a < sampleSize; a++) {  
  const randomNumber = Math.floor(Math.random() * 6); 
  valueCounts[randomNumber] = valueCounts[randomNumber]+1;
}

  const results = [];
  
  for (let key of valueCounts) {
      const procent = ((key/sampleSize)*100).toFixed(2);
      results.push(procent);
    }
  
    return results;
}

function main() {
  
  const sampleSizes = [100, 1000, 1000000];
  
  for (let count of sampleSizes) {
    const expResult = runExperiment(count);
    console.log(`[${expResult.join(', ')}] ${count}`);
  }
}

main();
