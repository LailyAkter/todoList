import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
  render(){
    const {items,clearList,handleDelete,handleEdit} = this.props
    return(
      <ul className='list-group my-5'>
        <h3 className='text-capitalize display-4 text-center my-4'>Todo List</h3>
          {this.props.items.map((item)=>{
            return(
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}
              />
            )
          })}

        <button
          type='button'
          className='btn btn-danger btn-block mt-5'
          onClick={clearList}
          >
          Clear List
        </button>
      </ul>
    )
  }
}

export default TodoList;
