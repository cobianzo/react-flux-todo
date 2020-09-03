# flux-shell

This is a very simple hello world app that you can use as a starting point for your application.

# Usage

```bash
cd path/to/flux-shell
npm install
npm run build
# open path/to/flux-shell/index.html in your browser
```

# Watch

Instead of manually building after each change it's possible to automatically recompile the javascript bundle when files change:

```bash
npm run watch
# make javascript changes, then refresh path/to/flux-shell/index.html
```


# Developing a Flux App

## Creating a new action (ie `add todo` action )

- TodoActionTypes.js =>  `ADD_TODO: 'DELETE_TODO',`  
- TodoActions.js => `deleteTodo(id) {  
    TodoDispatcher.dispatch({  
      type: TodoActionTypes.DELETE_TODO,  
      todo_id,  
    });  
  },`  
  where `todo_id` represents a param passed to the action defined in the `Store`  
- AppContainer.js => `onDeleteTodo: TodoActions.deleteTodo,` <= these are the callbacks passed to the views.  
- TodoStore.js => `case TodoActionTypes.ADD_TODO:  
       return state.delete(action.todo_id)`  
- 
