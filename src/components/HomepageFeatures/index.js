import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Introduction to Robotics",
    Svg: require("@site/static/img/icons/ros.svg").default,
    description: (
      <>
        Learn core robotics principles to form a strong foundation for humanoid systems.
      </>
    ),
  },
  {
    title: "Virtual Twins",
    Svg: require("@site/static/img/icons/simulation.svg").default,
    description: (
      <>
    Master digital twins and simulations to develop and test AI humanoid systems.
      </>
    ),
  },
  {
    title: "AI Powered Autonomy",
    Svg: require("@site/static/img/icons/brain.svg").default,
    description: (
      <>
        Discover how AI gives robots thinking, perception, and smart decision-making abilities.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
