import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { tyep: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by valid id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by invalid id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: 4,
        description: 'Gas Bill',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense with valid id', () => {
    const action = { 
        type: 'EDIT_EXPENSE',
        id: 1,
        updates : {
            amount: 4500
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(4500);
});

test('should not edit expense with invalid id', () => {
    const action = { 
        type: 'EDIT_EXPENSE',
        id: -1,
        updates : {
            amount: 4500
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


