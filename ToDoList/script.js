 const dom ={
 inputEl:document.querySelector('.entered-list'),
 addBtn:document.querySelector('.add-list'),
 task:document.querySelector('.task'),

 }


 dom.addBtn.addEventListener('click',function() {
   if (dom.inputEl.value !=0 ) {

     let newItem = document.createElement("div");
     newItem.classList.add('item');
    newItem.innerHTML=`<p>${dom.inputEl.value}</p>
    <div class="item-btn">
   <i class="fa-regular fa-rectangle-xmark"></i>

 </div>`

 dom.task.appendChild(newItem)
 dom.inputEl.value = ""

  }else{
    alert("Please enter task")
  }
   
 })

 dom.inputEl.addEventListener('keypress',function(event) {
    if ( dom.inputEl.length >0 && event.keyCode == 13) {
 
      let newItem = document.createElement("div");
      newItem.classList.add('item');
     newItem.innerHTML=`<p>${dom.inputEl.value}</p>
     <div class="item-btn">
    <i class="fa-regular fa-rectangle-xmark"></i>
 
  </div>`
 
  dom.task.appendChild(newItem)
  dom.inputEl.value = ""
 
   }else{     
    
    alert("Please enter task")
    }
    
  })




 dom.task.addEventListener("click",function(e){
 if (e.target.classList.contains('fa-rectangle-xmark')){
    e.target.parentElement.parentElement.remove()
} {
    
}
console.log("click");

 })
