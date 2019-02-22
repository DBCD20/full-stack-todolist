import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';


class TodoApp extends Component {
  render() {
    return (
    <div className="bg-primary">
    <div className="" style={{backgroundColor: '#f5f5f5', clipPath: 'polygon(93% 0, 87% 35%, 100% 53%, 100% 100%, 13% 100%, 0 80%, 13% 34%, 0 22%, 0 6%, 3% 0)'}}>
    <div className='container-fluid p-4' style={{
      background: 'white',
      height: '100vh',
      clipPath: 'polygon(0 22%, 0 11%, 7% 0, 91% 0, 85% 15%, 100% 39%, 100% 63%, 28% 100%, 20% 100%, 0 91%, 0 79%, 17% 50%)'
      }}>
     <section className='col-lg-5 col-md-8  mx-auto p-4' style={{background: 'white'}}>
       <h1 className='text-center p-2 text-secondary display-4'>What do you need <span className='h1 text-warning'>TIGER</span> ?</h1>
       <TodoList />
       
     </section>
    </div>
    </div>
    <img src='../tiger-yawning-snow-adult-40553.png' className='' style={{display: 'inline-block', position: 'absolute', bottom: '0', right: '0'}} />
    </div>
    );
  }
}

export default TodoApp;
