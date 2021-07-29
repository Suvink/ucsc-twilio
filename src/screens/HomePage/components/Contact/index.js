import React, { useState } from "react";
import './index.css';
import axios from 'axios';
import Swal from 'sweetalert2';


function Contact() {

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const sendSMS = () => {
        console.log(username, phone, message)
        let sms = "New Message from " + username + " message: " +message + " contact on: " + phone;
        axios.post('https://ucsc-sms-bot-4418.twil.io/sendsms', {
            Body: sms
        }).then(response => {
            console.log(response)
            if(response.data.status === "success"){
                Swal.fire(
                    'Good job!',
                    'You sent the SMS!',
                    'success'
                )
            }
        }).catch(error=> {
            console.log(error);
            Swal.fire(
                'Error!',
                'Something Went Wrong!',
                'error'
            )
        })
    }

    return (
        <section className="contact-section">
            <h1 className="title is-3 mb-4">Reach out to me</h1>
            <div className="columns">
                <div className="column is-6 contact-image-column">
                    <img src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif" alt="sdcdsc"></img>
                </div>
                <div className="column is-6">
                    <form>
                        <div class="field">
                            <label class="label">Your Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" onChange={(e)=>{setUsername(e.target.value)}} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Your Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Text input"  />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Your Phone</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" onChange={(e)=>{setPhone(e.target.value)}} />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea" onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
                            </div>
                        </div>
                    </form>
                    <div class="field is-grouped mt-3">
                        <div class="control">
                            <button class="button is-link" onClick={sendSMS}>Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
