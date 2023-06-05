import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            More than just shorter links
          </h1>
          <p className={styles.description}>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.
          </p>
          <Button variant="primary">Get Started</Button>
          <div>
          <Image src="/images/illustration-working.svg" alt="working" width={600} height={450} />
          </div>
        </main>
        <div className={styles.linkinput}>
          <input type="text" placeholder="Enter your link" id="linkinput"  />
          <Button variant="primary">Shorten It!</Button>
        </div>

        <footer className={styles.footer}>
          Boost your links today

          Get Started

          Features

          Link Shortening
          Branded Links
          Analytics

          Resources

          Blog
          Developers
          Support

          Company

          About
          Our Team
          Careers
          Contact
        </footer>
      </div>
    </>
  );
}
