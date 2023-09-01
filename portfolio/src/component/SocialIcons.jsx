import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SocialIcons() {
    return (
        <>
            <div className='flex text-3xl gap-2'>
                <a href='' className='text-whatsapp-clr'>
                    <AiOutlineWhatsApp />
                </a>
                <a href='' className='text-linkedin-clr'>
                    <AiOutlineLinkedin />
                </a>
                <a href='' className='text-facebook-clr'>
                    <AiFillFacebook />
                </a>
                <a href='' className='text-instagram-clr'>
                    <AiOutlineInstagram />
                </a>
            </div>
        </>
    )
}

export default SocialIcons