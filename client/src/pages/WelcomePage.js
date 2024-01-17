// components/Welcome.js
import React from 'react';
import LoginButton from '../components/Login.js';
import LogoutButton from '../components/Logout.js';

const Welcome = () => {
  return (
    // <div className='bg-palepinkBG'>
    //   <nav className='flex w-full'><div className='font-serif text-sm bg-darkBG w-full m-7'>Plant Inventory</div></nav>

    // </div>
    <header className='bg-palepinkBG'><div className='text-left'>HEADER</div>
      <section class="bg-palepinkBG">
        <div class="grid h-screen grid-cols-2">
          <div class="m-auto">Plant Inventory</div>

          <div class="flex h-screen">
          <div className='m-auto'> 
            <h1 className="text-gray-500">WELCOME TO YOUR APP!</h1>
            <div className="text-md mt-8">
             <LoginButton />
             <LogoutButton />
          </div>
           </div>
          </div>
        </div>
      </section>
    </header>

    // <div className="flex flex-row min-h-screen bg-greenBG font-mono">
    //   <div className="flex-1 flex-col text-2xl p-4">
    //     {/* Left Half Content */}
    //     Plant Inventory
    //   </div>
    //   <div className="relative flex-1 w-full flex-col items-center justify-center text-2xl p-4 bg-darkBG">
    //     {/* Right Half Content */}
    //     <div className='relative flex grow flex-col justify-between'> 
    //       <h1 className="text-gray-500">WELCOME TO YOUR APP!</h1>
    //       <div className="text-md mt-8">
    //         <LoginButton />
    //         <LogoutButton />
    //       </div>
    //       </div>
    //   </div>
    // </div>
  );
};

export default Welcome;
