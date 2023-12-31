import TodoListItem from "./todo-list-item";
import "../styles/todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onOpenTask }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="todo-list-item-wrap">
        <TodoListItem
        onDeleted={() => onDeleted(id)}
        {...itemProps} 

        onToggleDone={() => onToggleDone(id)}

        onOpenTask={() => onOpenTask(id)}
        />
        
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
