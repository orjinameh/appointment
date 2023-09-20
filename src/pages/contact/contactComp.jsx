import React from 'react'

function ContactComp({ svg, title, text }) {
    return (
        <div className="contact1">
            <div className="contact-left">
                {svg}
            </div>
            <div className="contact-right">
                <p>{title}</p>
                {text}
            </div>
        </div>
    )
}

export default ContactComp