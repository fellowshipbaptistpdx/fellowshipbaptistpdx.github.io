import React, { useState } from 'react'

export default function Header(){
  const [open,setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <h1>Fellowship Missionary Baptist Church</h1>
        </div>
        <nav className={"site-nav" + (open? ' open' : '')} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  )
}
