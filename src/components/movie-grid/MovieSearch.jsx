import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import Input from '../input/Input';
import { OutlineButton } from '../button/Button';

import './movie-search.scss'

const MovieSearch = props => {

	const navigate = useNavigate();
	const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

	const goToSearch = useCallback(
		() => {
			if( keyword.trim().length > 0 ) {
				console.log('Render');
				navigate(`/${category[props.category]}/search/${keyword}`);
			}
		}, [keyword, props.category, navigate]
	);

	const enterEvent = (e) => {
		e.preventDefault();
		if(e.keyCode === 13) {
			goToSearch()
		}
	};


	useEffect(() => {

		document.addEventListener('keyup', enterEvent);
		
		return () => {
			document.addEventListener('keyup', enterEvent)
		}
	}, [keyword, goToSearch]);
	


  return (
	<div className="movie-search">
		<Input
			type='text'
			placeholder='Enter keyword'
			value={keyword}
			onChange={e => setKeyword(e.target.value)}
		/>
		<OutlineButton className='small' onClick={goToSearch}>Seaarch</OutlineButton>
	</div>
  )
}

export default MovieSearch