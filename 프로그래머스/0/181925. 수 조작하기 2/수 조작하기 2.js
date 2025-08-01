function solution(numLog) {
  var answer = "";

  for (let i = 1; i < numLog.length; i++) {
    // numLogp -> numLog로 수정
    const dan = numLog[i] - numLog[i - 1];

    switch (dan) {
      case 1:
        answer += "w"; // anwer -> answer로 수정
        break;
      case -1:
        answer += "s"; // anwer -> answer로 수정
        break;
      case 10:
        answer += "d"; // anwer -> answer로 수정
        break;
      case -10:
        answer += "a"; // anwer -> answer로 수정
        break;
    }
  }

  return answer;
}