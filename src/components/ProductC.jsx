import React from 'react'
import "../css/ProductC.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'

const ProductC = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const token = JSON.parse(sessionStorage.getItem('token')) || ''

  
    const getOneProduct = async() => {
        const getProduct = await fetch(`http://localhost:3001/api/products/${params.id}`)
        const data = await getProduct.json() 
        setProduct(data.getProduct)
    }

    useEffect(() => {
        getOneProduct()
    }, [])

    const addProdCar = () =>{
        if(!token){
            Swal.fire({
                icon: "error",
                title: "Debes iniciar sesion para agregar este producto al carrito",
                /* text: "Algún campo esta vacio!" */
            });

            setTimeout(() => {
                location.href = '/login'
            }, 3000)
        }else{
            Swal.fire({
                title: "Producto agregado al carrito",
                /* text: "You clicked the button!", */
                icon: "success"
            });
        }
    }

    const addProdFav = () =>{
        if(!token){
            Swal.fire({
                icon: "error",
                title: "Debes iniciar sesion para agregar este producto a favoritos",
                /* text: "Algún campo esta vacio!" */
            });

            setTimeout(() => {
                location.href = '/login'
            }, 3000)
        }else{
            Swal.fire({
                title: "Producto agregado a favoritos",
                /* text: "You clicked the button!", */
                icon: "success"
            });
        }
    }

    return (
        <div className="div-product">
            <div className='publicidad'>
                <img src="data:image/jpeg;base64,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" 
                alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qnmgYUDu65Op8FRlYJq8Se6ZE6nXPEcuJ4wxgidrDw&s" alt="" 
                width={196}/>
            </div>
            <Container className='product-container'>
                <Row>
                    <Col xs={12} md={6}>
                      <img src={product.imagen} alt="" className='product-imagen'/>
                    </Col >
                    <Col xs={12} md={6} className='product-right' >
                        <h2 className='product-title'>{product.titulo}</h2>
                        <p className='product-fuente2'>Descripcion:</p>
                        <p className='product-fuente'>{product.descripcion}</p>
                        <p className='product-fuente2'>Precio:</p>
                        <p className='product-fuente'>{product.precio}</p>
                        <div className='product-btn'>
                            <Button onClick={addProdCar}>Añadir al carrito</Button>
                            <Button onClick={addProdFav}>Añadir a favorito</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductC