function roundRoom(i) {
    while (i % 4 !== 0) { // add swing teams
      i++
    }
    return i;
  }
  
  function sortNumbers(a, b) {
    return a - b;
  }
  
  // The Good Stuff
  
  function bpBreak() {
    var p = parseInt(document.getElementById('teams').value);
    var q = parseInt(document.getElementById('rounds').value);
    var r = parseInt(document.getElementById('break').value);
  
    p = roundRoom(p);
    r = roundRoom(r);
  
    var teamarr1 = [];
    var teamarr2 = [];
  
    console.log(p);
    for (var i = 0; i < p; i++) {
      teamarr1.push(0);
      teamarr2.push(0);
    }
    console.log("Array Set-Up", teamarr1, teamarr2);
  
    for (var j = 0; j < q; j++) {
      for (var k = 0; k < p; k++) {
        //Case 1 : Where all pull ups win
        if (k % 4 === 0) {
          teamarr1[k] += 3;
          teamarr1[k + 1] += 2;
          teamarr1[k + 2] += 1;
        }
        //Case 1 : Where all pull ups lose
        if (k % 4 === 0) {
          teamarr2[k + 1] += 1;
          teamarr2[k + 2] += 2;
          teamarr2[k + 3] += 3;
  
        }
      }
      console.log(teamarr1, teamarr2);
      teamarr1.sort(sortNumbers);
      teamarr2.sort(sortNumbers);
  
      console.log("Log 1", teamarr1, teamarr2);
    }
    outputBreak(teamarr1, r, p, 'pulluplose');
    outputBreak(teamarr2, r, p, 'pullupwin');
  }
  
  function outputBreak(teamarr, r, p, id_op) {
    var breakTeams = teamarr.slice(-r);
    var breakMin = breakTeams[0];
    var breakMax = breakTeams[r - 1];
    var breakCount = {};
    var totalCount = {};
    for (var i = breakMin; i <= breakMax; i++) {
      breakCount[i] = 0;
      totalCount[i] = 0;
    }
    for (var l = 0; l < breakTeams.length; l++) {
      breakCount[breakTeams[l]]++;
    }
    for (var m = 0; m < p; m++) {
      if (teamarr[m] >= breakMin) {
        totalCount[teamarr[m]]++;
      }
    }
  
    var list = document.createElement("p");
      for (var key in breakCount) {
        var elem = document.createElement("p");
        if (breakCount[key] != 0) {
          if (breakCount[key] != totalCount[key]) {
            elem.innerHTML = '<b>' + breakCount[key] + '</b>' + ' out of ' + '<b>' + totalCount[key] + '</b>' + ' teams on ' + '<b>' + key + '</b>' + ' points break on speaks.';
            list.appendChild(elem);
          } else {
            elem.innerHTML = 'All teams on ' + '<b>' + key + '</b> points or above break.';
            list.appendChild(elem);
            break;
          }
        }
      }
      document.getElementById(id_op).replaceChild(list, document.getElementById(id_op).firstChild);
    }
  