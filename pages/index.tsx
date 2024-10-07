import type { NextPage } from "next";
import Head from "next/head";
import LangMarquee from "../components/LangMarquee";
import Navbar from "../components/Navbar";
import contactData from "../data/contact";
import styles from "../styles/Home.module.css";
import {EmblaCarousel} from "../components/Carousel";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dyllon</title>
      </Head>

      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>hello, </h1>
            <h1 className={styles.title}>i&apos;m dyllon</h1>
          </div>

          <p className={styles.subtitle}>im a software engineer in singapore</p>

          <p className={styles.description}>
            i build neat things in these languages:
          </p>

          {/* <p> todo: add languages ticker here</p>
           */}

          {/*<LangMarquee />*/}

          <EmblaCarousel />

          {/* <p className={styles.description}>here are a few of my projects</p>
          <p> todo: add projects here</p> */}

          <div className={styles.contacts}>
            {Object.entries(contactData).map(([key, value], index) => (
              <>
                <a
                  className={styles.contactItem}
                  key={key}
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value.displayText}
                </a>
                {index < Object.entries(contactData).length - 1 && <p>•</p>}
              </>
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <small>&copy; Copyright 2024 Dyllon Gunawardhana</small>
        </footer>
      </div>
    </>
  );
};

export default Home;
