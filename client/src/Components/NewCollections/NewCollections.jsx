import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='newcollections'>h
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
           {/*we will map the new collections data within this div using item component*/} 
           {new_collection.map((item,i)=>{
            return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })}
        </div>
    </div>
  )
}

export default NewCollections