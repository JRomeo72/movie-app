import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';
import MovieSearch from './MovieSearch';
import { OutlineButton } from '../button/Button';
import './movie-grid.scss';

const MovieGrid = props => {

	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const { keyword } = useParams();

	const getData = async (param1, param2) => {
		let response = null;

			if(keyword === undefined) {
				const params = param1;

				switch (props.category) {
					case category.movie:
						return response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
						break;
					default:
						return response = await tmdbApi.getTvList(tvType.popular, {params});
						break;
				}
			} else {
				const params = param2
				return response = await tmdbApi.search(props.category, {params});
			}
	}

	useEffect(() => {
		const getList = () => {
			const param1 = {};
			const param2 = { query: keyword };
			getData(param1, param2).then(response => {
				setItems(response.results);
				setTotalPage(response.total_pages);
			} )

			// let response = null;
			// if(keyword === undefined) {
			// 	const params = {};
			// 	switch (props.category) {
			// 		case category.movie:
			// 			response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
			// 			break;
			// 		default:
			// 			response = await tmdbApi.getTvList(tvType.popular, {params});
			// 			break;
			// 	}
			// } else {
			// 	const params = { query: keyword };
			// 	response = await tmdbApi.search(props.category, {params});
			// }
			// setItems(response.results);
			// setTotalPage(response.total_pages);
		}

		getList();
	}, [props.category, keyword]);

	const loadMore = async () => {
		const param1 = { page: page + 1 };
		const param2 = { page: page + 1, query: keyword };
		
		getData(param1, param2).then(response => {
			setItems([...items, ...response.results]);
			setPage(page + 1);
		} )

		// let response = null;
		// 	if(keyword === undefined) {
		// 		const params = { page: page + 1 };
		// 		switch (props.category) {
		// 			case category.movie:
		// 				response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
		// 				break;
		// 			default:
		// 				response = await tmdbApi.getTvList(tvType.popular, {params});
		// 				break;
		// 		}
		// 	} else {
		// 		const params = { page: page + 1, query: keyword };
		// 		response = await tmdbApi.search(props.category, {params});
		// 	}
		// setItems([...items, ...response.results]);
		// setPage(page + 1);
	};
	

	return (
		<>
			<div className="section mb-3">
				<MovieSearch category={props.category} keyword={keyword} />
			</div>
			<div className='movie-grid'>
				{
					items.map((item, i) => <MovieCard item={item} key={i} category={props.category} /> )}
			</div>
			{
				page < totalPage ? (
					<div className="movie-grid__loadmore">
						<OutlineButton className='small' onClick={loadMore}>Load More</OutlineButton>
					</div>
				) : null
			}
		</>
	)
}

export default MovieGrid