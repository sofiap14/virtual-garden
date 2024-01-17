// components/WelcomePage.js
import React from 'react';
import LoginButton from '../components/Login.js';
import LogoutButton from '../components/Logout.js';

const Welcome = () => {
  return (
//     <section class="bg-palepinkBG">
//   <div class="flex h-screen">
//     <nav>nv</nav>
//     <div class="flex-auto m-auto">
//       Plant Inventory
//     </div>

//     <div class="flex-auto m-auto">
//       <h1 className="text-gray-500">WELCOME TO YOUR APP!</h1>
//       <div className="text-md mt-8">
//         <LoginButton />
//         <LogoutButton />
//       </div>
//     </div>

//   </div>
// </section>

      <section class="bg-palepinkBG">
        <div class="grid h-screen grid-cols-2">
          <div className='flex h-screen'>
            <div class="m-auto">
              Plant Inventory
            </div>
          </div>


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
