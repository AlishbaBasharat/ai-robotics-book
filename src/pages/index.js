import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroImageContent}>
     <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={styles.bookVisual}
  >
    
    <rect x="12" y="8" width="40" height="48" rx="2" ry="2" fill="#f2e6d9" stroke="#000" strokeWidth="2"/>
    
 
    <line x1="16" y1="12" x2="48" y2="12" stroke="#c2b280" strokeWidth="1"/>
    <line x1="16" y1="20" x2="48" y2="20" stroke="#c2b280" strokeWidth="1"/>
    <line x1="16" y1="28" x2="48" y2="28" stroke="#c2b280" strokeWidth="1"/>
    <line x1="16" y1="36" x2="48" y2="36" stroke="#c2b280" strokeWidth="1"/>
    <line x1="16" y1="44" x2="48" y2="44" stroke="#c2b280" strokeWidth="1"/>
    <line x1="16" y1="52" x2="48" y2="52" stroke="#c2b280" strokeWidth="1"/>
    

    <line x1="12" y1="8" x2="12" y2="56" stroke="#000" strokeWidth="2"/>
  </svg>
    
    
    
  
    
   
        </div>
        <div className={styles.heroTextContent}>
          <h1 className={styles.bookTitle}> AI Humanoid Robotics Book</h1>
          <p className={styles.bookDescription}>
        Immerse yourself in the field of embodied AI and humanoid robotics. Master ROS2 integration, create high-fidelity digital twins, and engineer intelligent control systems for next-generation robotic platforms.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/module-1-ros2/ros2-basics"
            >
             Being Exploring →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
