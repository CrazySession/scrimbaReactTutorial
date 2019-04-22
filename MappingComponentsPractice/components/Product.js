import React from 'react'

function Product(props){
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.price}</li>
                <li>{props.description}</li>
            </ul>
            <hr />
            <br />
        </div>
    )
}

export default Product
