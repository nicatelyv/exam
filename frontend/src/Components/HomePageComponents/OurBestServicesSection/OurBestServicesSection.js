import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function OurBestServicesSection() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    function getData() {
        fetch("http://localhost:5555/")
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        getData()
    },[])
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:5555/${_id}`)
            .then(() => {
                getData()
            })
    }
    function handleSort() {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }
    return (
        <section className='OurBestbackend'>
            <div className='ourMain'>
                <h3 id='ourH3'>-------- OUR TOP SERVICES</h3>
                <h2 id='ourH2'>Our Best Services</h2>
                <Link to={'/addpage'}><button>Add item</button></Link>
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Seacr By Name...' />
                <button onClick={() => handleSort()}>Filter by Price</button>
                <div className='ourCards'>
                    {data.filter(data => data.name.toLocaleLowerCase().includes(search)).map((element, index) => (
                        <div className='ourCard' key={index}>
                            <i className={element.iconClass}></i>
                            <h2 id='elementH2'>{element.name}</h2>
                            <p id='elementP'>{element.description}</p>
                            <p>{element.price}</p>
                            <button onClick={() => handleDelete(element._id)}>Delete</button>
                            <Link to={'/details/' + element._id}><button id='detailbtn'>Details</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurBestServicesSection