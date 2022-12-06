import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'
import contactPeople from "../../img/contact-people.svg";



const Contact = () => {
    return (
        <div className='contact'>
            <div className="title">
                <h2>Contact</h2>
            </div>

            <div className="container">
                <div className="wrapper">
                    <div className="canvas">
                        <img src={contactPeople} alt="contact me people" />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact