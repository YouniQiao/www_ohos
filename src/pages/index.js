import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

import PickVersion from '../components/PickVersion'
import styles from './index.module.css'

function Feature({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', styles.feature, reverse && styles.featureReverse)}>
      <div className="col col--6 text--center">
        <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />
      </div>
      <div className={clsx('col col--6', styles.featureContent)}>
        <div>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <main>
        <div className="hero">
          <div className="container text--center">
            <div className={styles.heroLogoWrapper}>
              <img className={styles.heroLogo} src={useBaseUrl('img/logos/logo-mini.svg')} alt="Chaos Mesh" />
            </div>
            <h1 className={clsx('hero__title', styles.heroTitle)}>Play OpenHarmony</h1>
            <p className="hero__subtitle">
              <Translate id="siteConfig.tagline">An Awesome Demo for OpenHarmony App Developing。</Translate>
            </p>
          </div>
        </div>

        <div className="hero-divider" />

        <div className="hero">
          <div className="container text--center">
            <h2 className="hero__subtitle">
              <Translate id="home.quickstart">Get Demo by Git</Translate>
            </h2>
            <PickVersion>git clone git@gitee.com:openharmony-cool/awesome-openharmony-demo.git</PickVersion>
          </div>
        </div>

      
      </main>
    </Layout>
  )
}

export default Home
