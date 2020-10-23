import React, { useRef, useEffect, useState } from 'react';
import AccentureLogo1 from '/Users/timothyangus/code/TimAngus321/accenture-coding-challenge/src/Accenture-logo-top.png'
import AccentureLogo2 from '/Users/timothyangus/code/TimAngus321/accenture-coding-challenge/src/Accenture-logo-bottom.png'
import AccentureLogo from '/Users/timothyangus/code/TimAngus321/accenture-coding-challenge/src/Accenture-logo.png';
import gsap from 'gsap';


const DeconstructedLogo = () => {



    

    return (
        <section className="logo-component">
            <img src={AccentureLogo} alt="" className="accenture-logo"/>
            <h3>About Accenture</h3> 
        </section>
    )
}

export default DeconstructedLogo;