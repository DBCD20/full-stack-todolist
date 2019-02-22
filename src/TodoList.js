import Todo from './Todo';
import NewTodo from './newTodo';
import React, { Component }     from 'react';
import { Route }                from 'react-router-dom';
import { addTodo, removeTodo, getTodos }  from './actionCreators';
import { connect }              from 'react-redux';


class TodoList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            task: '',
            current: ''
    }
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
    this.props.getTodos();
}

handleChange(i){
    this.setState({task: i})
}
addTask(){
    if(this.state.task){
        this.props.addTodo(this.state.task);
        this.setState({task: ''});
        return
    }
    alert('Please insert valid task')
}
handleRemove(id){
    this.props.removeTodo(id)
}

    render(){
       let todos = this.props.todo.map((val) => <Todo task={ val.task } i={ val._id } key={ val._id } remove={ this.handleRemove.bind(this, val._id) }/>)
        return (
            <div className=''>
                <NewTodo handleChange={this.handleChange} view={this.state.task} handleSubmit={this.addTask} />
                <div className='container'>
                    <ul className='list-group list-group-flush'>
                        { todos }
                        <li className='list-group-item'>{this.state.task}</li>
                    </ul>
                </div>
                        
            </div>
        )
}};

function mapStateToProps( reduxState ){
return {
    todo: reduxState.todo
}};

export default connect(mapStateToProps, { removeTodo, addTodo, getTodos })(TodoList);