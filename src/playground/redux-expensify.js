import {createStore, combineReducers} from 'redux';

// Set text filter
// Sort by date
// Sort by amount
// Set start date
// Set end date

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('visibleExpenses -->', visibleExpenses);

});

const expOne = store.dispatch(addExpense({description: 'Rent', amount: 10000, createdAt: -21000}));
console.log('expOne', expOne);
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: -1000}));
console.log('expTwo', expTwo);
//const expThree = store.dispatch(addExpense({description: 'Dinner', amount: 1000}));
//console.log('expThree', expThree);

// store.dispatch(removeExpense({id:expOne.expense.id}));
// store.dispatch(removeExpense({id:expThree.expense.id}));

// store.dispatch(editExpense(expTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter({text: 'rent'}));
// store.dispatch(setTextFilter({}));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

// SHows the object structure
const demoState = {
    expenses: [{
        id: 'sfgfdgdfg',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }, {
        id: 'sfhhvxnbxbhf',
        description: 'January Electricity',
        note: 'PSEG bill',
        amout: 100,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 20
};

//Always clone the object instead o modifying it 
console.log('here',{
    age: 27,
    ...user,
    city: 'NYC'
});