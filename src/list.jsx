import React,{useState} from 'react';

function ToDoList(){
    const[tasks,setTasks]=useState([]);
    const [newTasks,setNewTasks]=useState("");

    function handleInput(event){
setNewTasks(event.target.value);
    }
function addTask(){
    if(newTasks.trim() !==""){
        setTasks(t=>[...t,newTasks]);
        setNewTasks(""); 
    }
}
function deleteTask(index){
const updatedTasks= tasks.filter((_,i)=> i!== index);
setTasks(updatedTasks);
}
function moveTaskUp(index){
if(index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
    setTasks(updatedTasks);
}
}
function moveTaskDown(index){
    if(index<tasks.length -1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
}
}

return(<div className="to-do-list">
    <h1>TO-DO-LIST</h1>
    <div>
        <input type="text"
        placeholder='Enter a Task...'
        value={newTasks}
        onChange={handleInput}/>
        <button className='add-btn' onClick={addTask}>Add</button>
    </div>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button
                className="del-btn"
                onClick={()=> deleteTask(index)}>
                    Delete</button>

                    <button
                className="up-btn"
                onClick={()=> moveTaskUp(index)}>
                    ⬆️</button>

                    <button
                className="up-btn"
                onClick={()=> moveTaskDown(index)}>
                    ⬇️</button>
            </li>
        )}
    </ol>
</div>);    

}
export default ToDoList