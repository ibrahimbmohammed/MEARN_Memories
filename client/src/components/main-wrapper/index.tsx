import React from 'react'

const index:React.FunctionComponent = ({children}) =>{
    return (
        <div className="flex h-screen w-auto justify-evenly mt-20 ">
            {children}
        </div>
    )
}

export default index
