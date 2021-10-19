import React, { useState, useEffect} from 'react'
import "./styles.css";

function Todo() {

    const defaultList = [
        { name: "Kitap oku" },
        { name: "Spor yap" },
        { name: "Yemek yap" },
      ];

      const [list, updateList] = useState(defaultList);
      let textInput = React.createRef();
    
      const handleRemoveItem = (e) => {
       const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.name !== name));
      };
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <form>
                        <input className="new-todo" ref={textInput} placeholder="What needs to be done?" autofocus />
                        
                    </form>
                    <button className="btnAdd" onClick={() => updateList([...list, {name : textInput.current.value},])}>ADD</button>
                </header>
	
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>
               

                <ul className="todo-list">
                    {
                       list.map((item, i) => {
                        return (
                          <>
                            <li className="listItem" key={i}>{item.name} <span name={item.name} onClick={handleRemoveItem}>x</span></li>
                          </>
                        );
                      }) 
                    }
                </ul>
            </section>

            
            <footer className="footer">

            <span className="todo-count">
                {
                    <strong>{ list.length }</strong>
                }
                   Items left
                </span>
                

                <ul className="filters">
                    <li>
                        <a className="selected">All</a>
                    </li>
                    <li>
                        <a>Active</a>
                    </li>
                    <li>
                        <a>Completed</a>
                    </li>
                   
                </ul>

                
                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
        </div>
    )
}

export default Todo
