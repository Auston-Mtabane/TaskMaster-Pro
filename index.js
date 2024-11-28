const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const listdiv = document.getElementById('listNameDiv');
let n_listname = 0;

button1.addEventListener('click',function(){
   const listName = document.createElement('div');
   listName.className = "list-name";
   n_listname++;
   listName.textContent = `list ${n_listname}`;
   listName.id = `L${n_listname}`
   listName.contentEditable = 'true';

   listdiv.appendChild(listName)


});
