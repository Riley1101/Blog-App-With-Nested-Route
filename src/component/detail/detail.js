import React, { useEffect, useState } from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const params = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://gorest.co.in/public/v1/posts/${params.id}`)
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [])
    return (
        <div className='detail__container'>
            <h1 className='detail__heading'>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Detail