import React, { useState, useEffect } from 'react'
import './home.css'
import Card from '../common/card/card'
const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://gorest.co.in/public/v1/posts/')
            .then(res => res.json())
            .then(res => setData(res.data))
    }, [])
    return (
        <section className="container">
            <div className="cards">
                {
                    data.map((e) => <Card key={e.id} data={e} />)

                }

            </div>
        </section>
    )
}

export default Home