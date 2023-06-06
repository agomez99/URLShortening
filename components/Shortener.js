import React, { useState } from 'react';
import styles from '../styles/Shortener.module.css'
import { Button } from 'react-bootstrap'



export default function Shortener() {
  const [longURL, setLongUrl] = useState("");
  const [shortLink, setShortLink] = useState({});
  const [active, setActive] = useState(false);
  const [copy, setCopy] = useState(false);

  function handleChange(e) {
    setLongUrl(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longURL,
        domain: "bit.ly",
        group_guid: `${process.env.REACT_APP_GUID}`,
      }),
    })
      .then((res) => res.json())
    setLongUrl("");
  };

  return (
    <div>
      <div className={styles.linkinput}>
      <form method="post" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="linkinput"
            value={longURL}
            onChange={handleChange}
            placeholder="Enter a URL"
            required
          />
          <Button variant="primary" type="submit">
            Shorten It!
          </Button>
        </form>
      </div>
      <div className={styles.results}>
      {active ? (
        <div className="show_links">
          <img src={shortLink.qr_code} alt="Qr code" className="qr_img"/>
          <div>
            <h3>Here's your short link...</h3>
            <span>
              <p>{shortLink.link}</p>
              <CopyToClipboard onCopy={()=>{
                setCopy(true);
              }} text={shortLink.link}>{ !copy ? <img src={copyicon} alt="copy icon" width="17px" height="17px"/> : <img src={copiedicon} alt="copy icon" width="17px" height="17px"/>  }</CopyToClipboard>

            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
      </div>
  );
}
