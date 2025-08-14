function solution(n) {
    var x = n-1;
    for(let i = 2; i <= x; i++){
        if(x % i === 0) return i;
    }
    return x;
}