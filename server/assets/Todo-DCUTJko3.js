import { R as React, j as jsxRuntimeExports, w as cjsExports } from "../_virtual_one-entry.js";
import "node:async_hooks";
import "crypto";
function Todo() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Learn about animations",
      completed: false
    },
    {
      id: 2,
      text: "Implement scroll effects",
      completed: false
    },
    {
      id: 3,
      text: "Style with gradients",
      completed: false
    }
  ]);
  const [newTodo, setNewTodo] = React.useState("");
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false
      }
    ]);
    setNewTodo("");
  };
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {
      ...todo,
      completed: !todo.completed
    } : todo));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
    className: "py-16 px-4 bg-white",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
      className: "max-w-3xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
          className: "text-3xl font-bold mb-8 animate-fade-up-on-scroll",
          children: "Task Manager"
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
          className: "mb-6 flex flex-row gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TextInput, {
              value: newTodo,
              onChangeText: setNewTodo,
              placeholder: "Add a new task...",
              className: "flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
              onPress: addTodo,
              className: "bg-purple-600 px-6 py-3 rounded-lg",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                className: "text-white font-medium",
                children: "Add"
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
          className: "grid grid-cols-1 gap-4",
          children: todos.map((todo, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
            className: "animate-fade-up-on-scroll transition-all duration-300",
            style: {
              animationDelay: `${index * 100}ms`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.View, {
              className: `w-full rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${todo.completed ? "bg-emerald-600" : "bg-purple-600"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(cjsExports.View, {
                className: "p-6 flex flex-row items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                    className: `text-lg font-medium text-white ${todo.completed ? "line-through opacity-70" : ""}`,
                    children: todo.text
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.TouchableOpacity, {
                    onPress: () => toggleTodo(todo.id),
                    className: `px-4 py-2 rounded-md shadow-sm ${todo.completed ? "bg-emerald-100 text-emerald-800" : "bg-white text-purple-800"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(cjsExports.Text, {
                      className: "font-medium",
                      children: todo.completed ? "Completed" : "Mark Complete"
                    })
                  })
                ]
              })
            })
          }, todo.id))
        })
      ]
    })
  });
}
export {
  Todo
};
