import NavBar from "./components/navbar/NavBar.jsx"
import ProductContainer from "./components/products/ProductContainer.jsx"
import model3 from './assets/model3.png'

const App = () => {

  return (
    <>
      <NavBar />
     <main>
      
     <ProductContainer title='Model 3' text='Gracias a un exterior actualizado y optimizado para maximizar la eficiencia aerodinámica, podrás recorrer hasta 548 kilómetros (est. EPA) con una sola carga.' img={model3}/>
     <ProductContainer title='Loco Perdido' text='Este vato esta loco' img='https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/474208825_1027317002774209_3338563256523699490_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGorpSaVnL8_tKG-f6yDLK93iLMHtcfVvHeIswe1x9W8Z9euTFrFMLliBDSDTnURJ8&_nc_ohc=qL5fttKr8uYQ7kNvgFpu57J&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=ANObfF91fQ6XxU1-a3E33jc&oh=00_AYCxnOaYvETl5A2bk8L3vWEO0nEVR-GfexIRonzTx4APmw&oe=67998A14'/>
      
      </main>
    </>
   
  )
}

export default App