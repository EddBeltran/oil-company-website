import React from 'react'
//import logoFacebook from '../assets/icons/facebook.svg'
import FooterLinks from './Collapsible';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

function Footer(){
    return(
        <section className='block--big block--primary big-container'>
            <div className='footer small-container'>
                <div className='footer__info'>
                    <h4>Azteca Oil Company © 2022</h4>
                    <p>Tel: +55 00 00 1234<br />
                    Plaza San Pedro #33, México</p>
                    <Button text="Contact Us" buttonStyle="secondary" />
                    <div className='footer__info__socialmedia'>
                        <div className='footer__info__socialmedia__icon'>
                            <Icon name="facebook" color="#fff" size="20" />
                        </div>
                        <div className='footer__info__socialmedia__icon'>
                            <Icon name="twitter" color="#fff" size="20" />
                        </div>
                        <div className='footer__info__socialmedia__icon'>
                            <Icon name="youtube" color="#fff" size="20" />
                        </div>
                        <div className='footer__info__socialmedia__icon'>
                            <Icon name="linkedin" color="#fff" size="20" />
                        </div>
                    </div>                
                </div>
                <div className='footer__links'>
                    <FooterLinks 
                        category="Quienes Somos"
                        links = {["Nuestra Compañia", "Historia", "Legado", "Servicios"]}
                    />
                    <FooterLinks 
                        category="Operaciones"
                        links = {["Offshore", "Onshore", "Campos", "Equipos", "Estaciones de combustible"]}
                    />
                    <FooterLinks 
                        category="Carreras"
                        links = {["Oportunidades", "Internships", "Nuestro Equipo"]}
                    />
                    <FooterLinks 
                        category="Inversores"
                        links = {["Investor Day", "Reporte Anual", "Negocios", "Mercado"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Footer