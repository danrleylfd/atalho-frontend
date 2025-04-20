import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    //await console.log(container);
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#271A45"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 7,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 50
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "link"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  )
}
