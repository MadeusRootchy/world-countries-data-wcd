import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
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
        setIsLoading(false);
    })
    }, []);

    return {
    data,
    isLoading,
    error
    }
};

export default useFetch;

