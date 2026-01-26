import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const katex = require('katex');

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Robotics theory',
    Svg: require('@site/static/img/FRC.svg').default,
    description: (
      <>
        This documentation covers the fundamentals of robotics and all of the
        theory behind a robot's general design and basics.
      </>
    ),
  },
  {
    title: 'Programming',
    Svg: require('@site/static/img/WPI.svg').default,
    description: (
      <>
        Throughout this documentation we will dive deep into code structure and
        its applications in <code>Java</code>, commonly used by most FRC teams.
      </>
    ),
  },
  {
    title: 'Robot Vision',
    Svg: require('@site/static/img/Photon.svg').default,
    description: (
      <>
        All the basics about robot vision, including camera calibration and
        robot localization, will be explored in this documentation.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
