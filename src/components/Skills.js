import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Skills extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <h1 className='heading'>
                <Fade bottom cascade>Skills.</Fade>
            </h1>
            <div className='skills-content'>
                <div> 
                    <h2> - Front End Developement </h2>
                    {
                        data.skills[0].frontend.map((F_skill)=>(
                            <p >{ F_skill.name }</p>
                        ))
                    }
                </div>
                <div> 
                    <h2> - Backend End Developement </h2>
                    {
                        data.skills[0].backend.map((B_skill)=>(
                            <p >{ B_skill.name }</p>
                        ))
                    }
                </div>
                <div> 
                    <h2> - Engineering Development </h2>
                    {
                        data.skills[0].engineer.map((E_skill)=>(
                            <p >{ E_skill.name }</p>
                        ))
                    }
                </div>
            </div>
        </div>  
        );
    }
}
 
export default Skills;