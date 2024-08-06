

const Section_1 = () => {
  return (
    <div>
        <div className="px-5">
    <div className="col-span-1 md:col-span-2">
    <h1 className="text-3xl font-bold my-4">Find Your Dream Job</h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input id="location" placeholder="Location" className="flex-1 px-2 py-1 bg-gray-100" />
          <input id="job-title" placeholder="Job Title" className="flex-1 px-2 py-1 bg-gray-100" />
        </div>
        <button type="submit" className="sm:ml-[40%] rounded-3xl text-white  bg-green-700 py-1 px-5 mt-4  ml-[35%] ">
          Search Jobs
        </button>
      </form>
    </div>
     </div>
     <div className="mt-8"> 
                   
                <h2 className="text-2xl font-bold mb-4">Featured International Blue Collar Jobs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h3 className="bg-white rounded-lg shadow-md p-4">
                      <span className="text-lg font-bold">Jobs in UAE</span>
                      <p>starting at INR 95,000 per month</p>
                    </h3>
                    <div />
                  </div>
                  <div>
                    <h3 className="bg-white rounded-lg shadow-md p-4">
                      <span className="text-lg font-bold">Jobs in Qatar</span>
                      <p>starting at INR 120,000 per month</p>
                    </h3>
                    <div />
                  </div>
                  <div>
                    <h3 className="bg-white rounded-lg shadow-md p-4">
                      <span className="text-lg font-bold">Jobs in Australia</span>
                      <p>starting at INR 110,000 per month</p>
                    </h3>
                    <div />
                  </div>
                  <div>
                    <h3 className="bg-white rounded-lg shadow-md p-4">
                      <span className="text-lg font-bold">Jobs in Singapore</span>
                      <p>starting at INR 90,000 per month</p>
                    </h3>
                    <div />
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="w-auto py-2 px-4 text-white p-1 bg-green-700 rounded-3xl">Sign Up Now</button>
                </div>
              </div>
              </div>
     </div>
        
  )
}

export default Section_1
