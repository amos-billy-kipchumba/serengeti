import { Email, Instagram, LinkedIn, Phone, RoomOutlined, YouTube } from '@mui/icons-material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React from 'react'
import './Footer.css'
import Pic from './images/seremoved.png'
import {useNavigate} from 'react-router-dom'
function Footer() {
    const Navigate = useNavigate();
  return (
    <div className='footer-container'>
        <div className='footer-container-main'>
            <div className='footer-container-main-one'>
                <div className='footer-container-main-one-rot'>
                    <img src={Pic} alt='footer-pi' />
                </div>

                <p>
                    We are a Film Production and Photography Studio, based in Nairobi, East Africa.
                </p>

                <p><span><RoomOutlined /></span> Nairobi, East Africa.</p>
                <p><span><Phone /></span> +254707169445</p>
                <p><span><Email /></span> serengeti.studio@gmail.com</p>
            </div>

            <div className='footer-container-main-two'>
                <label>Links</label>
                <p onClick={()=> {
                    Navigate('/');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Home</p>
                <p onClick={()=> {
                    Navigate('/film');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Film</p>
                <p onClick={()=> {
                    Navigate('/photography');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Photography</p>
                <p onClick={()=> {
                    Navigate('/clients');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Clients</p>
                <p onClick={()=> {
                    Navigate('/services');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Services</p>
                <p onClick={()=> {
                    Navigate('/profile');
                }}><span><KeyboardDoubleArrowRightIcon /></span> Profile</p>
            </div>

            <div className='footer-container-main-three'>
                <label>Social media</label>
                <a href=' https://instagram.com/serengetistudio?igshid=YmMyMTA2M2Y=' rel='noreferrer' target='_blank'><span><Instagram /></span> Instagram</a>
                <a href='https://youtube.com/user/serengetistudio' rel='noreferrer' target='_blank'><span><YouTube /></span> YouTube</a>
                <a href='http://linkedin.com/in/sagwa-chabeda-569a1724' rel='noreferrer' target='_blank'><span><LinkedIn /></span> LinkedIn</a>
            </div>
        </div>

        <div className='bottom-bottom'>
            <p>All Rights Reserved of Serengeti Studio © {new Date().getFullYear()}, Design & Developed By: Amos Billy</p>
        </div>
    </div>
  )
}

export default Footer