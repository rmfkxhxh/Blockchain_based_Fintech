import React, { useRef, useState } from "react";
import Ulist from "./UserList";
import CreateUser from "./CreateUser";

function UserManage() {
    const [inputs, setInputs] = useState({
        username: "",
        email: ""
    });

    const { username, email } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const userData = [
        {
            id: 1,
            username: 'undead',
            email: 'undead@undercity.com',
            active: false
        },
        {
            id: 2,
            username: 'bloodelf',
            email: 'bloodelf@silvermoon.com',
            active: true
        },
        {
            id: 3,
            username: 'nightelf',
            email: 'nightelf@darnasus.com',
            active: false
        }
    ];

    const [users, setUsers] = useState(userData)
    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
            active: false
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };
    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const actToggle = (id) => {
        // setUsers(user => user.id === id ? {...user, active: !user.active} : user)
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        )
        console.log('id: '+ id)
    }
    const onEdit = ({ user }) => {
        setUsers({
            id: '',
            username: '',
            emial: ''
        })
    }
    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <Ulist users={users} onRemove={onRemove} onEdit={onEdit} actToggle={actToggle} />
            {console.log(users)}
        </>
    );
}

export default UserManage;