import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodo} from '../Actions/todoActions';
import TodoItems from './TodoItems';
import '../styles/TodoList.css'
class TodoList extends Component{
    componentWillMount(){
        this.props.fetchTodo();
    }
    render (){
        const todoItems = this.props.todos.map(todo=>{
            return (
                <div key = {todo.id}>
                    <TodoItems todoItem = {todo}/>
                </div>
            );
        });
        return (
            <div>
                <h3>Todo List</h3>
                {todoItems}
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    todos : state.todos.todos
});
export default connect(mapStateToProps,{fetchTodo})(TodoList);