import React from "react"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Navbar from "../Navbar/Navbar"
import styles from "./Header.module.css"
import { useState } from "react"

const Header = () => {
	const [isActive, setActive] = useState(false)

	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<div className={styles.title}>
					Domiziano.
					<div className={styles.iconContainer}>
						<a className={styles.linkedin} href="https://www.linkedin.com/in/domiziano-scarcelli/" target="_blank" rel="noreferrer">
							{" "}
						</a>
						<a className={styles.github} href="https://github.com/DomizianoScarcelli" target="_blank" rel="noreferrer">
							{" "}
						</a>
						<a className={styles.resume} href="https://github.com/DomizianoScarcelli/portfolio/raw/develop/public/documents/resume.pdf">
							{" "}
						</a>
					</div>
				</div>

				<HamburgerMenu
					isActive={isActive}
					toggleActive={() => {
						setActive(!isActive)
					}}
				/>
			</div>

			<Navbar isActive={isActive} />
			<div className={styles.description}>
				I'm a Software Engineer from Italy. <br />I love web and mobile development.
			</div>
		</div>
	)
}

export default Header
