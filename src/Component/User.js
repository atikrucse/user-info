import React from 'react';
import './User.css';
const User = (props) => {
    const data = props.users;
    const addUserController = props.addUserController;
    
    
    return (
        <div className="main-container">
            <div className="user-info">
            {data.map(user => {
                return (
                    <div className="user-container">
                        <div>
                        <img src={user.image}></img>
                        </div>
                        <div className="user-detail">
                        <p>Name:{user.name}</p>
                        <p>Address: {user.email}</p>
                        <p>Gender: {user.gender}</p>
                        <button className="addButton" onClick={() => addUserController(user)}>Add User</button>
                        </div>                   
                    </div>
                )
                
            })}
            </div>
        </div>
    );
};

export default User;