import React from 'react';
import QuickLinkButton from './QuickLinkButton'; // Import the button component

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div>
          <h2>Contact Support</h2>
          <p>Email: <a href="mailto:support@matchup.com" style={linkStyle}>support@matchup.com</a></p>
          <p>Phone: <a href="tel:+1-123-456-7890" style={linkStyle}>+1 (123)-456-7890</a></p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li>
              <QuickLinkButton to="/Help">Help</QuickLinkButton>
            </li>
            <li>
              <QuickLinkButton to="/AboutUs">About Us</QuickLinkButton>
            </li>
            <li>
              <QuickLinkButton to="/Teammembers">Team members</QuickLinkButton>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  bottom: 0,
  left: 0,
  width: 'flex',
  backgroundColor: '#D1510A',
  color: 'white',
  padding: '20px',
  height: 'flex'
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const linkStyle = {
  color: 'white', // Optional: if you want the links to be white like the rest of the text
  textDecoration: 'underline', // Optional: if you want to underline the links
};

export default Footer;
