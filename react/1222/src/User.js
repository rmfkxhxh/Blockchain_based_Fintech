import React, {useEffect} from "react";
function User({ user, onRemove, onEdit, actToggle}) {
    useEffect(()=> {
        console.log("User value set");
        console.log(user)
        return()=> {
            console.log('Before change user')
            console.log(user)
        }
    }, [user]);

    return (
        <div key={user.id}>
            <b
                style=
                {{
                    cursor: 'pointer',
                    color: user.active ? 'yellow' : 'black'
                }}
                onClick={() => actToggle(user.id)}
            >
                {user.username}
                &nbsp;
            </b>
            <b>{user.id} {user.username}</b> <span>({user.email})</span>
            <button onClick={(e) => onRemove(user.id)}>Del</button>
            <button onClick={(e) => onEdit(user)}>Edit</button>
        </div>
    )
};

export default React.memo(User);