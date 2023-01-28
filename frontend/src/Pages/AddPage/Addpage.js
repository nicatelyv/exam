import React from 'react'
import Navbar from '../../Layouts/Navbar/Navbar';
import AddPageComponents from '../../Components/AddPageComponents/AddPageComponents';
import Footer from '../../Layouts/Footer/Footer';
import {HelmetProvider,Helmet} from  'react-helmet-async'

function Addpage() {
  return (
    <>
    <HelmetProvider>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
        </HelmetProvider>
        <Navbar/>
        <AddPageComponents/>
        <Footer/>
    </>
  )
}

export default Addpage