let column = document.querySelectorAll('.column');

// function generateColor() {
//     let symbols = '1234567890ABCDEF';
//     let color = '';
//     for (let i = 0; i < 6; i++) {        
//         color += symbols[Math.floor(Math.random() * symbols.length)];
//     }
//     return "#" + color;
// } U can use that random color generator , or using with chroma js -> chroma.random() 

function setTextColor(text , color) {             
    let luminance = chroma(color).luminance() > 0.5 ? 'black' : 'white';
    text.style.color = luminance;
}

function setColor() {
    column.forEach(item =>{ 
        let text = item.querySelector('#hex_info');
        let lockColor = item.querySelector('#lock_color');
        lockColor.addEventListener('click' , function(e) {
            this.classList.toggle('unlocked');
            this.classList.toggle('locked');  
            this.classList.contains('unlocked') ? this.innerText = 'Open color' : this.innerText = 'Lock color'                        
        })   
        if(lockColor.classList.contains('locked')) {
            return true
        }
        let colorRandom = chroma.random();
        item.style.background = colorRandom;   
        text.innerText = colorRandom;
        setTextColor(text , colorRandom);
        setTextColor(lockColor , colorRandom);                  
    }) 
}

document.addEventListener('keyup' , function(e) {
    if(e.code == 'Space') {
        setColor();
    }
})
setColor();