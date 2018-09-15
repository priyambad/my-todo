import React,{Component} from 'react';
import {connect} from 'react-redux';
import {newTodo} from '../Actions/todoActions';
import uuid from 'uuid';
import '../styles/AddTodo.css';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            todo : e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const newTodoItem = {
            id : uuid.v4(),
            todo : this.state.todo,
            completed : false
        }
        this.props.newTodo(newTodoItem);
        this.setState({
            todo : ''
        });
    }
    render (){
        return (
            <div className='AddTodoContainer'>
                <h3>Add Todo</h3>
                <form onSubmit = {this.onSubmit}>
                    <input type="text" placeholder="Todo Details" onChange = {this.onChange} value = {this.state.todo}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
export default connect(null,{newTodo})(AddTodo)