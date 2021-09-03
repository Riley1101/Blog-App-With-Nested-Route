import React from 'react'
import './detail.css'
import { Init } from './hooks'
const Detail = () => {
    const { data } = Init();
    return (
        <div className='detail__container'>
            <h1 className='detail__heading'>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Detail