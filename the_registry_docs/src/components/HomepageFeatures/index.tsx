import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Intutive payments',
    Svg: require('@site/static/img/r_logo.svg').default,
    description: (
      <>
        PayString makes it easy to manage your crypto addresses and make payments
      </>
    ),
  },
  {
    title: 'All in One',
    Svg: require('@site/static/img/r_logo.svg').default,
    description: (
      <>
        Put all your blockchain addresses in one paystring.
      </>
    ),
  },
  {
    title: 'Powered by Internet Computer',
    Svg: require('@site/static/img/r_logo.svg').default,
    description: (
      <>
        Entire protocol lives on internet computer. Paystring info can be fetched via http by any dapp
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
