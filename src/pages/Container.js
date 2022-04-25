import { useEffect, useState } from "react"
import Contador from "./Contador"

const productosDeBaseDeDatos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300
  }
]




const Container = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    
    const promesa = new Promise((res,rej)=>{
      res(productosDeBaseDeDatos)
     
    })

    .then((contenido)=>{
      console.log("Salio todo Bien")
    })
    .catch((error)=>{
      console.log("Salio todo Mal")
    })


  }, [])

  const onAdd = () => {

  }

  return (
    <>
      <Contador stock={10} init={0} onAdd={onAdd} />
      <ul>
        {productos.map((producto)=>{
          
          return <li key={producto.id} >{producto.nombre}</li>
        })}
      </ul>
    </>
  )
}

export default Container