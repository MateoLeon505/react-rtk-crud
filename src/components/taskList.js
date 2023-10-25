import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from "../App/features/tasks/taskSlice";
import { NavLink } from 'react-router-dom';

const TaskList = () => {

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.task);

    const handleDelete = (id) =>
    {
        console.log(id);
        dispatch(deleteTask(id));
    }

    return (
        <div>
            <header>
                <h1>TaskList:</h1>
                <NavLink to={'/create'}>Create Task</NavLink>
            </header>
                {tasks.map(task =>
                    (
                        <div key = {task.id}>
                                <h2>{task.title}</h2>
                                <span>{task.description}</span>
                                <button onClick={() =>handleDelete(task.id)}>X</button>
                                <NavLink to={`/edit-task/${task.id}`}>Edit</NavLink>
                        </div>
                ))}
                <br/>
                <br/>
        </div>
    );
}
 
export default TaskList;