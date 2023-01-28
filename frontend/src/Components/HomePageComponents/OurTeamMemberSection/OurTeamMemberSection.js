import React from 'react'
import './style.scss'

function OurTeamMemberSection() {
  return (
    <section className='OurTeamMemberSection'>
        <div className='OurTeamMemberMain'>
            <p id='OurMemP'>------- OUR PROFESSIONAL MEMBERS</p>
            <h3 id='OurMemH3'>Our Team Mambers</h3>
            <div className='OurMemPerson'>
                <div id='OurPerson'>
                    <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png.webp'/>
                    <h4 id='PersonH4'>Ethan Welch</h4>
                    <p id='PersonP'>------ UX Designer</p>
                </div>
                <div id='OurPerson'>
                    <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png.webp'/>
                    <h4 id='PersonH4'>Ethan Welch</h4>
                    <p id='PersonP'>------ UX Designer</p>
                </div>
                <div id='OurPerson'>
                    <img alt='foto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png.webp'/>
                    <h4 id='PersonH4'>Ethan Welch</h4>
                    <p id='PersonP'>------ UX Designer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurTeamMemberSection