import React from 'react'

const Guitar = ({guitar, addToCart}) => {

const {id, name,image, description, price} = guitar

const handleClick = ((guitar)=>{
setCart (guitar)
})



  return (
    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
        <img class="img-fluid" src={`/img/${image}.jpg`} alt={name}/>
    </div>
    <div class="col-8">
        <h3 class="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p class="fw-black text-primary fs-3">$ {price}</p>
        <button 
            onClick={()=> addToCart(guitar)}   
            type="button"
            class="btn btn-dark w-100"
        >Agregar al Carrito</button>
    </div>
</div>
  )
}

export default Guitar