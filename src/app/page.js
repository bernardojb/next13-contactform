
'use client';
import React from 'react';
import Image from 'next/image';
import { useSpring, animated, config, easings } from '@react-spring/web';
import useForm from './contact/useForm';
import validade from './contact/validateForm';

export default function Home() {
  const year = new Date().getFullYear()

  const springs = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1500,
    config: config.slow
  })

  const texts = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2500,
    config: {
      duration: 1000
    },
    easings: easings.easeInQuart
  })

  const socials = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3500,
    config: {
      duration: 1000
    },
    easings: easings.easeInQuart
  })

  const { handleChange, values, handlePress, isLoading } = useForm(validade);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'rgb(0,0,0)',
        background: 'linear-gradient(0deg, rgba(23,46,43,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 80%, rgba(23,46,43,1) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <animated.div
        style={{
          padding: '25px 0px',
          ...springs,
        }}
      >
        <Image
          src="/m3d.svg"
          height={200}
          width={500}
        />
      </animated.div>

      <animated.div
        style={{
          ...texts,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p
          style={{
            opacity: '0.6',
            textAlign: 'center',
            fontSize: '18px',
            paddingBottom: '50px'
          }}>
          Está llegando, una nueva dimensión para la medicina en el Perú.
        </p>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Adress'
            value={values.email}
            onChange={handleChange}
            required
            style={{
              height: '40px',
              width: '300px',
              borderRadius: '20px',
              border: 'none',
              paddingLeft: '20px',
              color: 'white',
              backgroundColor: '#2b2b2b',
              marginRight: '20px'
            }}
          >
          </input>
          <button
            onClick={handlePress}
            disabled={isLoading}
            id='contact-form-submit'
            type='submit'
            style={{
              height: '40px',
              borderRadius: '20px',
              border: 'none',
              color: 'white',
              backgroundColor: '#000000',
              padding: '10px 20px',
              boxShadow: '0px 0px 2px white'
            }}
          >
            Sign Up
          </button>
        </div>
      </animated.div>

      <animated.div
        style={{
          ...socials,
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          width: '100vw',
          height: '75px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          padding: '0px 20px'
        }}>

        <div
          style={{
            fontSize: '12px'
          }}
        >
          © M3D {`${year}`} - All Rights Reserved.
        </div>
      </animated.div>
    </div>
  )
}
