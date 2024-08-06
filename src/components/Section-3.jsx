import React from 'react'

const Section_3 = () => {
  return (
    <div>

   <div className="mt-8 w-full">
               <h2 className="text-2xl font-bold mb-4">Our Stats</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">1.2 Lakhs+</h3>
                   <p className="text-muted-foreground text-sm">Available Jobs</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">12,000+</h3>
                   <p className="text-muted-foreground text-sm">Total Employers</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">10 Lakhs+</h3>
                   <p className="text-muted-foreground text-sm">Total Workers</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">100,000+</h3>
                   <p className="text-muted-foreground text-sm">Medical Insurance Provided</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">₹20.5 Crores</h3>
                   <p className="text-muted-foreground text-sm">Loans Disbursed</p>
                 </div>
                 <div className="bg-white rounded-lg shadow-md p-2 text-center">
                   <h3 className="text-2xl font-bold mb-2">₹68+ Crores</h3>
                   <p className="text-muted-foreground text-sm">Salaries Distributed</p>
                 </div>
               </div>
             </div>


             <div className="mt-8 w-full">
            <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 ">
                <div className="bg-white rounded-lg shadow-md p-4 flex  justify-center">
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/bv-acharya-3-768x520-sixteen_nine.jpg" width={100} height={50} alt="Partner 1" className="object-contain" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/640px-Adani_2012_logo.png" width={100} height={50} alt="Partner 2" className="object-contain" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG9bx2XsvIirGYBzxx6pWwBrJkmDWH2aDaQ&s" width={100} height={50} alt="Partner 3" className="object-contain" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                    <img src="https://www.apple.com/v/apple-events/home/af/images/meta/overview__bcphzsdb4fpu_og.png?202407012123" width={100} height={50} alt="Partner 4" className="object-contain" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpYGI3qzLTp4UYycYLCNfhL3GaAfTOiqkgw&s" width={100} height={50} alt="Partner 5" className="object-contain" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_3;
