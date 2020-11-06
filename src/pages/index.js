import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./style.module.css";

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Home`}
			description="This is the personal portfolio website of Akhila C R"
		>
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<img
						className={styles["working-img"]}
						src="img/working_remotely.svg"
					></img>
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
				</div>
			</header>
			<main></main>
		</Layout>
	);
}

export default Home;
