import React from "react"
import styled from "styled-components";

const DEFAULT_PLACEHOLDER_IMAGE =
	"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

type Props = {
	Poster: string
	Title: string
	Year: string
	className?: string
}

const Movie: React.FC<Props> = (movie) => {
	const poster =
		movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
	return (
		<div className={movie.className}>
			<h2>{movie.Title}</h2>
			<div>
				<img
					width="200"
					alt={`The movie titled: ${movie.Title}`}
					src={poster}
				/>
			</div>
			<p>({movie.Year})</p>
		</div>
	);
};

export default styled(Movie)`
padding: 5px 25px 10px 25px;
max-width: 25%;
@media screen and (min-width: 694px) and (max-width: 915px) {
	max-width: 33%;
}
@media screen and (min-width: 652px) and (max-width: 693px) {
	max-width: 50%;
}
@media screen and (max-width: 651px) {
	max-width: 100%;
	margin: auto;
}
`