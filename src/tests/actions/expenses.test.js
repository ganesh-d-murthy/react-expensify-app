import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'Update Note Value', desc:'Updated Description'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'Update Note Value', desc:'Updated Description'}
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'description',
        note: 'note',
        amount: 172.05,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'description',
            note: 'note',
            amount: 172.05,
            createdAt: 1000,
            id: expect.any(String)           
        }
    })
});