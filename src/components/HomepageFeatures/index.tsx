import type {ReactNode} from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Script Reference',
    description: (
      <>
        Browse detailed documentation for every LuaTools script, including
        parameters, return values, and usage examples.
      </>
    ),
  },
  {
    title: 'API Guides',
    description: (
      <>
        Learn how to interact with LuaTools APIs, hook into events, and build
        on top of existing functionality with ease.
      </>
    ),
  },
  {
    title: 'Community Contributed',
    description: (
      <>
        This documentation is maintained by the community. Found something
        missing or wrong? Contributions are always welcome.
      </>
    ),
  },
];

function Feature({title, description, index}: FeatureItem & { index: number }) {
  return (
    <motion.div
      className={styles.featureCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </motion.div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} index={idx} />
        ))}
      </div>
    </section>
  );
}
