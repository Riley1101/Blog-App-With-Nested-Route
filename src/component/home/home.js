import React, { useState, useEffect } from 'react'
import './home.css'
import { Init } from './hooks'
import Card from '../common/card/card'
const Home = () => {
    const { data, processData } = Init()

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