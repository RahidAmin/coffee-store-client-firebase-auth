import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        //Make sure user is confirmed to delete
        fetch(`https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/user/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                console.log('Deleted Successfully');
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
            }
        })
    }

    return (
        <div>
            <h3>Users:{loadedUsers.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => {
                                return <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className='btn'>X</button>
                                    </td>
                                </tr>

                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;