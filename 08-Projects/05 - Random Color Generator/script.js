// Generate Random Colors

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());

let colorChange;
document.querySelector('#start').addEventListener('click', ()=> {
    if(!colorChange) {
        console.log("Started!");
        
    colorChange = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
});



document.querySelector('#stop').addEventListener('click', () => {
    console.log("STOPPED!");
    
    // document.querySelector('#para').innerHTML = `You have got ${randomColor()}`
    clearInterval(colorChange); 
    // Edge Case:
    // after using colorChange we have to clean up the value of it. 
    colorChange = null;               
})
