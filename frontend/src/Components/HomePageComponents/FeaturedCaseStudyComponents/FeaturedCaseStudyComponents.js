import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function FeaturedCaseStudyComponents() {
    return (
        <section className='FeaturedCaseStudySec'>
            <div className='FeaturedCaseStudySecMain'>
                <h3 id='featuredH3'>------OUR PORTFOLIOS OF CASES</h3>
                <h2 id='featuredH2'>Featured Case Study</h2>
                <div className='FeaturedCards'>
                    <div>
                        <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp' />
                        <div className='cardDiv'>
                            <p id='cardDivP'>------ Strategy planing</p>
                            <Link to={'/'}><h4 id='cardDivH4'>Within the construction industry as their overdraft</h4></Link>
                        </div>
                    </div>
                    <div>
                        <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services2.png.webp' />
                        <div className='cardDiv'>
                            <p id='cardDivP'>------ Strategy planing</p>
                            <Link to={'/'}><h4 id='cardDivH4'>Within the construction industry as their overdraft</h4></Link>
                        </div>
                    </div>
                    <div>
                        <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services3.png.webp' />
                        <div className='cardDiv'>
                            <p id='cardDivP'>------ Strategy planing</p>
                            <Link to={'/'}><h4 id='cardDivH4'>Within the construction industry as their overdraft</h4></Link>
                        </div>
                    </div>
                    <div>
                        <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services4.png.webp' />
                        <div className='cardDiv'>
                            <p id='cardDivP'>------ Strategy planing</p>
                            <Link to={'/'}><h4 id='cardDivH4'>Within the construction industry as their overdraft</h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCaseStudyComponents