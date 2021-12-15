import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';
function HeroSection() {



    return (
        <div className='hero-container'>
        <h1> 
        <Typewriter 
            onInit={(typeWriter) => {
                typeWriter.typeString("Nicholas Jamou")
                .pauseFor(2000)
                .deleteAll()
                typeWriter.typeString("Full Stack Developer")
                .pauseFor(2000)
                .deleteAll()
                typeWriter.typeString("Nicholas Jamou")
                .start();


            }}
        />
        </h1>

        </div>
    );
  }
  

export default HeroSection




