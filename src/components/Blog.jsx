import React, {useState} from 'react';
import UseCustomHook from '../useCustomHook';
import { Link } from 'react-router-dom';

const Blog = () => {
    let URL = "https://my-json-server.typicode.com/abolarin100/gadgetDb/blogs"
    const {data: data, isLoading, isError} = UseCustomHook(`${URL}`)
    return (
        <div>
             {isLoading && <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span> </div>
             }

             {isError && <div>Error Fetching Data</div>}



            {/* <h2>Gadgets:</h2> */}
            {
                data.map((phones) => (
                    <div key={phones.id}>
                        <h3>{phones.name}</h3>
                        <p>{phones.model}</p>
                        <p>{phones.year}</p>
                        <p>{phones.description.slice(0, 200)} <Link to={`/blog/${phones.id}`}>Read More....</Link></p><hr />

                    </div>
                ))
            }
        </div>
    );
}

export default Blog;
