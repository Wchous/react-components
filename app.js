// TODO
var App = () =>(
    <div>
        <h2>My Todo List</h2>
        <TodoList todos={['learn stuff','meet people', 'go places']} />
    </div>
)

class TodoListItem extends React.Component {

    constructor(props) {
        super(props)

    this.state = {
        done: false
        };
    }

    onListItemClick(){
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        }
        return(
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
            //style = {} (essentially setting key value pairs in an already created object)
            //if iterating, have key, also be sure to be returning`
        )
    }
}

var TodoList = (props) => (
    <ul>
        {props.todos.map(todo =>
        <TodoListItem todo ={todo}/>)}   
    </ul>
);


React.render(<App/>,document.getElementById('app'))