   let dp = document.getElementById("display");

   
// for displaying numbers
    function goToDisplay(value){
      if (dp.innerText ==='0' && value !=='.') {
          dp.innerText = value;
      } 
      else {
         dp.innerText += value;
      }
   }
   

// for clear display
   function deleteDisplay(value){
         dp.innerText = "0";
   }
   
// for remove one by one number on display 
   function backspace(){
      dp.innerText= dp.innerText.slice(0,-1) || '0';
   }
   
   // for calculating result
   function result(){
      try {
         dp.innerText = eval(dp.innerText.replace('x','*')|| '0')
      } catch  {
         dp.innerText ='Error'
         setTimeout(deleteDisplay,2000);
      }
   }
   

// for working buttons on keybords
   document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/\d/.test(key)) goToDisplay(key);
    else if (key === '.') goToDisplay('.');
    else if (['+', '-', '*', '/'].includes(key)) goToDisplay(key);
    else if (key === '(' || key === ')') goToDisplay(key);
    else if (key === 'Enter') result();
    else if (key === 'Escape') deleteDisplay();
    else if (key === 'Backspace') backspace();
});

   