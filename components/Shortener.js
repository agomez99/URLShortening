import React, { useState } from 'react';
import styles from '../styles/Shortener.module.css'
import { Button } from 'react-bootstrap'
import axios from 'axios';


export default function Shortener() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
        url: originalURL,
      });

      setShortenedURL(response.data.result_url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-sm">
      <div className={styles.linkinput}>
      <form method="post" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="linkinput"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
            placeholder="Shorten a link here..."
            required
          />
          <Button variant="primary" type="submit" className={styles.shorten}>
            Shorten It!
          </Button>
        </form>
      </div>
      <div className={styles.results}>
      {shortenedURL && (
        <div>
          <h2>Shortened URL:</h2>
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
            {shortenedURL}
          </a>
        </div>
      )}
    </div>
      </div>
  );
}
