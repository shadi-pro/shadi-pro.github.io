// src/pages/TermsPage.js
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaFileContract, FaLock } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const TermsPage = () => {
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
    console.log("TermsPage loaded - content should be visible");
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
                <FaFileContract style={{ marginRight: '15px' }} />
                Terms & Conditions
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                Last Updated: {currentDate}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content - FORCED VISIBLE */}
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
            
            {/* 1. INTRODUCTION */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                1. Introduction
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                Welcome to <strong>Shadi - The Tech Artist</strong>. These Terms and Conditions govern your use of digital products purchased through my platforms, including Gumroad, SellMyApp, Codester, and direct sales.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                By purchasing or downloading any product, you agree to be bound by these terms.
              </p>
            </section>

            {/* 2. BUSINESS INFORMATION */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                2. Business Information
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

            {/* 3. PRODUCTS */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                3. Products
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '10px' }}>
                I sell digital Flutter mobile application templates, source code, UI kits, and custom development services. All products are digital downloads unless otherwise specified.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Current products include: VaultFin Pro (finance app), AtlasSky (country/weather explorer), E-Commerce BLoC template, TaskFlow Manager, and Social Media Clone.
              </p>
            </section>

            {/* 4. REFUND POLICY */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                4. Refund Policy
              </h2>
              <div style={{ 
                backgroundColor: isDarkMode ? '#991b1b20' : '#fee2e2',
                padding: '20px',
                borderRadius: '10px',
                border: isDarkMode ? '1px solid #ef4444' : 'none'
              }}>
                <p style={{ 
                  fontWeight: 'bold', 
                  color: isDarkMode ? '#f87171' : '#991b1b',
                  marginBottom: '10px'
                }}>
                  ⚠️ Due to the digital nature of our products, all sales are final. No refunds will be issued after download.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0' }}>
                  If you experience technical issues, please contact me for support. I'm committed to helping you get my products working.
                </p>
              </div>
            </section>

            {/* 5. INTELLECTUAL PROPERTY */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                5. Intellectual Property
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                You purchase a <strong>license to use</strong> my source code in your projects, not ownership of the code itself.
              </p>
              <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#10b981', marginRight: '15px', fontSize: '1.2rem' }}>✓</span>
                <span><strong style={{ color: '#10b981' }}>You MAY:</strong> Use in personal/commercial projects, modify the code, create derivative works.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#ef4444', marginRight: '15px', fontSize: '1.2rem' }}>✗</span>
                <span><strong style={{ color: '#ef4444' }}>You MAY NOT:</strong> Resell the original source code, claim it as your own, or redistribute it as a template.</span>
              </div>
            </section>

            {/* 6. PAYMENTS */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                6. Payments
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px' }}>
                All payments are processed through secure third-party platforms: Gumroad, SellMyApp, and Codester.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Prices are in US dollars. We accept Visa, Mastercard, American Express, Discover, and PayPal.
              </p>
            </section>

            {/* 7. LIMITATION OF LIABILITY */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                7. Limitation of Liability
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                To the maximum extent permitted by law, my liability is limited to the amount you paid for the product. I am not liable for any indirect, incidental, or consequential damages arising from the use of my products.
              </p>
            </section>

            {/* 8. GOVERNING LAW */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                8. Governing Law
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </section>

            {/* 9. DISPUTE RESOLUTION */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                9. Dispute Resolution
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Any disputes will first be resolved through informal negotiation for 30 days. If unresolved, disputes will be settled by binding arbitration in Delaware.
              </p>
            </section>

            {/* 10. CONTACT */}
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ color: isDarkMode ? '#60a5fa' : '#2563eb', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                10. Contact Information
              </h2>
              <div style={{ 
                backgroundColor: '#2563eb',
                padding: '20px',
                borderRadius: '10px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>📧 shadisayed.6890@gmail.com</p>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>📞 +201151638804</p>
                <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>📍 Cairo, Egypt</p>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '15px', textAlign: 'center', color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                Response time: Within 24 hours
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

export default TermsPage;