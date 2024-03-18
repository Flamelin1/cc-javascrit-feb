/*for ( let count= 0; count < 9; count++){
    document.write('<h2>' + "hello" +'</h2>');
}*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";  

 


 