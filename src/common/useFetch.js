import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const [refresh, setRefresh] = useState(true);

    const refreshData = () => {
        setData(null);
        setError(null)
        setIsPending(false);
        setRefresh(true);
    }

    const fetchAndHandleResponse = () => {
        setIsPending(true);
        axios.get(url).then((resp) => {
            if (resp.data) {
                setData(resp.data);
                setError(null);
            }
        }).catch((error) => {
            setError(error.toString())
            setData(null);
        }).finally(() => {
            setIsPending(false)
            setRefresh(false);
        })
    }

    useEffect(() => {
        if (refresh) {
            fetchAndHandleResponse();
        }
    }, [refresh])

    return { data, error, isPending, refreshData }
}


export default useFetch