import React from 'react'

 function Stats() {
  return (
    <div className="mt-8 w-full">
                <h2 className="text-2xl font-bold mb-4">Our Stats</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">1.2 Lakhs+</h3>
                    <p className="text-muted-foreground text-sm">Available Jobs</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">12,000+</h3>
                    <p className="text-muted-foreground text-sm">Total Employers</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">10 Lakhs+</h3>
                    <p className="text-muted-foreground text-sm">Total Workers</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">100,000+</h3>
                    <p className="text-muted-foreground text-sm">Medical Insurance Provided</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">₹20.5 Crores</h3>
                    <p className="text-muted-foreground text-sm">Loans Disbursed</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-2xl font-bold mb-2">₹68+ Crores</h3>
                    <p className="text-muted-foreground text-sm">Salaries Distributed</p>
                  </div>
                </div>
              </div>
  )
}

export default Stats;