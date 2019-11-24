import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import Header from "./components/Header"
import Movie from "./components/Movie"
import Search from "./components/Search"
import styled from 'styled-components'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"

type Movie = {
	Poster: string
	Title: string
	Year: string
}

type Props = {
	className?: string
}

const App: React.FC<Props> = props => {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([] as Movie[])
	const [errorMessage, setErrorMessage] = useState("")

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(MOVIE_API_URL)
			const json = await response.json()
			setMovies(json.Search)
			setLoading(false)
		}
		fetchMovies()
	}, [])

	const search = useCallback((searchValue: string) => {
		setLoading(true)
		setErrorMessage("")
		const fetchSearchResult = async () => {
			const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
			const json = await response.json()
			if (json.Response === "True") {
				setMovies(json.Search)
				setLoading(false)
				return
			}
			setErrorMessage(json.Error)
			setLoading(false)
		}
		fetchSearchResult()
	}, [])

	return (
		<div className={props.className}>
			<Header text="HOOKED" />
			<Search search={search} />
			<p className="App-intro">Sharing a few of our favourite movies</p>
			<div className="movies">
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : (
							movies.map((movie, index) => (
								<Movie key={`${index}-${movie.Title}`} Poster={movie.Poster} Title={movie.Title} Year={movie.Year} />
							))
						)}
			</div>
		</div>
	);
}

export default styled(App)`
.App-intro {
  font-size: large;
}
* {
  box-sizing: border-box;
}
.movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.errorMessage {
  margin: auto;
  font-weight: bold;
  color: rgb(161, 15, 15);
}
`
