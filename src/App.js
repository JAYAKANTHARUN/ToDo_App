
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const removeToDo = (id) => {
    setToDos(toDos.filter((object) => object.id !== id))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <br />
        <h2>"A goal without a plan is just a wish"</h2>
        <h2 className="name"> - Antoine de Saint-Exupéry</h2>
        <br /><br />
        <h2>Add Today's Goals &#9917;</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  checked={obj.status}
                  onChange={(e) => {
                    const updatedToDos = toDos.map((toDo) => {
                      if (toDo.id === obj.id) {
                        return {
                          ...toDo,
                          status: e.target.checked
                        }
                      }
                      return toDo
                    })
                    setToDos(updatedToDos)
                  }}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => removeToDo(obj.id)} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
