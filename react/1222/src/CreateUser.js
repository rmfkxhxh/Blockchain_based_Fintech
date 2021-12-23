import React from 'react';

const CreateUser = ({username, email, onChange, onCreate}) => {
    return(
        <div>
            <br/>
            <input
            name='username'
            placeholder='Account'
            onChange={onChange}
            value={username}
            />
            <input
            name='email'
            placeholder='Email'
            onChange={onChange}
            value={email}
            />
            <button onClick={onCreate}>Add</button>
        </div>
    )
}

export default React.memo(CreateUser);