import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icon">
            <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlinedIcon/></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a></li>
            </ul>
          </div>
          <div className="footer_data">
            <div>
              <li>Aoudio Description</li>
              <li>Investor Relations</li>
              <li>Legal Noticce</li>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
              <li>Jobs</li>
                <li>Cookie  Preferences</li>
                <li>Privacy</li>
            </ul>
            </div>
            <div>
              <ul>
                <li>Account</li>
                <li>Ways Ro Watch</li>
                <li>Corporate Information</li>
                <li>Only on Flix</li>


              </ul>
            </div>
            <div>
              <ul>
                <li> Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}