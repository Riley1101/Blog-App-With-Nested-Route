import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
export const Init = () => {
    const params = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://gorest.co.in/public/v1/posts/${params.id}`)
            .then(res => res.json())
            .then(res => setTimeout(() => setData(res.data), 3000))
    }, [])

    return { data }
}