console.log(Math.round(1.6)); //2 내장함수(Math.roundsms)는
console.log(Math.round(1.4)); //1 (파일로 출력할수도 있고 메일로 보낼수 도있음)

// console.log(Math.round(1.6)); 
// filewrite('result.txt', Math.round(1.6)); 
// email('samachun@aaa.com', Math.round(1.6)); 

function sum(first, second) { // parameter(매개변수)
    console.log('a');
    return first + second; //화면 출력 return을 사용함으로 file출력과 mail로 출력할수 있음
    console.log('b'); //return을 만나면 즉시 그자리에서 함수는 종료가 됨.
}
console.log(sum(2, 4)); //argument (인자)