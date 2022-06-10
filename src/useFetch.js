import { useState, useEffect } from 'react';

// here we created CUSTOM useFetch function
// which uses useState and useEffect
// customHooks are made by the principle of DRY

const useFetch = (url) => {


    // useState data

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        // set timeout to see how fetch is working in more realistic environment

        // then we fetch json object and return response
        // if response is NOT ok, return something's wrong with fetch resource
        // else proced with data and update it in useState function


        const timeoutID = setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('could NOT FETCH the data from that resource');
                    }
                    return res.json();
                }).then((data) => {
                    setData(data);
                    setPending(false);
                    setError(null);
                }).catch(err => {
                    setPending(false);
                    setError(err.message);
                })


        }, 500)

        // cleanup function, to prevent memory leaks

        return () => clearTimeout(timeoutID);

        // we passed url as dependency, the code will be triggered again if url changes...that's nature of useEffect function

    }, [url]);

    // return values of data, pending and error to be used in Home.js file
    // values can be returned in array as well

    return { data, pending, error };


};

export default useFetch;