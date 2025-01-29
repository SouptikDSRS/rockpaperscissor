// let counter = {
//     win: 0,
//     lose: 0,
//     tie: 0
// };

// var computermove;
// var result1;
// const savedScore = JSON.parse(localStorage.getItem('score'));
// if (savedScore) {
//     counter = savedScore;
// }

// console.log(counter);

// function function1() {
//     let randomnumber = Math.random();
//     if (randomnumber > 0 && randomnumber <= 1 / 3) {
//         computermove = 'rock';
//     } else if (randomnumber > 1 / 3 && randomnumber <= 2 / 3) {
//         computermove = 'paper';
//     } else {
//         computermove = 'scissor';
//     }
// }

// function function2() {
//     counter.win = 0;
//     counter.lose = 0;
//     counter.tie = 0;
//     localStorage.setItem('score', JSON.stringify(counter));
//     document.querySelector('#p1').innerHTML = ''
//     document.querySelector('#p2').innerHTML =`Win:${counter.win} Lose:${counter.lose} Tie:${counter.tie}`;
//     alert('The score is reset');
// }

// function getResult(playerMove) {
//     function1();
//     if (playerMove === computermove) {
//         result1 = 'Draw';
//         counter.tie++;
//     } else if (
//         (playerMove === 'rock' && computermove === 'scissor') ||
//         (playerMove === 'paper' && computermove === 'rock') ||
//         (playerMove === 'scissor' && computermove === 'paper')
//     ) {
//         result1 = 'You Win';
//         counter.win++;
//     } else {
//         result1 = 'Computer Wins';
//         counter.lose++;
//     }
//    // alert(`Your choice is ${playerMove}, computer's choice is ${computermove}, and result is ${result1}\n Win:${counter.win} Lose:${counter.lose} Tie:${counter.tie}`);
//     localStorage.setItem('score', JSON.stringify(counter));
// }
//     function func1(){
//         document.querySelector('#p1').innerHTML = `${result1} `; 
//         document.querySelector('#p2').innerHTML = ` Win: ${counter.win}  Lose: ${counter.lose}  Tie: ${counter.tie}`; 
        
//  }
console.log(3=='3');