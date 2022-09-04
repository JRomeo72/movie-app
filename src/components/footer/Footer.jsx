import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/tmovie.png';
import bg from '../../assets/img/footer-bg.jpg';
import './footer.scss'

const Footer = () => {
	return (
		<div className='footer' style={{ backgroundImage: `url(${bg})`}}>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<div className="logo">
						<img src={logo} alt="Logo" />
						<Link to='/'>tMovies</Link>
					</div>
				</div>
				<div className="footer__content__menus">
					<div className="footer__content__menus__menu">
						<Link to='/'>Home</Link>
						<Link to='/'>Contac us</Link>
						<Link to='/'>Term of services</Link>
						<Link to='/'>About us</Link>
					</div>
					<div className="footer__content__menus__menu">
						<Link to='/'>Live</Link>
						<Link to='/'>FAQ</Link>
						<Link to='/'>Premium</Link>
						<Link to='/'>Privacy policy</Link>
					</div>
					<div className="footer__content__menus__menu">
						<Link to='/'>You must watch</Link>
						<Link to='/'>Recent release</Link>
						<Link to='/'>To IMDB</Link>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Footer