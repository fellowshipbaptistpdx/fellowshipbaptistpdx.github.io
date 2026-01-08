import React from 'react'

export default function App() {
  return (
    <div>
      <header>
        <h1>Fellowship Missionary Baptist Church</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>Welcome</h2>
          <p>We are a loving, Christ-centered community in Portland, Oregon, dedicated to worship, service, and spiritual growth. Join us as we seek to follow Jesus and serve our neighbors.</p>
        </section>
        <section id="services">
          <h2>Service Times</h2>
          <ul>
            <li>Sunday School: 8:30 AM bi-weekly</li>
            <li>Sunday Worship: 10:00 AM</li>
            <li>Wednesday Night Prayer (Video Conference Call): 7:00 PM bi-weekly</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:info@fellowshipbaptistpdx.org">info@fellowshipbaptistpdx.org</a></p>
          <p>Address: 4009 N Missouri Ave, Portland, OR 97227</p>
          <p>Phone: (503) 249-0377</p>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Fellowship Missionary Baptist Church. All rights reserved.
      </footer>
    </div>
  )
}
