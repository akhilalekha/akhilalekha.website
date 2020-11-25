import React from "react";
import Layout from "@theme/Layout";
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
				<h3>Skills</h3>
				<p>
					HTML 5, CSS 3, JavaScript, Bootstrap, React.js, Node.js, Mongoose,
					SQL, RESTful API
				</p>
				<h3>Projects and Certificates</h3>
				<h4>Projects</h4>
				<ul>
					<li>
						Recipe App : We can search recipes according to the ingredients. It
						consumes an API to get the data. It’s made with React.js on front
						end and Node on backend.
					</li>
					<li>
						Keeper App : Inspired by Google Keep. It's made with React.js and
						Material UI Icons.
					</li>
					<li>
						To-do list App : It's a simple to-do list. The front end version is
						made with React.js and the fullstack one with Node.js, EJS and
						MongoDB.
					</li>
					<li>
						The Simon Game : Mini game involving following a pattern using pure
						JavaScript
					</li>
					<p>Drum Kit Game: Mini drum music game made with pure JavaScript</p>
				</ul>
				<h4>Certificates</h4>
				<h5>Cognizant</h5>
				<ul>
					<li>Cleared internal certification exams for Selenium, SQL</li>
					<li>
						Completed internal training and certification exams for Software
						Testing Fundamentals, UFT
					</li>
				</ul>
				<h5>Infosys Campus Connect</h5>
				<p>
					Attended training under Infosys Campus Connect Business English
					Program - Graded B+
				</p>
				<h3>Education</h3>
				<h4>Mahatma Gandhi University Kottayam</h4>
				<em>2013 - 2017 | Ernakulam, Kerala</em>
				<ul>
					<li>B.Tech in Computer Science and Engineering</li>
					<li>First Class - CGPA: 7.01/10</li>
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
