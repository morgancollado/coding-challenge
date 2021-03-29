
import { Component } from 'react';

export default class TodoList extends Component {

    state = {
        content: '', 
        todo: []
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    
    onSubmit= (e) => {
      e.preventDefault()
      this.setState({
        todo: this.state.todo.concat({
          content: this.state.content,
          isActive: true,
          id: Math.floor(Math.random() * Math.floor(1000))
        })
      })
      this.setState({
        content: ''
      })
    }

    renderToDo = () => {
      return this.state.todo.map(todo => {
        const toggleActive = (id) => {
          // this.setState({
          //   todo: this.state.todo.filter(todo =>  todo.id === id ? !isActive : isActive)
          // })
        }


        return(
          <ul>
            <li onClick={() => toggleActive(todo.id)} key={todo.id} className={this.state.todo.isActive ? "is-done": null}>{todo.content}</li>
          </ul>
        )
      })
    }


    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.content} onChange={this.onChange}/>
                        <input type="submit"/>
                    </form>
                    <p>{this.state.todo > 0 ? ` remaining out of ${this.state.todo.count}`:null } </p>
                    {this.renderToDo()}
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}

