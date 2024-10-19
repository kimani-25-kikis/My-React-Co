import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>TO DO LIST</h1>
            <div>
                <input 
                    type="text" 
                    value={newTask} 
                    placeholder='Enter a task...' 
                    onChange={handleInputChange} 
                />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, i) => (
                    <li key={i}> 
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(i)}>Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(i)}>Move Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(i)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
