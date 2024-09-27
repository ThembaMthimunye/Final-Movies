import React from 'react' 
import { CircleLoader  } from 'react-spinners';



const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-10 py-52'>
     <CircleLoader  color = {'red'}/>
</div>

  )
}

export default Spinner
{/* <CircleLoader /> */}