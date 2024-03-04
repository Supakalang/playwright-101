import {test} from '@playwright/test';

test('demo if else statement', async() => {
    let myExamResult : number = 70;

    if (myExamResult===100){
        console.log('A+');
    } else if (myExamResult >= 80){
        console.log('A');
    } else if (myExamResult >= 70) {
        console.log('B'); 
    } else if (myExamResult >= 60) {
        console.log('C');
    } else if (myExamResult >= 50) {
        console.log('D');
    } else {
        console.log('F');
    }
});

test('demo for loop statement',async() => {
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
    console.log('Hello world');
 
});

// test('demo for loop statement',async() => {

//     for(let i =0; i < 3; i++){
//         console.log('Hello world')
//     }
// });

// test('demo for loop statement',async() => {
//     const welcomeMSg: string = 'Hello world';

//     for(let i =0; i < 4; i++){
//         console.log(welcomeMSg)
//     }
// });

// test('demo for of statement',async() => {
//     const myFriends : string[] = ['John', 'Jack', 'Rose']
//     for (let friendName of myFriends){
//         console.log('Hello '+friendName)
//     }
// });

// test('demo for in statement',async() => {
//     const myFriends : string[] = ['John', 'Jack', 'Rose']
//     for (let i in myFriends){
//         // console.log('index '+i)
//         console.log('Hello '+myFriends[i])
//     }
// });