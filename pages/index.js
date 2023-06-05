import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { Button, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
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
          <input type="text" placeholder="Enter your link" id="linkinput" />
          <Button variant="primary">Shorten It!</Button>
        </div>

        <div className={styles.statistics}>
          <h1>Advance statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Brand Recognition</Card.Title>
              <Card.Text>
                Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Detailed Records</Card.Title>
              <Card.Text>
                Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Fully Customizable</Card.Title>
              <Card.Text>
                Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className={styles.bottom}>
          Boost your links today
        </div>
        <Button variant="primary" >Get Started</Button>
      </div>
      <footer className={styles.footer}>


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
    </>
  );
}
