import React from "react";
import Layout from "@theme/Layout";
import styles from "./showcase.module.css";
import projects from "./_projects.js";

function Showcase() {
	return (
		<Layout title="Showcase">
			<div className={styles["outer-conttainer"]}>
				<h1 className={styles["h1"]}>Showcase</h1>
				<div className={styles["showcase-cards"]}>
					{projects.map((project) => (
						<div className={styles["acard"]}>
							<img className={styles["card-img"]} src={project.thumbnail}></img>
							<div className={styles["card-links"]}>
								<div>
									<a
										className={styles["link"]}
										href={project.live_link}
										target="_blank"
									>
										<img
											className=""
											src="../static/img/link-solid.svg"
											height="20px"
											width="20px"
										/>
										Live
									</a>
								</div>
								<div>
									<a
										className={styles["link"]}
										href={project.github_link}
										target="_blank"
									>
										<img
											className=""
											src="../static/img/code-solid.svg"
											height="20px"
											width="20px"
										/>
										Code
									</a>
								</div>
							</div>
							<div className={styles["card-details"]}>
								<div className={styles["card-title"]}>{project.title}</div>
								<div className={styles["card-des"]}>{project.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Showcase;
