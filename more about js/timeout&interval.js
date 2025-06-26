setTimeout(() => {
    console.log('selim\n')
}, 5000)

// setInterval(() => {
//     console.log('1')

// }, 2000);

// fot stoping interval
let num = 0
const intervalId = setInterval(() => {
    num++;
    if(num>5){
        clearInterval(intervalId)
    }
    console.log(intervalId, num)
}, 200);
