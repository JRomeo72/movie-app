import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import Button from '../button/Button';
import './movie-card.scss';


const MovieCard = props => {

	const item = props.item;
	const link = '/' + category[props.category] + '/' + item.id;
	const bg = apiConfig.w500Image(item.poster_path || item.background_path);

  return (
	<Link to={link}>
		<div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
			<Button>
				<i className="bx bx-play"></i>
			</Button>
		</div>
		<h4>{item.title || item.name}</h4>
	</Link>
  )
}

export default MovieCard