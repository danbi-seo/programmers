function solution(a, b) {
    var answer = 0;
    if (Number(a.toString() + b.toString()) >= (2 * a * b)){
        answer = Number(a.toString() + b.toString());
    } else {
        answer = 2 * a * b;
    }  
    return answer;
}