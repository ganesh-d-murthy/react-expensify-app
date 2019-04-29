//Higher Order Component - A component (HOC) that renders another component (5 or 6 of them)
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// Create function
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, Please don't share</p>}
            <Info {...props}/>
        </div>
    );
};

export const AdminInfo = withAdminWarning(Info);

// require Authentication 

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <Info {...props}/> : <p>Please login</p>}
        </div>
    );
};

export const AuthInfo = requireAuthentication(Info);
