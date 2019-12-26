import React from 'react';
import Particles from 'react-particles-js';

const Background = () =>{
    return <Particles
        params={{
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": '#000'
                },
                "line_linked": {
                    "enable": true,
                    "distance": 80,
                    "opacity": 0.3,
                    "color": "#000"
                },
                "move": {
                    "speed": 3,
                    "direction": "top-right"
                },
                "size": {
                    "value": 1.8
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "grab"
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }} 
    />

}

export default Background