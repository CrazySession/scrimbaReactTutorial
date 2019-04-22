/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"

import Product from './components/Product'

const products = productsData.map(function(prod){
    return  <Product    key=            {prod.id} 
                        name=           {prod.name}
                        price=          {prod.price}
                        description=    {prod.description}
            />
    })

function App() {
  return (
    <div>
        {products}       
    </div>
  )
}

export default App
