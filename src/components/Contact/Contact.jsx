import React from 'react'
import './Contact.css'
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
                <img src={contactPeople} alt="contact me people" />
                <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact