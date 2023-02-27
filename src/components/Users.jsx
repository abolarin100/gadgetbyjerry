import React, {useEffect, useState} from 'react';
import UseCustomHook from '../useCustomHook';

const Users = () => {

    let URL = "https://jsonplaceholder.typicode.com/users"
    const {data: data, isLoading, isError} = UseCustomHook(`${URL}`)

    return (
        <div>
             {isLoading && <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span> </div>
             }

             {isError && <div>Error Fetching Data</div>}
            {/* <h1>Users</h1> */}

            
                {
                    data.map((user) => (
                        <div key={user.id}>
                            <h3><b>Name</b>:{user.name}</h3>
                            <p><b>Userame</b>:{user.username}</p>
                            <p><b>Street</b>:{user.address.street}</p>
                            <p><b>Website</b>:{user.website}</p><hr />


                           
    
                        </div>
                    ))
                
                }
        </div>
    );
}

export default Users;
