let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
for (const item of buttons) {
    item.addEventListener('click',(e)=>{
    //    let clickbtn = document.getElementById('button');
       let buttontext = e.target.innertext;
       console.log(buttontext);
    })
}
