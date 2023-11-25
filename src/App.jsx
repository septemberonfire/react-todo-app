import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import AddNewTask from "./components/add-new-task";
import Filters from "./components/filters";
import SingleTask from "./components/single-task";
import React from "react";

export default class App extends React.Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Помыть посуду", new Date()),
      this.createTodoItem("Изучить Реакт", new Date()),
      this.createTodoItem("Поиграть на гитаре", new Date()),
    ],
    selectedValue: "value1",
    selectedTask: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedValue !== prevState.selectedValue) {
      if (this.state.selectedValue === "value3") {
        this.setState(({ todoData }) => {
          const newA = [...todoData].sort((a, b) => (a.date > b.date ? 1 : -1));
          return {
            todoData: newA,
          };
        });
      }
      if (this.state.selectedValue === "value2") {
        this.setState(({ todoData }) => {
          const newA = [...todoData].sort((a, b) => (a.date < b.date ? 1 : -1));
          return {
            todoData: newA,
          };
        });
      }
      if (this.state.selectedValue === "value1") {
        this.setState(({ todoData }) => {
          return {
            todoData: prevState.todoData,
          };
        });
      }
    }
  }

  setSelectedValue = (v) => {
    this.setState((state) => {
      return {
        selectedValue: v,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  createTodoItem(label, date) {
    return {
      label,
      date,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  addItem = (text, date) => {
    const newItem = this.createTodoItem(text, date);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArr,
      };
    });
  };

  openSingleTask = (id) => {
    const currentTask = this.state.todoData.find((el) => el.id === id);
    if (currentTask) {
      this.setState(() => {
        return {
          selectedTask: currentTask,
        };
      });
    }
  };

  closeSingleTask = () => {
    this.setState(() => {
      return {
        selectedTask: null,
      };
    });
  };

  changeTodos = (id, newLabel) => {
    const copyTodos = [...this.state.todoData];
    const currentTask = copyTodos.find((el) => el.id === id);
    currentTask.label = newLabel;

    if (currentTask) {
      this.setState(() => {
        return {
          todoData: [...copyTodos],
        };
      });
    }
  };

  render() {
    return (
      <>
        <AppHeader />
        <Filters onValueSelected={this.setSelectedValue} />
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onOpenTask={this.openSingleTask}
        />
        <AddNewTask onItemAdded={this.addItem} />
        {this.state.selectedTask && (
          <SingleTask
            data={this.state.selectedTask}
            onClose={this.closeSingleTask}
            changeTodos={this.changeTodos}
          />
        )}
      </>
    );
  }
}
