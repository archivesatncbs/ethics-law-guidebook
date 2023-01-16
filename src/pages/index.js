import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>


        {/* <p className='doc__description '> Made possible with support from the following organizations</p> */}

        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Archives at NCBS">
      <HomepageHeader />
      <main>
        
          <section className='artwork'>
          </section>
          
          <p className='homepageBody'>The project, <em>Archives, Ethics and the Law in India</em>, anchored by the Archives at NCBS, aims to learn from and train archivists and users of archives in India to respond to questions of archives, copyright, ownership and access, and the public’s rights to information and privacy. Click the links in the menu on top to navigate the guidebook or download the PDF and share feedback on the <a href='https://bit.ly/archives-ethics-law-guidebook-feedback'>online form</a></p>
          
          <p className='featuresHead'> Supported by </p>
          

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
