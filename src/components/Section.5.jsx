import React from 'react'

export default function Section_5() {
  return (
    <div>
       <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold text-card-foreground">Recommended Employees</h2>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 ">
                    <img className='h-10 w-10' src='https://generated.vusercontent.net/placeholder-user.jpg'></img>
                    <div>
                      <p className="font-medium">राम कुमार</p>
                      <p className="text-muted-foreground text-sm">दिल्ली, ₹30,000 - ₹40,000 प्रति माह</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <img className='h-10 w-10' src='https://generated.vusercontent.net/placeholder-user.jpg'></img>
                    <div>
                      <p className="font-medium">सुनीता देवी</p>
                      <p className="text-muted-foreground text-sm">मुंबई, ₹35,000 - ₹45,000 प्रति माह</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <img className='h-10 w-10' src='https://generated.vusercontent.net/placeholder-user.jpg'></img>
                    <div>
                      <p className="font-medium">अजय कुमार</p>
                      <p className="text-muted-foreground text-sm">चेन्नई, ₹40,000 - ₹50,000 प्रति माह</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="mt-4 flex justify-center">
                  <button className="font-medium text-white bg-green-700 rounded-lg p-2 hover:bg-green-500">Allow Location</button>
                </div>
              </div>
    </div>
  )
}
