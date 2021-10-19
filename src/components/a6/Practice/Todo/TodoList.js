import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <div>
            <h1>Todo example</h1>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;
