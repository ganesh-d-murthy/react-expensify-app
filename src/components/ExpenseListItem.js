import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Export a stateless functional component
//Description, amount, createdAt

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`} ><h3>{description}</h3></Link>
            <p>{amount} - {createdAt}</p>
        </div>
    );
};

const ConnectedExpenseListItem = connect((state) => {
    return {
        // no state needed here
    };
})(ExpenseListItem);

export default ConnectedExpenseListItem;