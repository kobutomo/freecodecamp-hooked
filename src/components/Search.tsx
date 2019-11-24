import React, { useState, useCallback } from "react"
import styled from "styled-components"

type Props = {
	search: (searchValue: string) => void
	className?: string
}

const Search: React.FC<Props> = props => {
	const [searchValue, setSearchValue] = useState("")

	const handleSearchInputChanges = useCallback(e => {
		setSearchValue(e.target.value)
	}, [])

	const resetInputField = useCallback(() => {
		setSearchValue("")
	}, [])

	const callSearchFunction = useCallback(e => {
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	}, [props, searchValue, resetInputField])

	return (
		<form className={props.className}>
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
			/>
			<input onClick={callSearchFunction} type="submit" value="SEARCH" />
		</form>
	)
}

export default styled(Search)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
input[type="submit"] {
	padding: 5px;
	background-color: transparent;
	color: black;
	border: 1px solid black;
	width: 80px;
	margin-left: 5px;
	cursor: pointer;
}
input[type="submit"]:hover {
	background-color: #282c34;
	color: antiquewhite;
}
> input[type="text"]{
	width: 40%;
	min-width: 170px;
}
`