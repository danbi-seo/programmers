function solution(a, b) {
    var answer = 0;
    ax = a<=b?a:b;
    bx = a>b?a:b;
    for(let i=ax; i<=bx; i++){
        answer += i;
    }
    return answer;
}