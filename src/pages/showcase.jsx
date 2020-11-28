import React from "react";
import Layout from "@theme/Layout";
import styles from "./showcase.module.css";
import projects from "./_projects.js";

function Showcase() {
	return (
		<Layout title="Showcase">
			<div className={styles.outerContainer}>
				<div className={styles.showcaseCards}>
					{projects.map((project) => (
						<div className={styles.acard}>
							<img
								className={styles.cardImg}
								src={project.thumbnail}
								alt="project-thumbnail"
							></img>
							<div className={styles.cardLinks}>
								<a
									className={styles.link}
									href={project.live_link}
									target="_blank"
									rel="noopener"
								>
									Live
								</a>
								<a
									className={styles.link}
									href={project.github_link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</div>
							<div className={styles.cardDetails}>
								<div className={styles.cardTitle}>{project.title}</div>
								<div className={styles.cardDes}>{project.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Showcase;
