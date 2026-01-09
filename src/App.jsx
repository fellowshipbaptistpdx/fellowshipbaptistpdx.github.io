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
          <a className="btn" href="/web_docs/Pastor%20Application%20Form%20122425.pdf" download="Pastor Application Form 122425.pdf">Download Application Packet</a>
          <p>Please download application, fill and send via email or physical mailbox:</p>
          <p>Email: <a href="mailto:info@fellowshipbaptistpdx.org">info@fellowshipbaptistpdx.org</a></p>
          <p>Address: 4009 N Missouri Ave, Portland, OR 97227</p>
        </section>
        <section id="welcome" className="card">
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

        <section id="history" className="card">
          <h2>Historical Highlights</h2>
          <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
            <div style={{flex: 1}}>
              <p>In October of 1987, Reverend Johnny Pack IV was led by the Holy Spirit to organize a church. He had never taken on a task like this one before and it was a bit overwhelming. Being obedient he did as he was led and thus was born the Fellowship Missionary Baptist Church, which was so named by Reverend Pack.</p>

              <p>It was October 14, 1987 when Reverend Pack and 64 persons were meeting in a Masonic Lodge Hall at 635 N. Killingsworth Court for a Prayer Meeting when he received the vision to organize a church. All that were present united with the new church at that time. And Pastor Pack began his tenure without a salary.</p>

              <p>Pastor Pack organized the church with various ministries that would meet the mandate that was before us. The first choir rehearsal and ushers meeting was held on October 16, 1987 where 40 persons were in attendance.</p>
            </div>
            <img src="/web_graphics/fmbc outdoor.jpg" alt="Fellowship Missionary Baptist Church" style={{maxWidth: '500px', height: 'auto', borderRadius: '8px', flexShrink: 0}} />
          </div>

          <p>The first official Worship Service of the newly organized Fellowship Missionary Baptist Church was on Sunday, October 18, 1987 with over 200 persons in attendance. Fifty-five more people united with the church at this service.</p>

          <p>On November 1, 1987 our First Evening Worship Service was held. First Baptism service was held at the Morning Star Baptist Church with Communion service following. Baptist Training Union ministry also began at that time. The Mother's Ministry sponsored a Harvest Tea and we had our First Thanksgiving Service and our first Fellowship Dinner that same month.</p>

          <p>The church was officially dedicated in December of 1987. We held services for the dedication December 9-13 with Dr Joe S. Hardie and the St. Mark Baptist Church closing out our dedication service.</p>

          <p>Through much prayer and searching, the Lord led us to 4009 North Missouri Avenue —our present location. Our first service held in our new location was held on December 31, 1989 for our Annual New Year's Eve Watch Night Service.</p>

          <p>On January 7, 1990 we marched to our current location from the Lodge Hall where our humble beginnings began. As we marched the Portland Police escorted us, some were in cars, some on foot and others were driven in a horse drawn carriage. The church family fellowshipped together with a Continental Breakfast and after the 11 AM Worship Service the church family dined together!</p>
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
