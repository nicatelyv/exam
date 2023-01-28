import React from 'react'
import Header from '../../Components/HomePageComponents/Header/Header'
import OurBestServicesSection from '../../Components/HomePageComponents/OurBestServicesSection/OurBestServicesSection'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import {HelmetProvider,Helmet} from  'react-helmet-async'
import OurBest2ndSec from '../../Components/HomePageComponents/OurBest2ndSec/OurBest2ndSec'
import FeaturedCaseStudyComponents from '../../Components/HomePageComponents/FeaturedCaseStudyComponents/FeaturedCaseStudyComponents'
import OurTeamMemberSection from '../../Components/HomePageComponents/OurTeamMemberSection/OurTeamMemberSection'

function HomePage() {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
        </HelmetProvider>
        <Navbar/>
        <Header/>
        <OurBestServicesSection/>
        <OurBest2ndSec/>
        <FeaturedCaseStudyComponents/>
        <OurTeamMemberSection/>
        <Footer/>
    </>
  )
}

export default HomePage