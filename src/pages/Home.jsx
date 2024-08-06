import React from 'react';

import Header from '../components/Header';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Home = () => {
  return (
    <div>
      <Header />
         <main className="flex-1 bg-muted">
         <div className="py-8 px-4 sm:px-6 lg:px-8"> 
           <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
             <div className='col-span-5'>
               <LeftPane />
             </div>
               <RightPane />
           </div>
         </div>
       </main>
   </div>
  )
};

export default Home;
