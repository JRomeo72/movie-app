import React, { useEffect, useRef } from 'react';
import logo from '../../assets/img/tmovie.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './header.scss';

const headerNav = [
	{
		display: 'Home',
		path: '/movie-app/'
	},
	{
		display: 'Movies',
		path: '/movie-app/movie'
	},
	{
		display: 'TV Series',
		path: '/movie-app/tv'
	},
]

const Header = () => {

	const { pathname } = useLocation();
	const headerRef = useRef(null);
	// * Me regresa el indice del elemento del array 'headerNav' que coincide con el pathname actual  
	const active = headerNav.findIndex( e => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		}

		window.addEventListener('scroll', shrinkHeader);

		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		}
	}, [])
	
	return (
		<div ref={headerRef} className="header">
			<div className="header__wrap container">
				<div className="header__logo">
					<img src={logo} alt="logo" />
					<Link to={'/movie-app/'} >tMovies</Link>
				</div>
				<ul className="header__nav">
					{
						headerNav.map( (e, i) => (
							<li key={i} className={`${ i === active ? 'active' : '' }`}>
								<Link to={e.path}>
									{e.display}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Header