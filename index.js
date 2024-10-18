
//define arrays contain set of objects:

    let tasks=[
        {
            "title":"",
            "date":"15/10/2030",
            "isDone": false

        },
        {
            "title":"",
            "date":"15/10/2030",
            "isDone": false

        },
        {
            "title":"",
            "date":"15/10/2030",
            "isDone": false

        }
    ]
    //convert string into array:
    function gettasksfromstorage(){
        let retrievedTasks=JSON.parse (localStorage.getItem("tasks"))
        if (retrievedTasks==null){
            tasks=[]
        }else{
            tasks=retrievedTasks
        }
       
    }
    gettasksfromstorage()
    
    // we need to use function instead than object,cuz => it's more easy to calls
    function filltask(){
        document.getElementById("tasks").innerHTML=""
        let index =0
    for(task of tasks){ 
 let content=  ` 
 <!-- task info -->
    <div  class="task ${task.isDone? 'done':''}">
         <div style="width: 70%;  ">
            <h2> ${task.title}</h2>

            <div>
                <span class="material-symbols-outlined">
                    calendar_month
                    </span>
                <span>
                   ${task.date}
                </span>
            </div>
         </div>

         <!-- actions -->
      

          <div style="display: flex; justify-content: space-between; align-items: center; width: 30%;">
            <button onclick="deletetask(${index})" class="circular" style="background-color:#0f455b;"> 
                <span class="material-symbols-outlined">
                    close
                    </span>
                
                </button>
            <button onclick="completetask(${index})" class="circular" style="background-color: #0f455b;"> 
                <span class="material-symbols-outlined">
                    check
                    </span>
                 </button>
            <button onclick="edittask(${index})" class="circular" style="background-color: #0f455b;"> <span class="material-symbols-outlined">
                edit
                </span>
               </button>

          </div>
     </div>`
        document.getElementById("tasks").innerHTML +=content
      index++
   
    }
}
filltask()

    document.getElementById("add-btn").addEventListener("click",function(){
        let now= new Date()
        let date=now.getDate()+"/"+( now.getMonth()+1 )+"/"+now.getFullYear()
        let taskName= prompt("الرجاء ادخال مهمة")

        // date:

let taskOBJ={
    "title":taskName,
    "date":date,
    "isDone":false
}
        tasks.push(taskOBJ)
        storeTasks()
        filltask()
        })


        // delete task:
function deletetask(index){
    let isconfirm=confirm("هل انت متاكد من حذف المهمة؟")
    if(isconfirm==true){
        tasks.splice(index,1)
        storeTasks()
        filltask()
    }
}

//edit task:
 function edittask(index){
    let newTask=prompt("ادخل مهمة جديدة")
let task=tasks[index]
task.title=newTask
storeTasks()
filltask()
 }

 //check task:
 function completetask(index){
let task=tasks[index]
task.isDone=true
storeTasks()
filltask()
 }

 //storage func:
 function storeTasks(){
    let taskString=JSON.stringify(tasks)
    localStorage.setItem("tasks",taskString)
 }