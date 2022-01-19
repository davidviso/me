import React, { useState, useEffect } from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCompass } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

  const [scrollTo, setScrollTo] = useState("top")
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const anchor = document.querySelector(`#${scrollTo}`)
    anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    setShowMenu(false)
  }, [scrollTo])



  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const testScroll = (e) => {
      window.pageYOffset > 100 ? setScrolled(true) : setScrolled(false)
    }
    testScroll()
    window.addEventListener("scroll", testScroll)
    return () => {
      window.removeEventListener("scroll", testScroll)
    }

  }, [])



  const Link = ({ title, id }) => {
    return (
      <div className={styles.link} onClick={() => setScrollTo(id)}>{title}</div>
    )
  }

  const links = [
    { title: "About Me", id: "about-me" },
    { title: "Experience", id: "experience" },
    { title: "Interests", id: "interests " }
    // {title: "About Me", id="about-me"},
  ]

  const Section = ({ id, title, content }) => {
    return (
      <div id={id} className={styles.section}>
        <h1>
          {title}
        </h1>
        <div>
          {content}
        </div>
      </div>
    )
  }


  const AboutMe = () => {

    const images = [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
      "/7.jpg",
    ]

    const Item = ({ source }) => {

      return (
        <Carousel.Item>
          <div>
            image
            <img width="100" height="100" src={source} key={source} />
          </div>
        </Carousel.Item>
      )
    }

    return (
      <div className={styles.about_me} style={{ display: "flex" }}>
        <Row>
          <Col>
            Once when I was six years old I saw a magnificent picture in a book, called True
            Stories from Nature, about the primeval forest. It was a picture of a boa constrictor
            in the act of swallowing an animal. Here is a copy of the drawing.
            In the book it said: "Boa constrictors swallow their prey whole, without chewing
            it. After that they are not able to move, and they sleep through the six months that
            they need for digestion.'
          </Col>
          <Col md={5} sm={12}>
            <Carousel variant="dark" style={{ width: "200px", height: "100%" }}>

              {images.map((image) => (
                <Carousel.Item>
                  <div style={{ height: "250px", backgroundSize: "cover", backgroundImage: `url(${image})`, padding: "12px" }}>
                    {/* <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={image} /> */}
                  </div>
                </Carousel.Item>))}
            </Carousel>
          </Col></Row>
      </div>
    )
  }
  const sections = [
    {
      title: "About Me", id: "about-me", content: <AboutMe />
    },
    {
      title: "Experience", id: "experience", content: `But it happened that after walking for a long time through sand, and rocks, and
    snow, the little prince at last came upon a road. And all roads lead to the abodes of
    men.
    "Good morning," he said.
    He was standing before a garden, all a−bloom with roses.
    "Good morning," said the roses.
    The little prince gazed at them. They all looked like his flower.
    "Who are you?" he demanded, thunderstruck.
    "We are roses," the roses said.
    And he was overcome with sadness. His flower had told him that she was the only
    one of her kind in all the universe. And here were five thousand of them, all alike,
    in one single garden!` },
    {
      title: "Interests", id: "interests", content: `But it happened that after walking for a long time through sand, and rocks, and
    snow, the little prince at last came upon a road. And all roads lead to the abodes of
    men.
    "Good morning," he said.
    He was standing before a garden, all a−bloom with roses.
    "Good morning," said the roses.
    The little prince gazed at them. They all looked like his flower.
    "Who are you?" he demanded, thunderstruck.
    "We are roses," the roses said.
    And he was overcome with sadness. His flower had told him that she was the only
    one of her kind in all the universe. And here were five thousand of them, all alike,
    in one single garden!
    But it happened that after walking for a long time through sand, and rocks, and
    snow, the little prince at last came upon a road. And all roads lead to the abodes of
    men.
    "Good morning," he said.
    He was standing before a garden, all a−bloom with roses.
    "Good morning," said the roses.
    The little prince gazed at them. They all looked like his flower.
    "Who are you?" he demanded, thunderstruck.
    "We are roses," the roses said.
    And he was overcome with sadness. His flower had told him that she was the only
    one of her kind in all the universe. And here were five thousand of them, all alike,
    in one single garden!
    ` },
  ]

  return (
    <div className={styles.body} onClick={() => console.log(window.pageYOffset)}>
      <Head>
        <title>David Visotsky </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Row id="top" style={{ marginLeft: "0", justifyContent: "center", padding: "0", overflow: "hidden", height: "100%" }}>
        {/* 
            <div className={`${styles.banner} ${showMenu ? styles.show : ""}`}>
              <div className={styles.menu}>
                {links.map((l) => (
                  <Link key={l.id} title={l.title} id={l.id} />
                ))}
                <div style={{ padding: "20px" }} onClick={() => setShowMenu(false)}> <FontAwesomeIcon size="1x" icon={faTimes} />
                </div>
              </div>
            </div> */}

        {/* <Col lg={2} sm={3}>

              <h1 className={styles.title}>
                David Visotsky
              </h1>
              <h2>Software Engineer</h2>

            </Col> */}


        <Col>
          <Row>
            <Col>
              <Row className={`${styles.title} ${scrolled && styles.scrolled}`} >
                <Row style={{ padding: "0", maxWidth: "2360px", justifyContent: "center", alignItems: "center" }} >
                  <Col style={{ display: "flex", alignItems: "center" }} lg={2} className={styles.profile}>
                  </Col>
                  <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1 className={styles.name}>
                      David Visotsky
                    </h1>
                    <div className={styles.details}>
                      <div>visotskydavid@gmail.com </div>
                      <div style={{ display: "flex" }}>
                        <a className={styles.link} href="https://github.com/dvisotsky" target="_blank" ><FontAwesomeIcon icon={faGithub} /> Github</a><a href="https://www.instagram.com/david_heights/" target="_blank" className={styles.link}> <FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                      </div></div>
                  </Col>
                  <Col style={{ alignSelf: "flex-end" }}>
                    <div className={styles.nav}>
                      {links.map((link, i) => (<><div key={link.id} className={styles.link}>{link.title}</div>{i + 1 !== links.length && <div style={{ padding: "2px", color: "var(--blue)" }}>|</div>}</>))}
                    </div>
                  </Col>
                </Row>
              </Row>

              <Row style={{ justifyContent: "center", marginTop: "200px" }}>
                <Col md={8} sm={10} className={styles.text}>
                  Hello, thanks for stopping by.<br />
                  I'm David, a software engineer hailing from Charlotte, North Carolina.
                  I'm a web designer & front‑end developer focused on crafting clean & user‑friendly experiences,
                  I am passionate about building excellent software that improves the lives of those around me.
                </Col></Row>
            </Col>
          </Row>
          {sections.map((s, i) => (
            <Row key={i} style={{ justifyContent: "center" }}>
              <Col md={8} sm={10}><Section id={s.id} title={s.title} />{s.content}</Col>

            </Row>
          ))}
        </Col>
      </Row>



      <footer style={{ background: "var(--bg2)", marginTop: "40px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={8} md={10} className={styles.footer}>
            <div >
              <div>visotskydavid@gmail.com </div>
              <a className={styles.link} href="https://github.com/dvisotsky" target="_blank" ><FontAwesomeIcon icon={faGithub} /> Github</a>
              <a href="https://www.instagram.com/david_heights/" target="_blank" className={styles.link}> <FontAwesomeIcon icon={faInstagram} /> Instagram</a>
            </div>
            <div className={styles.nav}>
              {links.map((link, i) => (<><div key={link.id} className={styles.link}>{link.title}</div></>))}
            </div>
          </Col>
        </Row>

      </footer>
    </div >
  )
}
