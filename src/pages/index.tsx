import type {ReactNode} from 'react';
import { useEffect, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion, useAnimation } from 'framer-motion';
import { useHistory } from '@docusaurus/router';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const controls = useAnimation();
  const history = useHistory();
  const animating = useRef(false);

  async function handleClick() {
    if (animating.current) return;
    animating.current = true;
    await controls.start({
      scale: [1, 1.15, 30],
      opacity: [1, 1, 0],
      transition: { duration: 0.55, ease: 'easeIn' },
    });
    history.push('/docs/luatools/faq/luatools-menu');
  }

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
        </motion.div>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.div animate={controls}>
            <motion.button
              className={styles.ctaButton}
              onClick={handleClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Browse the Docs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.body.classList.add('homepage');
    return () => document.body.classList.remove('homepage');
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Unofficial LuaTools documentation made by the amazing waike.">
      <HomepageHeader />
    </Layout>
  );
}
