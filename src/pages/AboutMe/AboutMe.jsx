import React from 'react';
import './AboutMe.css';
import cookingMamaRoo from '../../images/cookingmamaroo.png'


const AboutMePage = () => {
    
    const aboutMecontentName = "My name is Hikaroo, and I am an artist in northern New England. I've been doing art for almost 30 years, with just recently spreading my wings into doing more to improve myself as an artist and a person."
    
    const aboutMecontentBackground = "I have three beautiful children, one is 10, one is 5, and the youngest is 2. They are my world and my motivation to do better. What better way to tell your kids to follow their dreams, than to follow your own which for me is to work towards doing my art full time, and working on a comic book to eventually have published."
    
    const aboutMeInspiration = "My artistic inspirations are CLAMP, an all woman group that made series like Magic Knight Rayearth, WISH, and Angelic Layer, and Yoshitaka Amano, best known for Vampire Hunter D and much of the art for the older Final Fantasy games."
    
    const aboutMeHobby = "I don't have much free time between my full time job, my kids and my art, but I enjoy camping with my family, hiking, and collecting / playing video games."
    
    const aboutMeThankful = "I am very thankful for the people in my life, and the support I have gotten in the past three years as I try to navigate life and all of the obstacles it has thrown my way."

    return (
    <div className='about-me-container'>
        <img className='cooking-mamaroo-img' src={cookingMamaRoo} />

        <div className='about-me-headline'>
            <span className='about-me-header'>About </span><span className='about-me-header2'> Me</span>
        </div>

        <div className='about-me-text-container'>
            <p className='about-me-text'>{aboutMecontentName}</p>
            <p className='about-me-text'>{aboutMecontentBackground}</p>
            <p className='about-me-text'>{aboutMeInspiration}</p>
            <p className='about-me-text'>{aboutMeHobby}</p>
            <p className='about-me-text'>{aboutMeThankful}</p>
        </div>
    </div>
    )
}

export default AboutMePage;