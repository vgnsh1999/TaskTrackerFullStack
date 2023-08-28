async function addTask(event){
    try{
        event.preventDefault();
        const obj = {
            title:event.target.title.value,
            description:event.target.description.value,
            date:event.target.date.value,
            priority:event.target.priority.value,
            status:event.target.status.value
        }
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/task/add-task', obj, {headers:{"Authorization":token}});
        showTaskOnScreen(response.data.newTaskAdded);
    } catch(error){
        console.log(error);
        document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong!</h4>'
    }
   }
    function showTaskOnScreen(obj){
        const parentElement = document.getElementById('taskTable');
        const childElement = `<tr id=${obj._id}><td>${obj.title}</td><td>${obj.description}</td><td>${obj.date}</td><td>${obj.priority}</td><td>${obj.status}</td>
            <td><button class="btn btn-primary" onclick="editExpense('${obj._id}','${obj.amount}','${obj.description}','${obj.date}','${obj.priority}','${obj.status}')">Edit Task
                <button class="btn btn-danger" onclick="deleteExpense('${obj._id}')">Delete Task
            </td></tr>`
        parentElement.innerHTML = parentElement.innerHTML + childElement;        
    }

    async function deleteTask(taskID){
        try{
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3000/task/delete-task/${taskID}`,{headers:{"Authorization":token}});
            removeTaskFromScreen(taskID);
        } catch(error){
            console.log(error);
            document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong!</h4>'
        }
    }

    function removeTaskFromScreen(taskID){
        document.getElementById(taskID).remove();
    }

    function editTask(id,title,description,date,priority,status){
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        document.getElementById('date').value = date;
        document.getElementById('priority').value = priority;
        document.getElementById('status').value = status;

        deleteTask(id);
    }


    window.addEventListener("DOMContentLoaded",async ()=>{
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/expense/get-task',{headers:{"Authorization":token}});
            for(var i=0;i<response.data.allTasks.length;i++){
                showTaskOnScreen(response.data.allTasks[i]);
            }
        } catch(error){
            console.log(error);
            document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong!</h4>'
        }
    });

    // window.addEventListener("DOMContentLoaded",async ()=>{
    //     try{
    //         pageFunction2();
    //         const token = localStorage.getItem('token');
    //         const limit = localStorage.getItem('limit');
    //         const response = await axios.get(`http://localhost:3000/expense/get-task?limit=${limit}`,{headers:{"Authorization":token}});
    //         for(var i=0;i<response.data.allExpenses.length;i++){
    //             showTaskOnScreen(response.data.allExpenses[i]);
    //         }
    //     } catch(error){
    //         console.log(error);
    //         document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong!</h4>'
    //     }
    // });

