import React from "react"
import styled from "styled-components"

type Props = {
	text: string
	className?: string
}

const Header: React.FC<Props> = props => {
	return (
		<header className={props.className}>
			<h2>{props.text}</h2>
		</header>
	)
}

export default styled(Header)`
background-color: #282c34;
height: 70px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
padding: 20px;
cursor: pointer;
h2 {
	margin: 0;
}
`