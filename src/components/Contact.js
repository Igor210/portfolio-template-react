import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
            <h1>
                    <Fade bottom cascade> Contact.</Fade>
            </h1>
            <Fade bottom>
            <div className='contact-content'>
                
                
                <ul>
                    <li><a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a></li>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
            </div>
            </Fade>

            <div className='footer'><span >Made With ❤ by <a href="#">Egor Loginov</a></span></div>
        </div>);
    }
}
 
export default Contact;