import React from 'react'
import './Testimonials.css'
import ContactForm from './components/ContactForm'

import contactPeople from "../../img/contact-people.svg";



const Contact = () => {
    return (
        <div className='contact'>
            <div className="title">
                <h2>Contact</h2>
            </div>

            <div className="container">
                <div className="wrapper">

                <ContactForm />
                </div>


            </div>
        </div>
    )
}

export default Contact