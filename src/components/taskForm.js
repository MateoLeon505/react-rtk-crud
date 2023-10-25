import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask } from "../App/features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { NavLink, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const TaskForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const tasks = useSelector(state => state.task);

    useEffect(()=> {
        if (id) setNewTask(tasks.find(task => task.id === id))
    },[dispatch])

    const [ newTask, setNewTask ] = useState({
        title:'',
        description:''
    });

    const handleChange = (e) =>
    {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (id) {
            dispatch(editTask(newTask));
        }

        else {
            dispatch(addTask({
                ...newTask,
                id: uuid(),
            }));
        }
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <NavLink to={'/'}>See Taks</NavLink>
            <span>Create Task</span>
            <br></br>
            <input name="title" type="text" placeholder="title" onChange={handleChange} value={newTask.title}/>
            <textarea name="description"placeholder="description" onChange={handleChange} value={newTask.description}/>
            <button>Save</button>
        </form>
    );
}
 
export default TaskForm;