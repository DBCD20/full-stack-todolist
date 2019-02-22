import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';


class TodoApp extends Component {
  render() {
    return (
    <div className='container-fluid p-4'>
     <section className='col-lg-5 col-md-8  mx-auto p-4'>
       <h1 className='text-center p-2'>TODO APPLICATION</h1>
       <TodoList />
     </section>
    </div>

    );
  }
}

export default TodoApp;
