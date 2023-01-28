import React from 'react'
import DetailsPageComponents from '../../Components/DetailPageComponents/DetailsPageComponents'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import {HelmetProvider,Helmet} from 'react-helmet-async'

function DetailsPage() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Details Page</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <DetailsPageComponents />
            <Footer />
        </>
    )
}

export default DetailsPage