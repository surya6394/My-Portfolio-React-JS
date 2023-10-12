import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SocialIcons() {
    return (
        <>
            <div className='flex text-2xl gap-5'>
                <a href='' className='text-whatsapp-clr'>
                    <FaWhatsapp />
                </a>
                <a href='' className='text-linkedin-clr'>
                    <FaLinkedinIn />
                </a>
                <a href='' className='text-facebook-clr'>
                    <FaFacebookF />
                </a>
                <a href='' className='text-instagram-clr'>
                    <FaInstagram />
                </a>
            </div>
        </>
    )
}

export default SocialIcons