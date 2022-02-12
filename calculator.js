let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
let screenvalue = '';

for (let item of buttons) {
    item.addEventListener('click',function(e){
    //    let clickbtn = document.getElementsByClassName('button');
       let buttontext = e.target.innerText;
       console.log(buttontext);

       if(buttontext == 'X'){
           buttontext = '*';
           screenvalue += buttontext;
           screen.value = screenvalue;
       }
       else if(buttontext == '='){
        screen.value = eval(screenvalue);
        
       }
       else if(buttontext == 'C'){
           screenvalue = '';
           screen.value = screenvalue;
           
       }
       else{
        screenvalue += buttontext;
        screen.value = screenvalue;
       }
    })
}
// document.getElementsByClassName('button').addEventListener('click',function(){
//    console.log('hello') 
// })

