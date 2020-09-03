// Containers connect Views - Stores
// Here it's the only place that should know about Flux. (so I've heard)

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';

function getStores() {
  return [
    TodoStore,
  ];
}

function getState() {
  // App DATA. MODELS wrapper.
  return {
    todos: TodoStore.getState(),

    // Events in the state, so they can be used in children components as props.
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
  };
}

export default Container.createFunctional(AppView, getStores, getState);