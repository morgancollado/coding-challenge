
import { Component } from 'react';

export default class TodoList extends Component {

    state = {
        content: '', 
        todos: [],
        completedTask: 0
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    
    onSubmit= (e) => {
      e.preventDefault()
      this.setState({
        todos: this.state.todos.concat({
          content: this.state.content,
          isActive: true,
          id: Math.floor(Math.random() * Math.floor(1000))
        })
      })
      this.setState({
        content: ''
      })
    }

    
    toggleActive = (t) => {

      
      const copyofTodos = this.state.todos.filter(todo =>  {
        console.log(t.id)
        if (t.id === todo.id){
          todo.isActive = !todo.isActive
          return todo
        } else
        return {todo}
      })
      console.log(copyofTodos)
      this.setState({
        todos: copyofTodos
      })
      const completedTodos = copyofTodos.filter(todo => todo.isActive === false).length
      this.setState({
        completedTask: completedTodos
      })
    }

    renderToDo = () => {
      return this.state.todos.map(todo => {
        const eventL = this.toggleActive


          // this.setState(prevState => ({
          //   todo: prevState.todo.map(
          //     todo => todo.id === todo ? {...todo, isActive: false} : todo)
          // })
          


        return(
          <ul>
            <li onClick={() => eventL(todo)} key={todo.id} className={todo.isActive ? null : "is-done" }>{todo.content}</li>
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
                    <p>{this.state.todos.length >  0 ? ` ${this.state.completedTask} remaining out of ${this.state.todos.length}`:null } </p>
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

