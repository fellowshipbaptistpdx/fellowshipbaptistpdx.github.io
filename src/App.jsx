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
          <a className="btn" href="/web_docs/FMBC%20Pastoral%20Application%20Packet%20-%20Jan%202026.pdf" download="FMBC Pastoral Application Packet - Jan 2026.pdf">Download Application Packet</a>
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
          <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 300px', minWidth: 0}}>
              <p>It was October 14, 1987, when Reverend Pack and 64 persons were meeting in a Masonic Lodge Hall at 635 N. Killingsworth Ct. for a Prayer Meeting, when Reverend Johnny Pack IV received a vision and was led by the Holy Spirit to organize a church. Being obedient, he did as he was led and thus was born the Fellowship Missionary Baptist Church, as so given by Reverend Pack. All who were present united with the new church at that time. And Pastor Pack began his tenure without a salary.</p>

              <p>Pastor Pack organized the church with various ministries that would meet the mandate that was before us. The first choir rehearsal and ushers meeting was held on October 16, 1987 where 40 persons were in attendance.</p>
            </div>
            <img src="/web_graphics/fmbc outdoor.jpg" alt="Fellowship Missionary Baptist Church" style={{flex: '0 1 400px', maxWidth: '100%', width: '400px', height: 'auto', borderRadius: '8px', objectFit: 'cover'}} />
          </div>

          <p>The first official Worship Service of the newly organized Fellowship Missionary Baptist Church was on Sunday, October 18, 1987 with over 200 persons in attendance. Fifty-five more people united with the church at this service.</p>

          <p>On November 1, 1987 our First Evening Worship Service was held. First Baptism service was held at the Morning Star Baptist Church with Communion service following. Baptist Training Union ministry also began at that time. The Mother's Ministry sponsored a Harvest Tea and we had our First Thanksgiving Service and our first Fellowship Dinner that same month.</p>

          <p>The church was officially dedicated in December of 1987. We held services for the dedication December 9-13 with Dr Joe S. Hardie and the St. Mark Baptist Church closing out our dedication service.</p>

          <p>Through much prayer and searching, the Lord led us to 4009 North Missouri Avenue —our present location. Our first service held in our new location was held on December 31, 1989 for our Annual New Year's Eve Watch Night Service.</p>

          <p>On January 7, 1990 we marched to our current location from the Lodge Hall where our humble beginnings began. As we marched the Portland Police escorted us, some were in cars, some on foot and others were driven in a horse drawn carriage. The church family fellowshipped together with a Continental Breakfast and after the 11 AM Worship Service the church family dined together.</p>

          <p>With the aid of the Holy Spirit, Fellowship has continued to thrive, adding many ministries and members over the past 38 years. We have served Christ and have been a beacon of light and hope to our community.</p>

          <p>Reverend Johnny Pack IV retired as Pastor of Fellowship in October 2020 due to his health. We are grateful to Reverend Pack for his 33 years as Founder, Organizer, and Leader of the 'Ship'.</p>

          <p>Our Church has continued our Christian journey with God's help and direction. We have had our difficulties, but we remain faithful in doing the Lord's work as He continues to bless us.</p>

          <p>We are a small congregation, few in number, empowered by God to welcome all, love all, and perform the Great Commission (<a href="https://www.biblegateway.com/passage/?search=Matthew%2028%3A16-20&version=NIV" target="_blank" rel="noopener noreferrer">Matthew 28:16-20</a>).</p>

          <p>We believe and trust that God has a blessing and plan for Fellowship as we seek God's guidance and direction, welcoming a new leader who is called by God and led by the Holy Spirit. This leader will usher in a new season where God will get all the Glory, all the Honor, and all the Praise. The SHIP continues to sail…</p>
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
