import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';


class TodoApp extends Component {
  render() {
    return (
    <div className='container-fluid p-4' style={{
     
      height: '100vh'}}>
     <section className='col-lg-5 col-md-8  mx-auto p-4' style={{background: 'white'}}>
       <h1 className='text-center p-2 text-warning'>What do you need Tiger?</h1>
       <TodoList />
       
     </section>
     <img src='../tiger-yawning-snow-adult-40553.png' className='' style={{display: 'inline-block', position: 'absolute', bottom: '0', right: '0'}} />
    </div>

    );
  }
}

export default TodoApp;
