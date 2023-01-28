import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.scss'

function DetailsPageComponents() {
    const { id } = useParams()
    const [datam, setDatam] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5555/${id}`).then(res => {
            setDatam(res.data)
            console.log(res.data)
        })
    }, [id])

    return (
        <section className='detailpage'>
            <div className='datailMain'>
                <i className={datam.iconClass}></i>
                <h2>{datam.name}</h2>
                <p>{datam.description}</p>
                <Link to={'/'}><button>Back to site</button></Link>
            </div>
        </section>
    )
}

export default DetailsPageComponents