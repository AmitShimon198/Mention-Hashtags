import React from 'react'
import medicalGuideline from '../services/config';

function Contact() {
    console.log('Contact',medicalGuideline.getData());
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    )
}

export default Contact