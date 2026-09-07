import React from 'react'

export default function Dataset({title, by, price}) {
  return (
    <div className="h-full w-full p-5 my-10">
      <h3 className='text-4xl font-bold py-5'>{title}</h3>
      <p>Published by: {by}</p>
      <p>{price}</p>
      <h5>Description</h5>
    </div>
  )
}
