import React,{useState, useEffect} from "react";
import axios from "axios";



const useFetch = ({url, initialData =null}) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(url)
      .then(res => {
            setData(res.data);
            setIsLoading(false);
        })
      .catch(err => {
            
            setError(true);
        })
    }, []);

    return {
        data,
        isLoading,
        error
    }
};

export default useFetch;