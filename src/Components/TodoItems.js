import React,{Component} from 'react';
import {toggleTodoStatus, deleteTodo} from '../Actions/todoActions';
import {connect} from 'react-redux'; 
class TodoItems extends Component{
    onClick(id){
        this.props.toggleTodoStatus(id);
    }
    onDelete (id){
        this.props.deleteTodo(id);
    }
    render (){
        const todoItem = this.props.todoItem;
        const closeItem = todoItem.completed ? <p className='deleteItem' onClick={this.onDelete.bind(this,todoItem.id)}> X </p> : <p></p>;
        return (
            <div className='todoItems'>
                <p onClick={this.onClick.bind(this,todoItem.id)} style={todoItem.completed ? {textDecoration: 'line-through'} : {}} >
                    {todoItem.todo}
                </p>
                {closeItem}
            </div>
        );
    }
}
export default connect (null, {toggleTodoStatus, deleteTodo})(TodoItems)