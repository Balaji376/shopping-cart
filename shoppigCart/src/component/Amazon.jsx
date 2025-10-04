
import React from 'react'


import Cards from './Card'
import list from '../data/data'

const Amazon = ({handleClick}) => {
  return (
    <>
     <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </>
  )
}

export default Amazon