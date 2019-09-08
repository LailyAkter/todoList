import React from 'react';
import './App.css';
// ........... components .......//
import TodoInput from './components/TodoInput';
import TodoList  from './components/TodoList';
import uuid from 'uuid';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      id:uuid(),
      item:'',
      editItem:false
    }

  }
  handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = e =>{
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    };
    console.log(newItem)
    const updateItem = [
      ...this.state.items,newItem
    ];
    this.setState({
      items:updateItem,
      item:'',
      id:uuid(),
      editItem:false
    })
  }
  clearList = () =>{
    this.setState({
      items:[]
    })
  }
  handleDelete = id =>{
    const  filteredItems = this.state.items.filter(item=>item.id !== id)
    this.setState({
      items:filteredItems
    })
  }
  handleEdit = id =>{
    const  filteredItems = this.state.items.filter(item=>item.id !== id);

    const selectedItem = this.state.items.find(item=>item.id ===id);

    this.setState({
      items:filteredItems,
      editItem:true,
      id:id,
      item:selectedItem.title
    });
  };
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-3'>
            <h1 className='display-4'>Todo Input</h1>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
