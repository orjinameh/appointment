import React from 'react'

function Comp({ svg, title, text }) {
    return (
        <div className="contact1">
            <div className="appoint-left">
                <p>{svg}</p>
            </div>
            <div className="appoint-right">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Comp