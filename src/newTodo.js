import React, { Component } from 'react';

export default class NewTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: ''
    }
    this.handleChange   = this.handleChange.bind(this);
    this.handleAdd   = this.handleAdd.bind(this);
    }; 
    handleChange(e){
        this.props.handleChange(e.target.value);
    };

    handleAdd(e){
        e.preventDefault();
            this.props.handleSubmit();
            return;
    }

    render(){
        return(
            <div className=''>
                <form onSubmit={ this.handleAdd }>
                    <div className='input-group mb-3 '>
                    
                        <input className='form-control' autoComplete='off' type='text' name='task' id='task' onChange={ this.handleChange } value={ this.props.view } />
                        <div className='input-group-append'>
                            <button  className='btn btn-secondary text-white'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
    )};
};