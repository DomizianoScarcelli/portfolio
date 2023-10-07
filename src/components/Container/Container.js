import React from "react"
import styles from "./Container.module.css"
import colors from "../../colors"
const Container = (props) => {
	return (
		<div className={styles.container} id={`${props.title.toLowerCase()}`} style={{ backgroundColor: colors.foregroundLight, color: colors.background }}>
			<div className={styles.title}>{props.title}</div>
			<div className={props.grid && styles.innerContainer}>{props.children}</div>
		</div>
	)
}

export default Container
