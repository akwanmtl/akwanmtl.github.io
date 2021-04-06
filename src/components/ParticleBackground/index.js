
import Particles from 'react-particles-js';
import './particles.css';

function ParticleBackground () {
  return (
  <Particles
    className="particles-canvas"
    params={{
      particles: {
          number: {
              value: 100,
              density: {
                  enable: true,
                  value_area: 1000
              }
          },
          color: {
              value: '#fdf9fb'
          },
          opacity: {
              value: 0.5,
              anim: {
                  enable: true
              }
          },
          size: {
              value: 8,
              random: true,
              anim: {
                  enable: true,
                  speed: 3
              }
          },
          line_linked: {
              enable: false
          },
          move: {
              speed: 0.1
          }
       }    
  }}    
  />
  )

}

export default ParticleBackground;