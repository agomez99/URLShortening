

import React, { useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import styles from '../styles/Shortener.module.css';

export default function Shortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const APIKEY = process.env.NEXT_PUBLIC_BITLY_TOKEN;

  const handleShortenUrl = async (event) => {
    event.preventDefault();

    try {
      const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;
      const headers = {
        Authorization: `Bearer ${APIKEY}`,
        'Content-Type': 'application/json',
      };
      const data = { long_url: originalUrl };
      const response = await axios.post(apiUrl, data, { headers });
      setShortenedUrl(response.data.link);
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container fluid='true' className={styles.container}>
    <Row>
    <Col xs={12}>
    <div className={styles.linkinput}>
        <input
          type="text"
          value={originalUrl}
          className={error ? styles.inputerror : styles.inputstyle}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="   Shorten a link here..."
        />
        <Button variant="primary"  onClick={handleShortenUrl} className={styles.shorten}>
          Shorten It!
        </Button>
      </div>
      <div className={styles.error}>{error && <span>{error}</span>}</div>

      <div className={styles.results}>
        {shortenedUrl && (
          <div>
            <h2>Shortened URL:</h2>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>
    </Col>
  </Row>
  </Container>

  );
}