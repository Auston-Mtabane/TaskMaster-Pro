const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const listdiv = document.getElementById('listNameDiv');
const listn = document.getElementsByClassName('list-name');
let n_listname = 0;


function handleDivClick(event) {
   const allDivs = document.querySelectorAll('.list-name');
  allDivs.forEach(div => {
    div.contentEditable = 'True'; // Disable editing
    div.classList.remove('selected'); // Remove selected class
  });

  // Select the clicked div
  const listName = event.target;
  listName.contentEditable = 'true'; // Enable editing for the clicked div
  listName.classList.add('selected'); // Add selected class
  console.log(listName.textContent)
 }



button1.addEventListener('click',function(){
   const listName = document.createElement('div');
   listName.className = "list-name";
   n_listname++;
   listName.textContent = `list ${n_listname}`;
   listName.id = `L${n_listname}`
   listName.contentEditable = 'True';
   listName.addEventListener('click', handleDivClick);

   listdiv.appendChild(listName);  

   

});
