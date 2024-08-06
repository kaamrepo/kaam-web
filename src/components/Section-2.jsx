import React from 'react'
import { Lock, Cross, Wallet, Plane, Handshake } from "lucide-react"

const Section_2 = () => {
  return (
     <div className='px-5'>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                  <span className='text-green-700'><Lock /></span>
                    <h3 className="text-lg font-bold mb-1">Job Security</h3>
                    <p className="text-muted-foreground text-sm">
                      Our jobs offer guaranteed job security, ensuring you can build a stable career.
                    </p>
                  </div>
        <div className="bg-white rounded-lg shadow-md p-4">
                     <span className='text-green-700'><Cross /></span>
                    <h3 className="text-lg font-bold mb-1">Health Benefits</h3>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive health insurance coverage to keep you and your family protected.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <span className='text-green-700'><Wallet /></span>
                    <h3 className="text-lg font-bold mb-1">Get Loans</h3>
                    <p className="text-muted-foreground text-sm">
                      Opportunities to get loans for personal or business needs.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                  <span className='text-green-700'><Wallet /></span>
                    <h3 className="text-lg font-bold mb-1">Competitive Salaries</h3>
                    <p className="text-muted-foreground text-sm">
                      Earn higher salaries compared to local job opportunities.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <span className='text-green-700'><Plane /></span>
                    <h3 className="text-lg font-bold mb-1">Global Opportunities</h3>
                    <p className="text-muted-foreground text-sm">
                      Explore job opportunities in various countries around the world.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 ">
                    
                  <span className='text-green-700'><Handshake /></span>
                    <h3 className="text-lg font-bold mb-1">Personalized Support</h3>
                    
                    <p className="text-muted-foreground text-sm">
                      Our team provides personalized assistance throughout the job search process.
                    </p>
                  </div>
                </div>
              </div>
    
    <div className="mt-8 w-full ">
                <h2 className="text-2xl font-bold mb-4 text-current">Our Mission</h2>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <p className="text-muted-foreground text-sm">
                    Our mission is to empower the rural Indian workforce by providing them with better job opportunities
                    across the globe. We aim to improve their living standards by connecting them with high-paying jobs
                    that offer job security, comprehensive health benefits, and attractive living arrangements. Through
                    our platform, we strive to create a brighter future for these hardworking individuals and their
                    families, helping them achieve a better quality of life.
                  </p>
                </div>
    
    </div>
  


              </div>
   
        
  )
}

export default Section_2;
