import React from 'react'
import './style.scss'

function Footer() {
    return (
        <footer>
            <div className='footerMain'>
                <p>Copyright ©2023 All rights reserved | This template is made with  <i className="fa-solid fa-heart"> </i>  by  <a href='https://colorlib.com/'>Colorlib</a></p>
                <div className='footerIcons'>
                    <a href='header'><i className="fa-brands fa-twitter"></i></a>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-solid fa-globe"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer