import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/slices/tasksslice';
import { useRef } from 'react';

function App() {

  const dispatch=useDispatch()
  const {list}=useSelector(state=>state.taskreducer)
  const r1=useRef()
  return (
    <div className="App">

      <input ref={r1} placeholder='enter task'></input>
      <button onClick={()=>dispatch(addTask({name:r1.current.value,isDone:false}))}>add task</button>

      {list.map(e=><><h1>{e.name}</h1> <input type='checkbox' checked={e.isDone}></input></>)}
    </div>
  );
}

export default App;
