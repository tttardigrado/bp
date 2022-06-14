const sortNumbers = (a, b) => a - b;

export function bpBreak(teams, rounds, breaks) {
  let worstCase = [];
  let bestCase = [];

  // init arrays
  for (let i = 0; i < teams; i++) {
    worstCase.push(0);
    bestCase.push(0);
  }

  for (let round = 0; round < rounds; round++) {
    for (let team = 0; team < teams; team+=4) {
      // worst case (the best win)
      worstCase[team] += 3;
      worstCase[team + 1] += 2;
      worstCase[team + 2] += 1;
      
      // best case (the best lose)
      bestCase[team + 1] += 1;
      bestCase[team + 2] += 2;
      bestCase[team + 3] += 3;
    }
    worstCase.sort(sortNumbers);
    bestCase.sort(sortNumbers);
  }
  return [
    outputBreak(worstCase, breaks, teams),
    outputBreak(bestCase, breaks, teams)
  ]
}

function outputBreak(arr, breaks, teams) {
  let breakTeams = arr.slice(-breaks);
  let breakMin = breakTeams[0];
  let breakMax = breakTeams[breaks - 1];
  
  let breakCount = {};
  let totalCount = {};
  for (let i = breakMin; i <= breakMax; i++) {
    // init arrays
    breakCount[i] = 0;
    totalCount[i] = 0;
  }

  // get the number of teams that break with "X" points
  for (let i = 0; i < breaks; i++) {
    breakCount[breakTeams[i]]++;
  }

  // get the number of teams with "X" points,
  // where X > min
  for (let i = 0; i < teams; i++) {
    if (arr[i] >= breakMin) {
      totalCount[arr[i]]++;
    }
  }

  // All teams with points >= min break
  if (breakCount[breakMin] == totalCount[breakMin]) {
    return `Todas as equipas com ${breakMin} ou mais pontos fazem break.`
  } 

  return `Todas as equipas com ${breakMin + 1} ou mais pontos, e ${breakCount[breakMin]} / ${totalCount[breakMin]} das equipas com ${breakMin} pontos fazem break.`
}
