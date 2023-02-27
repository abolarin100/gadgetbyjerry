import React from 'react';
import { useParams } from 'react-router-dom';
import UseCustomHook from '../useCustomHook';


const DetailPage = () => {
    const {id} = useParams()
    let URL = `https://my-json-server.typicode.com/abolarin100/gadgetDb/blogs/${id}`

    const {data: phones, isLoading, isError} = UseCustomHook(`${URL}`)
    return (
        <div>
             {isLoading && <div className="spinner-grow text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span> </div>
             }

             {isError && <div>Error Fetching Data</div>}
            <div key={phones.id}>
                        <h3>{phones.name}</h3>
                        <p>{phones.model}</p>
                        <p>{phones.year}</p>
                        <p>{phones.description}</p><hr />

                    </div>
            
            
        </div>
    );
}

export default DetailPage;
