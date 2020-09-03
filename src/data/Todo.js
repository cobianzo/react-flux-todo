/*
 MODEL.
 a var type Todo is a record (it's not a component)
*/

import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  complete: false,
  text: '',
});

export default Todo;