let taskListEl = document.getElementById("todoCard") 
let inputEL = document.getElementById("inputBox")
let addBtnEl = document.getElementById("addBtn")
let taskEl = document.getElementById("task")
uniq_no = 0

addBtnEl.addEventListener('click', function(){
    if(inputEL.value === ""){
        alert("Task cannot be empty.")
    }
    
    else{
        let divEl = document.createElement('div')
        divEl.classList.add("task-item-container")
        divEl.id = "taskC"+uniq_no
        let pEl = document.createElement('li')
        pEl.classList.add('task-text')
        pEl.id = "task"+uniq_no
        pEl.textContent = inputEL.value
        let iEl = document.createElement("i")
        iEl.classList.add('cross','fa-solid','fa-xmark')
        iEl.id = "remove"+uniq_no
        divEl.appendChild(pEl)
        divEl.appendChild(iEl)
        taskListEl.appendChild(divEl)
        uniq_no += 1
    }
    save()
})

// taskListEl.addEventListener('click', function(e)){
//     if(e.target.tagName === "I"){
//         e.target.parentElement.remove()
//     }
// }

let save= function(){
    localStorage.setItem("data", taskListEl.innerHTML)
}

let dispaly = function(){
    taskListEl.innerHTML = localStorage.getItem("data")
}

dispaly()

localStorage.clear()
