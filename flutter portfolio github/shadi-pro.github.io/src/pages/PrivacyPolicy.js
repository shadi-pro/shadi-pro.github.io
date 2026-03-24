// src/pages/PrivacyPolicy.js
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaLock, FaEye, FaCookieBite } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const PrivacyPolicy = () => {
  const { isDarkMode } = useTheme();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Force scroll to top and ensure visibility
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
    console.log("PrivacyPolicy loaded - content should be visible");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        minHeight: '100vh',
        color: isDarkMode ? '#e2e8f0' : '#1e293b'
      }}
    >
      {/* Header with Gradient */}
      <div
        style={{ 
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
          padding: '40px 0',
          color: 'white'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <FaArrowLeft style={{ marginRight: '8px' }} />
                Back to Portfolio
              </Link>
            </Col>
            <Col className="text-end">
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
                <FaShieldAlt style={{ marginRight: '15px' }} />
                Privacy Policy
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                Last Updated: {currentDate}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container style={{ padding: '40px 20px' }}>
        <Card style={{ 
          border: 'none', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
          color: isDarkMode ? '#e2e8f0' : '#1e293b',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}>
          <Card.Body style={{ padding: '40px' }}>
            
            {/* INTRODUCTION */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                1. Introduction
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                Welcome to <strong>Shadi - The Tech Artist</strong>. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or purchase my digital products.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                I respect your privacy and am committed to protecting your personal data. Please read this policy carefully.
              </p>
            </section>

            {/* BUSINESS INFORMATION */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                2. Who I Am
              </h2>
              <div style={{ 
                backgroundColor: isDarkMode ? '#334155' : '#f8fafc',
                padding: '20px',
                borderRadius: '10px'
              }}>
                <p style={{ marginBottom: '5px' }}><strong>Name:</strong> Shadi Sayed Mohamed Ahmed</p>
                <p style={{ marginBottom: '5px' }}><strong>Business Name:</strong> Shadi - The Tech Artist</p>
                <p style={{ marginBottom: '5px' }}><strong>Address:</strong> 25 Wali El Ahd, Hadaek El Kobba, Cairo 11256, Egypt</p>
                <p style={{ marginBottom: '5px' }}><strong>Email:</strong> shadisayed.6890@gmail.com</p>
                <p style={{ marginBottom: '0' }}><strong>Phone:</strong> +201151638804</p>
              </div>
            </section>

            {/* DATA COLLECTED */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                3. Information I Collect
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <FaEye style={{ marginRight: '10px', color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
                  Information You Provide
                </h3>
                <ul style={{ paddingLeft: '40px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Name and email address</strong> (when you contact me or purchase)</li>
                  <li style={{ marginBottom: '8px' }}><strong>Payment information</strong> (processed securely by Gumroad, SellMyApp, Codester - I never see your card details)</li>
                  <li style={{ marginBottom: '8px' }}><strong>Any information you include in messages</strong> to me</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <FaCookieBite style={{ marginRight: '10px', color: isDarkMode ? '#60a5fa' : '#2563eb' }} />
                  Information Collected Automatically
                </h3>
                <ul style={{ paddingLeft: '40px' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Usage data</strong> (pages visited, time spent)</li>
                  <li style={{ marginBottom: '8px' }}><strong>Device information</strong> (browser type, IP address)</li>
                  <li style={{ marginBottom: '8px' }}><strong>Cookies and similar technologies</strong></li>
                </ul>
              </div>
            </section>

            {/* HOW I USE YOUR DATA */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                4. How I Use Your Information
              </h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                  <span>To provide and deliver my products and services</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                  <span>To communicate with you about your purchases</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                  <span>To provide customer support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                  <span>To improve my website and products</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                  <span>To send occasional updates (you can opt out anytime)</span>
                </div>
              </div>
            </section>

            {/* DATA SHARING */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                5. Information Sharing
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                I <strong>do not sell, trade, or rent</strong> your personal information to others. I only share information with:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Payment processors</strong> (Gumroad, SellMyApp, Codester) to complete your transactions</li>
                <li style={{ marginBottom: '8px' }}><strong>Service providers</strong> who help me operate my website (Firebase hosting)</li>
                <li style={{ marginBottom: '8px' }}><strong>When required by law</strong> to comply with legal obligations</li>
              </ul>
            </section>

            {/* DATA SECURITY */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                6. Data Security
              </h2>
              <div style={{ 
                backgroundColor: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <FaLock style={{ fontSize: '2rem', color: '#10b981' }} />
                <p style={{ marginBottom: '0' }}>
                  I implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>
            </section>

            {/* YOUR RIGHTS */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                7. Your Rights
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                Depending on your location, you may have the right to:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <li style={{ marginBottom: '8px' }}>Access the personal information I hold about you</li>
                <li style={{ marginBottom: '8px' }}>Request correction of inaccurate data</li>
                <li style={{ marginBottom: '8px' }}>Request deletion of your data</li>
                <li style={{ marginBottom: '8px' }}>Opt out of marketing communications</li>
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '15px' }}>
                To exercise these rights, contact me at <strong style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>shadisayed.6890@gmail.com</strong>
              </p>
            </section>

            {/* COOKIES */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                8. Cookies
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                My website uses cookies to improve user experience. You can set your browser to refuse cookies, but some parts of the site may not function properly.
              </p>
              <div style={{ 
                backgroundColor: isDarkMode ? '#334155' : '#f1f5f9',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '0.95rem'
              }}>
                <strong>Types of cookies used:</strong>
                <ul style={{ marginTop: '10px', marginBottom: '0' }}>
                  <li><strong>Essential cookies:</strong> Required for site operation</li>
                  <li><strong>Analytics cookies:</strong> Help me understand how visitors use the site</li>
                </ul>
              </div>
            </section>

            {/* CHILDREN'S PRIVACY */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                9. Children's Privacy
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                My services are not directed to individuals under 18. I do not knowingly collect information from children. If you are a parent and believe your child has provided information, please contact me.
              </p>
            </section>

            {/* INTERNATIONAL TRANSFERS */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                10. International Data Transfers
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Your information may be transferred to and processed in countries other than your own (including the United States, where my hosting provider is located). By using my services, you consent to such transfers.
              </p>
            </section>

            {/* GDPR (EU) */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                11. GDPR (For EU Users)
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                If you are in the European Economic Area (EEA), you have additional rights under the GDPR:
              </p>
              <ul style={{ paddingLeft: '40px' }}>
                <li style={{ marginBottom: '8px' }}>Right to access, rectify, or erase your data</li>
                <li style={{ marginBottom: '8px' }}>Right to data portability</li>
                <li style={{ marginBottom: '8px' }}>Right to withdraw consent</li>
                <li style={{ marginBottom: '8px' }}>Right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '15px' }}>
                My legal basis for processing your data is your consent and the performance of a contract (to provide products you purchased).
              </p>
            </section>

            {/* CCPA (California) */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                12. CCPA (For California Users)
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                California residents have the right to request disclosure of personal information collected, request deletion, and opt out of sale of personal information. I do not sell personal information.
              </p>
            </section>

            {/* POLICY CHANGES */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                13. Changes to This Policy
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                I may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. I encourage you to review this policy periodically.
              </p>
            </section>

            {/* CONTACT */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                14. Contact Me
              </h2>
              <div style={{ 
                backgroundColor: '#2563eb',
                padding: '30px',
                borderRadius: '10px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.3rem', marginBottom: '15px' }}>📧 shadisayed.6890@gmail.com</p>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>📞 +201151638804</p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>📍 Cairo, Egypt</p>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '20px', textAlign: 'center', color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                For privacy-related questions, please email me. I'll respond within 24-48 hours.
              </p>
            </section>

            {/* FOOTER */}
            <div style={{ 
              marginTop: '40px', 
              paddingTop: '20px', 
              borderTop: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
              textAlign: 'center'
            }}>
              <p style={{ color: isDarkMode ? '#94a3b8' : '#64748b', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Shadi Sayed Mohamed Ahmed. All Rights Reserved.
              </p>
              <p style={{ color: isDarkMode ? '#94a3b8' : '#64748b', fontSize: '0.9rem' }}>
                Version 1.0.0 | Last Updated: {currentDate}
              </p>
            </div>

          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  );
};

export default PrivacyPolicy;