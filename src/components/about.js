import React from 'react'
import medicalGuideline from '../services/config';

function About() {
    console.log('About',medicalGuideline.getData());
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default About