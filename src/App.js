import React from 'react';
import {AppRouter} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import {AuthInfo, AdminInfo}from './playground/hoc';
import { Provider } from 'react-redux';

import './App.css';

// require('./playground/hoc');

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
  console.log('visibleExpenses -->', visibleExpenses);
});

// console.log("default state ", store.getState());

// // add Expense -> Water bill
// // addd Expense -> Gas bill
// // setTextFilter -> bill (2 items ) -> water ( 1 item)
// // getVisibileExpenses -> print visbile ones to screen

store.dispatch(addExpense({description:'Water Bill', amount: 100, createdAt:4500}));
store.dispatch(addExpense({description:'Gas Bill', amount: 120, createdAt:2000}));
store.dispatch(addExpense({description:'Rent', amount: 1095, createdAt:109400}));

// console.log('Water Filter');
//  store.dispatch(setTextFilter({text: 'Water'}));

//  setTimeout(() => {
//   store.dispatch(setTextFilter({text: 'bill'}));
//  }, 3000);
// const state = store.getState();
// console.log('here-->', getVisibileExpenses(state.expenses, state.filters));


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </div>
    );
  }
}

export default App;
