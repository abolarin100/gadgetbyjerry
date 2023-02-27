import React, {useState, useEffect} from 'react';

const UseCustomHook = (URL) => {

    // let URL = "https://jsonplaceholder.typicode.com/users"

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true) 
    const [isError, setIsError] = useState (false)
    useEffect(()=> {

        fetch(`${URL}`)
            .then(response => response.json())
            // .then(json => console.log(json))
            .then((data)=>{
                setIsLoading(false)
                setData(data)

            })
            .catch((error)=>{
                setIsLoading(false)
                setIsError(true)
                
            })

    })
    return {data, isLoading, isError}
}

export default UseCustomHook;
