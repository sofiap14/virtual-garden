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
              <h1 className="text-3xl text-white">WELCOME TO YOUR APP!</h1>
              <div className="text-md mt-8">
                <LoginButton className='flex flex-row w-12'/>
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Welcome;
