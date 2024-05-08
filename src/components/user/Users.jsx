import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const Loadedusers = useLoaderData()
    const [users , setUsers] = useState(Loadedusers)
    //console.log(users)
    const handleDelete = (id) => {
        console.log('delete' ,id)
        fetch(`http://localhost:5000/users/${id}`,
            {
                method: 'Delete'
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                alert('delete successfully')
            }

            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
        })

    }

    return (
        <div>
         <h1>Total user {users.length} </h1>
         {
            users &&
            users.map(user =><p key={users._id}>{user.name} : {user.email}&nbsp; &nbsp;
            <button onClick={() => handleDelete(user._id
            )}>X</button></p>)
         }

        
        </div>
    );
};

export default Users;