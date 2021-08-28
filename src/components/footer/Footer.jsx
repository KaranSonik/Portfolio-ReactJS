import React from 'react'
import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <span className="scroll">Scroll Up ---{'>'}</span>
            <div className="footerWrapper">
                <div className="footerLeft">
                    <h3>Have a project in mind?</h3>
                    <h2>Let me help you!</h2>
                    <div className="btnOne"> 
                        <a href="/contact">Ask</a>
                    </div>
                </div>                
            </div>
        </div>
    )
}
