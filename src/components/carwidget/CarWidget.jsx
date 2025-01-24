import cartIcon from '../../assets/cart-svg.svg'

let cartProducts = [1, 2, 3, 4, 5]


const CarWidget = () => {
  const itemCount = cartProducts.length


  return (
    <>
      <a href="#"></a>
      <img src={cartIcon} alt="Cart Icon" className='cartIcon'/>
      <span className='itemCount'>{itemCount}</span>
      </>
  )
}

export default CarWidget