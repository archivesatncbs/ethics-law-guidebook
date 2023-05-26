import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [


  {
    title: ' ',
    Svg: require('@site/static/img/logomark_archives_ncbs.svg').default,
    imglink: 'https://archives.ncbs.res.in/',
    description: (
      <>

      </>
    ),
  },

  {
    title: ' ',
    Svg: require('@site/static/img/logo_ica_mark.svg').default,
        imglink: 'https://www.ica.org/en',

    description: (
      <>

      </>
    ),
  },

  {
    title: ' ',
    Svg: require('@site/static/img/logo_ncbs.svg').default,
        imglink: 'https://www.ncbs.res.in/',

    description: (
      <>

      </>
    ),
  },

  {
    title: ' ',
    Svg: require('@site/static/img/logo-maf.svg').default,
      imglink: 'https://www.milli.link/',

    description: (
      <>


      </>
    ),
  },


];

function Feature({Svg, title, description, imglink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={imglink}>
            <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
