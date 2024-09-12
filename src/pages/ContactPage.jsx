import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import NavbarC from "../components/NavbarC"
import FooterC from '../components/FooterC';
import ContactC from '../components/ContactC';

const ContactPage = () => {
  return (
    <>
        <NavbarC/>

        <ContactC/>

        <FooterC/>
    </>
    
  )
}

export default ContactPage