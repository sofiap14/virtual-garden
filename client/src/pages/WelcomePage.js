// components/WelcomePage.js
import React from 'react';
import LoginButton from '../components/Login.js';
import LogoutButton from '../components/Logout.js';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Welcome = () => {
  const [text] = useTypewriter({
    words: [" Gardens"," Plants", " Plant Growth"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 80,
  });
  console.log('Text:', text);

  return (
      <section className="bg-palepinkBG">
        
        <div className="grid h-screen grid-cols-2">
          <div className='flex flex-col w-full justify-center h-screen bg-black'>
            <nav className='flex flex-row w-1/2 font-sans text-2xl font-semibold top-0 left-0 pl-8 pr-8 pt-4 text-white absolute'>plantopia</nav>
                <h1 className='text-4xl text-white p-8'>
                  Track your 
                  <span style={{fontWeight: 'bold', color:'white'}}>
                    {text}
                  </span>
                  <span style={{color: 'red'}}><Cursor /></span>
                </h1>
          </div>

          <div class="flex h-screen bg-darkBG">
            <div className='m-auto'> 
              <h1 className="text-3xl text-white font-bold mb-5">WELCOME TO YOUR APP!</h1>
              <div className='flex justify-center'> 
                <LoginButton />
                <LogoutButton />
              </div>
            </div>

          </div>
        </div>
      </section>

  );
};

export default Welcome;
