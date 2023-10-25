import { useDispatch, useSelector } from 'react-redux';
import  TaskForm  from './components/taskForm.js';
import  TaskList  from './components/taskList.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/create' element={<TaskForm/>}/>
        <Route path='/edit-task/:id' element={<TaskForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
