import React,{Component} from 'react';
import {toggleTodoStatus, deleteTodo} from '../Actions/todoActions';
import {connect} from 'react-redux'; 
class TodoItems extends Component{
    onClick(todoItem){
        if(todoItem.completed){
            this.props.deleteTodo(todoItem.id);
        }
        else {
            this.props.toggleTodoStatus(todoItem.id);
        }
    }
    render (){
        const todoItem = this.props.todoItem;
        return (
            <div className='todoItems'onClick={this.onClick.bind(this,todoItem)}>
                <p style={todoItem.completed ? {textDecoration: 'line-through'} : {}} >{todoItem.todo}</p>
            </div>
        );
    }
}
export default connect (null, {toggleTodoStatus, deleteTodo})(TodoItems)