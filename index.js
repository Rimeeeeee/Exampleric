let add=0;
let additionEl=document.getElementById("cat-no");
console.log(additionEl);
function addition(){
    add=add+1;
  additionEl.innerText=add;
      }
      function save(){
          console.log(add);
      }
