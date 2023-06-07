import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Shortener from '../components/Shortener';
import { Facebook, Twitter, Pinterest, Instagram } from 'react-bootstrap-icons';
export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        </Head>
        <main className={styles.main}>
          <Container>
            <Row>
              <Col>
                <h1 className={styles.title}>
                  More than just shorter links
                </h1>
                <p className={styles.description}>
                  Build your brand’s recognition and get detailed insights
                  on how your links are performing.
                </p>
                <Button variant="primary" className={styles.started}>Get Started</Button>
              </Col>
              <Col>
                <div>
                  <Image src="/images/illustration-working.svg" alt="working" width={600} height={450} />
                </div>
              </Col>
            </Row>
          </Container>


        </main>
        <Shortener />
        <div className={styles.statistics}>
        <div className={styles.line}></div>
          <h1 className='text-center'>Advance statistics</h1>
          <p className='text-center'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <div class="row">

          <div class="col-sm-4">
          <Card style={{ width: '20rem' }} className={styles.card1}>
          <div className={styles.iconCircle}>
            <Image src="/images/icon-brand-recognition.svg" alt="brand" width={40} height={40} />
            </div>
            
            <Card.Body>
              <Card.Title>Brand Recognition</Card.Title>
              <Card.Text>
                Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
    <div class="col-sm-4">
          
          <Card style={{ width: '20rem' }} className={styles.card2}>
          <div className={styles.iconCircle}>
            <Image src="/images/icon-detailed-records.svg" alt="detailed" width={40} height={40} /> 
            </div>
            <Card.Body>
              <Card.Title>Detailed Records</Card.Title>
              <Card.Text>
                Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </Card.Text>
            </Card.Body>
          </Card>
</div>
    <div class="col-sm-4">
          
          
          <Card style={{ width: '20rem' }} className={styles.card3}>
          <div className={styles.iconCircle}>

            <Image src="/images/icon-fully-customizable.svg" alt="customizable" width={40} height={40} />
</div>
            <Card.Body>
              <Card.Title>Fully Customizable</Card.Title>
              <Card.Text>
                Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

</div>
        <div className={styles.bottom}>
          <p className={styles.bottomText}>Boost your links today</p>
          <Button variant="primary" className={styles.started}>Get Started</Button>
        </div>

      <footer className={styles.footer}>
        <Image src="/images/logo2.svg" alt="logo" width={100} height={40} />

        <div className={styles.footerText}>
          <p className={styles.footerTitle}>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div className={styles.footerText}>
          <p className={styles.footerTitle}>Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className={styles.footerText}>
          <p className={styles.footerTitle}>Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <div >
          <Facebook color="white" size={40} className={styles.footerIcons} />
          <Twitter color="white" size={40} className={styles.footerIcons}/>
          <Pinterest color="white" size={40} className={styles.footerIcons}/>
          <Instagram color="white" size={40} className={styles.footerIcons}/>
        </div>





        </div>

      </footer>
      </div>

    </>
  );
}
