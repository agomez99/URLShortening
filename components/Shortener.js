

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import styles from '../styles/Shortener.module.css';

export default function Shortener() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://cleanuri.com/api/v1/shorten',  { 
        url: originalURL,
      });
      setShortUrl(response.data.result_url);
    } catch (err) {
      console.error(err);
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
      {shortURL && (
        <div>
          <h2>Shortened URL:</h2>
          <a href={shortURL} target="_blank" rel="noopener noreferrer">
            {shortURL}
          </a>
        </div>
      )}
    </div>
      </div>
  );
}
