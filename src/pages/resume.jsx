import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./resume.module.css";

function Resume() {
	return (
		<Layout title="Resume">
			<div className={styles.outercontainer}>
				<h2>Resume</h2>
				<h3>Summary</h3>
				<p>
					I’m a software engineer who’s into front-end development. I always had
					a good eye for detail and designing. I’m a forward-thinking and
					resourceful professional with diligent mind set who can quickly learn
					and master new technologies.
				</p>

				<h3>Skills</h3>
				<h4>Technologies</h4>
				<p>
					HTML 5, CSS 3, JavaScript, ES6, Bootstrap, React.js, Node.js,
					Express.js, MongoDB, Mongoose, SQL, RESTful APIs
				</p>
				<h4>Tools</h4>
				<p>
					Version control: Git, Package managers: Npm, Yarn, Deploy Services:
					Heroku, Netlify, GitHub, IDE: VS code
				</p>
				<h3>Projects, Certificates and Courses</h3>
				<h4>
					<Link to="/showcase">Projects</Link>
				</h4>
				<ul>
					<li>
						Recipe App: React.js | React Hooks | APIs | JavaScript | CSS <br />
						We can search recipes according to the ingredients. It consumes an
						API to get the data. It’s made with React.js on front end and Node
						on backend.
					</li>
					<li>
						Keeper App (Front end version): React.js | React Hooks | JavaScript
						| CSS <br />
						Inspired by Google Keep. It's made with React.js and Material UI
						Icons.
					</li>
					<li>
						To-do list App: React.js | JavaScript | Node.js | EJS | MongoDB |
						Mongoose | CSS <br />
						It's a simple to-do list. The front end version is made with
						React.js and the fullstack one with Node.js, EJS and MongoDB.
					</li>
					<li>
						The Simon Game: Vanilla JavaScript | HTML | CSS <br />
						Mini game involving following a pattern using vanilla JavaScript
					</li>
					<li>
						Drum Kit Game: Vanilla JavaScript | HTML | CSS <br />
						Mini drum music game made with vanilla JavaScript
					</li>
				</ul>
				<h4>Certificates and Courses</h4>
				<li>
					<ul>Udemy: Web Development Bootcamp</ul>
					<ul>Udemy: Node with React</ul>
					<ul>LinkedIn: Programming foundations : Algorithms</ul>
					<ul>
						Infosys Campus Connect: Attended training under Infosys Campus
						Connect Business English Program - Graded B+
					</ul>
				</li>
				<h3>Education</h3>
				<h4>Mahatma Gandhi University Kottayam</h4>
				<em>2013 - 2017 | Ernakulam, Kerala</em>
				<ul>
					<li>B.Tech in Computer Science and Engineering</li>
					<li>First Class - CGPA: 7.01/10 (First Class)</li>
				</ul>
				<h4>St. Antony’s HSS</h4>
				<em>2011 - 2013 | Puthukkad, Kerala</em>
				<ul>
					<li>Class 12</li>
					<li>Percentage: 92%</li>
				</ul>
				<h4>Sreekrishna HSS</h4>
				<em>2010 - 2011 | Anandapuram, Kerala</em>
				<ul>
					<li>Class 10</li>
					<li>Percentage: 94%</li>
				</ul>
				<h3>Professional Experience</h3>
				<h4>Programmar Analyst | Cognizant</h4>
				<em>Apr 2018 - Sep 2019 | Kochi, Kerala</em>
				<ul>
					<li>
						Wrote and optimized test cases to maximize the success of functional
						software testing with consistent, thorough approaches
					</li>
					<li>Created automated test scripts using Selenium</li>
					<li>
						Identified and tracked defects and supported developers in resolving
						problems by completing additional tests
					</li>
					<li>
						Operated under Agile framework to complete releases in a timely
						manner
					</li>
				</ul>
				<h3>Awards and Achievements</h3>
				<ul>
					<li>
						Attained academic excellence award for scoring 92% in Class 12 board
						examination, 2013
					</li>
					<li>
						Attained SSLC excellence award for scoring 94% in Class 10 board
						examination, 2011
					</li>
					<li>
						Attained Second prize in Hindi Versification in Class 11 in school
						level competition, 2011
					</li>
					<li>
						Attained Third prize with A grade in Group Dance – Sub district
						level in Kerala School Kalolsavam, 2008
					</li>
				</ul>
			</div>
		</Layout>
	);
}

export default Resume;
