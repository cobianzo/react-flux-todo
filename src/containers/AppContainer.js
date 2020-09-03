// Containers connect Views - Stores
// Here it's the only place that should know about Flux. (so I've heard)

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
// import TodoActions from '../data/TodoActions';
import TodoDispatcher from '../data/TodoDispatcher';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  // App DATA. MODELS wrapper.
  return {
    todos: TodoStore.getState(),

    // Events in the state, so they can be used in Components' View as props.onDeleteTodo(id). The event dispatch an action
    onDeleteTodo: Actions.deleteTodo,
    onToggleTodo: Actions.toggleTodo //TodoActions.toggleTodo,
  };
}

// by defining them here, we could call them from outside the app with Actions.addTodo('my task').
export const Actions = {
    addTodo: (text) => TodoDispatcher.dispatch({ type: 'ADD_TODO', text, }),
    deleteTodo: (id) => TodoDispatcher.dispatch({ type: 'DELETE_TODO', id, }),
    toggleTodo: (id) => TodoDispatcher.dispatch({ type: 'TOGGLE_TODO', id, }),
};



export default Container.createFunctional(AppView, getStores, getState);