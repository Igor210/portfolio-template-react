import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <a href={this.props.url} target='_blank'>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
                </a>
                <h3>{this.props.title}</h3>
                <p>{this.props.service}</p>
        </div> 
        </Fade>);
    }
}
 
export default Project;