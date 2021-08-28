import React from 'react'
import './contact.scss'

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact Page</h1>

            <div className="form">
                <form action="#" id="inquiry">
                    <label htmlFor="name">Name<br/><input type="text" name="name" id="name" /></label>
                    <br/>
                    <label htmlFor="email">Email<br/><input type="email" name="email" id="email" /></label>
                    <br/>
                    <label htmlFor="message">Message<br/><textarea name="message" id="message" cols="30" rows="10"></textarea></label>
                    <button type="submit" form="inquiry" value="submit">Send</button>
                </form>
              


            </div>
        </div>
    )
}
