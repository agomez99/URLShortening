import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Shortener.module.css'
import { Button } from 'react-bootstrap'



export default function Shortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      setError("Please enter a URL");
      return;
    }

    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`);
      const data = await res.json();
        console.log(data);
      if (data && data.result) {
        setShortenedUrl(data.result.short_link);
        setOriginalUrl("");
        setError("");
      } else {
        setError("Shortening Failed!");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <div className={styles.linkinput}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="linkinput"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter a URL"
            required
          />
          <Button variant="primary" type="submit">
            Shorten It!
          </Button>
        </form>
      </div>
      <div className={styles.results}>
        {shortenedUrl && (
          <div>
            <p>Shortened URL:</p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
