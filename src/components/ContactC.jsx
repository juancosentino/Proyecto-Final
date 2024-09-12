import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/ContactC.css'

const ContactC = () => {
  return (
    <>
        <header className='titleContact' style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1em' }}>
            <h1>Contacto</h1>
        </header>

        <Container style={{ minHeight: '68.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Form.Group controlId="formDireccion">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu dirección" required />
                </Form.Group>
                <Form.Group controlId="formCorreo" style={{marginTop:'10px'}}>
                    <Form.Label>Correo Electrónico:</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
                </Form.Group>
                
                <Form.Group controlId="formTelefono" style={{marginTop:'10px'}}>
                    <Form.Label>Número de Teléfono:</Form.Label>
                    <Form.Control type="tel" placeholder="Ingresa tu número de teléfono" required />
                </Form.Group>

                <Form.Group controlId="formCalle" style={{marginTop:'10px'}}>
                    <Form.Label>Motivo:</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Ingresa tu dirección de la calle" required />
                </Form.Group>

                <Button variant="dark" type="submit" style={{marginTop:'10px'}}>
                    Enviar
                </Button>
            </Form>
        </Container>
    </>
  )
}

export default ContactC