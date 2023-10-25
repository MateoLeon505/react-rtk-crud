import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{
    id: '1',
    title: 'task1',
    description: 'task1 description', 
    completed: false
},
{
    id: '2',
    title: 'task2',
    description: 'task2 description', 
    completed: false
}]

// Creación del objeto taskSlice a partir de la función createSlice
export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    //Funciones para actualizar el estado:
    reducers:{
        addTask : (state, action) =>
        {
            state.push(action.payload);
        },
        editTask: (state, action) =>
        {
            const { id, title, description } = action.payload;
            const foundTask = state.find(task => task.id ===id);

            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        deleteTask : (state, action) =>
        {
            state.splice(state.indexOf(state.find(task => task.id === action.payload)), 1)
        }, 
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions; // Exporta las actions
export default taskSlice.reducer; // Reducer es una propiedad del objeto taskSlice