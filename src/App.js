import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Project/Project"
import Container from "./components/Container/Container"
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu"
import ContactForm from "./components/ContactForm/ContactForm"

export default function App() {
	return (
		<div class="center-horizontally">
			<div class="container center-vertically" id="topContainer">
				<div class="header">
					<div class="header__title">
						Domiziano.
						<div class="center-vertically">
							<HamburgerMenu />
						</div>
					</div>

					<Navbar />
					<div class="header__description">
						I'm a CS student from Italy. <br />I love web and mobile development.
					</div>
				</div>

				<Container title="Projects." titleColor="#ef6e64">
					<div class="contentContainer__body" id="contentContainer__body">
						<Project
							textColor="#2f2f2f"
							backgroundColor="#e9c46a"
							image="pathfinder-visualizer.svg"
							title="Pathfinder Visualizer"
							content="Web app that allows the user to select two  points and see the shortest path between them.
							The app is developed using p5.js"
						/>
						<Project
							textColor="#ffffff"
							backgroundColor="#717ECE"
							image="workout-tracker.jpg"
							title="Workout Tracker"
							content="Web app that allows the user to track their workout progress. The user can save also see the analytics for a selected period of time. The app is developed using the MERN stack."
						/>
						<Project
							textColor="#2f2f2f"
							backgroundColor="#a7a5c6"
							image="workout-tracker.jpg"
							title="GeneroCity"
							content="Developed during my internship at University of La Sapienza, it's a smart parking native Android app that allows the users to swap parking spots.
"
						/>
						<Project
							textColor="#ffffff"
							backgroundColor="#2a9d8f"
							image="ascii-editor-gui.svg"
							title="ASCII Editor GUI"
							content="Java GUI app using the Swift library that allows the user to edit an image made of ASCII text using his mouse. The app is based on Trystan's Ascii Panel."
						/>
					</div>
					<div class="expandArrow center-horizontally">
						<img src="./res/expand_more_black_24dp.svg" alt="" class="expandArrow__image" id="expandArrow" />
					</div>
				</Container>

				<Container title="About." titleColor="#ef6e64">
					<div class="contentContainer__description">
						I'm a 22 years old Software Engineer passionate about web development. I've got my Bachelor's Degree in March 2022. I'm constantly learning new tools and technologies to
						develop more useful and good looking web apps.
					</div>
				</Container>

				<Container title="Contact me." titleColor="#ef6e64">
					<ContactForm />
				</Container>

				<a class="backToTop center-horizontally" id="backToTopButton" href="#topContainer">
					<img src="../public/res/arrow_upward_white_24dp.svg" />
				</a>
			</div>
		</div>
	)
}
