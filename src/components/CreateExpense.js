import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from './../actions/expenses';

const CreateExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense) => {
                    console.log(expense);
                    console.log(props);
                    props.dispatch(addExpense(expense));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

const ConnectedCreateExpensePage = connect()(CreateExpensePage);

export default ConnectedCreateExpensePage;