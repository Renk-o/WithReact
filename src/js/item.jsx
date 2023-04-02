import React from 'react';

const listButtonStyle = {
    padding: '0 10px',
    border: '0',
    backgroundColor: 'white',
    color: '#364951',
    fontWeight: 'bolder',
    fontSize: '16px'
};

export default function ToDoItem ({ text }) {
    return (
        <li className='list__item' style={{ padding:'5px', borderBottom:'1px solid #bbbfc2'}}>
            <input type='checkbox' />
            <button type='button' className='list__button' style={listButtonStyle}>{text}</button>
            <button type='button' className='list__button'>Delete</button>
        </li>
    );
}