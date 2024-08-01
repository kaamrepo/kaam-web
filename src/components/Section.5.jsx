import React from 'react'


 function Investors() {
  return (
    <div className="mt-8 w-full">
    <h2 className="text-2xl font-bold mb-4">Seeking Investors</h2>
    <div className="bg-white rounded-lg shadow-md p-4">
      <p className="text-muted-foreground text-sm">
        We are actively seeking investors to help us expand our reach and impact. If you are interested in
        learning more about our mission and investment opportunities, please connect with us via LinkedIn or
        email. We would be thrilled to discuss how we can work together to create a brighter future for the
        rural Indian workforce.
      </p>
      <div className="mt-4 flex justify-center">
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-green-700 text-white px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Connect on LinkedIn
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ml-4"
          prefetch={false}
        >
          Email Us
        </a>
      </div>
    </div>
  </div>
  )
}


export default Investors;