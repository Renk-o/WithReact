import React from 'react';
import { createRoot } from 'react-dom/client';
import ToDoItem from  './item'

const root = createRoot(document.getElementById('app'));

const ToDoList = () => (
    <div className="todolist" style={{maxWidth: '100%', boxShadow: '0px 3px 10px rgb(148, 143, 143)', padding:'0px 0px 5px 0px'}}>        
        <h1 className="caption" style={{ backgroundColor: '#4285af', color: 'white', padding: '10px 0px', fontSize: '1.5em', textAlign: 'center'}}>ToDoList</h1>
        <form className="form" style={{ display: 'inline-block' , padding: '5px', width: 'calc(100% - 128.86px)' }}>
            <input type="text" id="input-text" style={{ width: '95%', minHeight: "30px", paddingLeft: "10px" }} placeholder="Type your task..." value="" />            
        </form>        
        <button type='button' className="button" style={{ padding: '4px 0px', marginRight: '10px'}}>Clear list</button>
        <button type='button' className="button-return" style={{ padding: '4px 0px'}}>Return</button>
        <ul className="list">
            <ToDoItem text="Make a cake 1"/>
            <ToDoItem text="Make a cake 2"/>
            <ToDoItem text="Make a cake 3"/>
        </ul>
    </div>
)

root.render(<ToDoList />);