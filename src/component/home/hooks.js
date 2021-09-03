import { useState, useEffect } from 'react'

export const Init = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://gorest.co.in/public/v1/posts/')
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [])

    return {
        data,
    }
}