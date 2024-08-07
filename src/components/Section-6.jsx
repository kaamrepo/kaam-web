import React from 'react'

export const Section_6 = () => {
  return (
    <div>
         <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold text-card-foreground">Recent Recruits</h2>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    {/* <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@sha" />
                    </Avatar> */}
                    <div>
                      <p className="font-medium">Ravi Kumar</p>
                      <p className="text-muted-foreground text-sm">Joined Acme Construction 1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@sha" />
                    </Avatar> */}
                    <div>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-muted-foreground text-sm">Joined Globex Manufacturing 30 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="@sha" />
                    </Avatar> */}
                    <div>
                      <p className="font-medium">Arun Patel</p>
                      <p className="text-muted-foreground text-sm">Joined Stark Logistics 45 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold text-card-foreground">Upload your CV to get a job</h2>
                <div className="mt-4 flex justify-center">
                  <button className="font-medium text-white bg-green-700 rounded-lg p-2 hover:bg-green-500">Upload CV</button>
                </div>
              </div>
            </div>

  )
}
