import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import UnderHero from './components/UnderHero'

export default function App(){
  return (
    <div>
      <Header />
      <Hero />
      <UnderHero />
      <main className="site-main container">
        <section id="announcement" className="card notice">
          <h2>Seeking a Full-Time Pastor</h2>
          <p>Fellowship Missionary Baptist Church in Portland, OR is actively seeking a senior pastor whom God has prepared to lead, guide, and minister to our congregation and community.</p>
          <a className="btn" href="/web_docs/Pastor%20Application%20Form%20122425.pdf" download="Pastor Application Form 122425.pdf">Download Application</a>
          <p>Please download application, fill and send via email or physical mailbox:</p>
          <p>Email: <a href="mailto:info@fellowshipbaptistpdx.org">info@fellowshipbaptistpdx.org</a></p>
          <p>Address: 4009 N Missouri Ave, Portland, OR 97227</p>
        </section>
        <section id="about" className="card">
          <h2>Welcome</h2>
          <p>We are a loving, Christ-centered community in Portland, Oregon, dedicated to worship, service, and spiritual growth. Join us as we seek to follow Jesus and serve our neighbors.</p>
        </section>

        <section id="services" className="card">
          <h2>Service Times</h2>
          <ul>
            <li>Sunday School: 8:30 AM bi-weekly</li>
            <li>Sunday Worship: 10:00 AM</li>
            <li>Wednesday Night Prayer (Video Conference Call): 7:00 PM bi-weekly</li>
          </ul>
        </section>

        <section id="contact" className="card">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@fellowshipbaptistpdx.org">info@fellowshipbaptistpdx.org</a></p>
          <p>Address: 4009 N Missouri Ave, Portland, OR 97227</p>
          <p>Phone: (503) 249-0377</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
