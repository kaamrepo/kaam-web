import React from 'react'

function Testimonials() {
  return (
    <div className="mt-8 w-full">
    <h2 className="text-2xl font-bold mb-4 text-center">Customer Testimonials</h2>
    <div className="grid gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <blockquote className="text-lg font-semibold leading-snug text-justify">
          "KaamPe has been a game-changer for me. The job opportunities they provided have transformed my
          life and that of my family."
        </blockquote>
        <div className="mt-4 flex items-center gap-2">
          {/* <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
          </Avatar> */}
          <img 
          className='h-10 w-10'
          src="https://generated.vusercontent.net/placeholder-user.jpg" alt="img1" />
          <div>
            <p className="font-medium text-justify">Ravi Kumar</p>
            <p className="text-muted-foreground text-sm">Construction Foreman, Dubai</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <blockquote className="text-lg font-semibold leading-snug text-justify pr-12">
          "I was struggling to find a stable job back home, but KaamPe connected me with an amazing
          opportunity in Singapore. I'm forever grateful."
        </blockquote>
        <div className="mt-4 flex items-center gap-2">
          {/* <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
          </Avatar> */}
          <img 
          className='h-10 w-10'
          src="https://generated.vusercontent.net/placeholder-user.jpg" alt="img2" />
          <div>
            <p className="font-medium text-justify">Priya Sharma</p>
            <p className="text-muted-foreground text-sm">Warehouse Manager, Singapore</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
  


export default Testimonials;