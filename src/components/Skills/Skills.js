import { useState, useEffect } from "react"
import styles from "./Skills.module.css"
import Container from "../Container/Container"
import colors from "../../colors"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useTextWidth } from "@imagemarker/use-text-width"
import { icons } from "./skillsIcons"

const Skills = () => {
	const values = ["All", "Frontend", "Backend", "Cloud", "Programming Languages", "IDEs", "Other Frameworks", "Other Software"]
	const skills = {
		frontend: [icons.javascript, icons.typescript, icons.html, icons.css, icons.react],
		backend: [icons.django, icons.mysql, icons.fastapi, icons.express],
		cloud: [icons.terraform, icons.aws],
		programmingLanguages: [icons.python, icons.java, icons.javascript, icons.typescript, icons.swift],
		IDEs: [icons.vscode, icons.androidstudio, icons.intellij],
		otherSoftware: [icons.git, icons.github, icons.gitlab, icons.figma, icons.adobexd, icons.photoshop],
		otherFrameworks: [icons.pytorch, icons.pyspark],
	}
	const [currentSkills, setCurrentSkills] = useState([])
	const [selectedFilter, setSelectedFilter] = useState("All")
	const selectorWidth = useTextWidth({ text: selectedFilter, font: `1.25rem Inter` }) + 10

	const selectSkillsFromFilter = (filter) => {
		switch (filter) {
			case "Frontend":
				return skills.frontend
			case "Backend":
				return skills.backend
			case "Cloud":
				return skills.cloud
			case "Other Frameworks":
				return skills.otherFrameworks
			case "Programming Languages":
				return skills.programmingLanguages
			case "IDEs":
				return skills.IDEs
			case "Other Software":
				return skills.otherSoftware
			default:
				return getAllSkills()
		}
	}

	const getAllSkills = () => {
		let skillsArray = []
		for (const [key, list] of Object.entries(skills)) {
			for (const skill of list) {
				if (!skillsArray.includes(skill)) skillsArray.push(skill)
			}
		}

		return skillsArray
	}

	const changeFilter = (newFilter) => {
		const newSkills = selectSkillsFromFilter(newFilter)
		setSelectedFilter(newFilter)
		setCurrentSkills(newSkills)
	}

	useEffect(() => {
		setCurrentSkills(getAllSkills())
	}, [])
	return (
		<Container title="Skills.">
			<AnimateSharedLayout>
				<div className={styles.picker}>
					{values.map((value) => {
						return (
							<>
								<motion.div className={styles.pickerElement} onClick={() => changeFilter(value)}>
									{selectedFilter === value && (
										<motion.div layoutId="filter" className={styles.pickerElementBackground} style={{ width: selectorWidth, backgroundColor: colors.backgroundLight }}></motion.div>
									)}
									<p>{value}</p>
								</motion.div>
							</>
						)
					})}
				</div>
			</AnimateSharedLayout>
			<div className={styles.container} style={{ backgroundColor: colors.backgroundLight }}>
				{currentSkills.map((value, index) => {
					return (
						<div className={styles.skillsIconContainer}>
							{/* Add "colored" for color icons */}
							<i className={`${value.icon} colored ${styles.skillsIcon}`}></i>
							<p className={styles.skillTitle}>{value.name}</p>
						</div>
					)
				})}
			</div>
		</Container>
	)
}
export default Skills
