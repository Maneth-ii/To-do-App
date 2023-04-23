const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");
const inputText = document.getElementById("input-box");
const resetButton = document.getElementById("reset-btn")

addBtn.addEventListener("click",()=>{
	if(inputText.value === ""){
		alert("Please Add Task to Complete");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputText.value;
		listContainer.appendChild(li);
		let deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "X";
		li.appendChild(deleteBtn);	
	}
	inputText.value ="";
	saveToLocalStorage();
})

listContainer.addEventListener("click",(e)=>{
	if(e.target.tagName ==="LI"){
		e.target.classList.toggle("checked");
		saveToLocalStorage();

	}else if(e.target.tagName ==="BUTTON"){
		e.target.parentElement.remove();
		saveToLocalStorage();
	}
	
},false)


const saveToLocalStorage = ()=>{
	localStorage.setItem("task",listContainer.innerHTML);
}

const renderTasks = ()=>{
	listContainer.innerHTML = localStorage.getItem("task")
}

renderTasks()


resetButton.addEventListener("dblclick",()=>{
	localStorage.clear()
	listContainer.innerHTML = ""
})

