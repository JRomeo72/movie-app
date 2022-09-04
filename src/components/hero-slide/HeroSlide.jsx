import React, { useState, useEffect } from 'react';
// import SwiperCore, { Autoplay } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { movieType} from '../../api/tmdbApi';
import HeroSlideItem from './HeroSlideItem';
import TrailerModal from './TrailerModal';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './hero-slide.scss';

const HeroSlide = () => {

	// SwiperCore.use([Autoplay])
	const [movieItems, setMovieItems] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 };
			try {
				const response = await tmdbApi.getMoviesList(movieType.popular, {params});
				setMovieItems(response.results.slice(10, 16)); // * Escoge el No. de Slide del Array 
				// console.log(response);
			} catch (error) {
				console.log(error);
			}
		}
		getMovies();
	}, []);

	return (
		<div className='hero-slide'>
			<Swiper
				// cssMode={true}
				// grabCursor={true}
				// spaceBetween={0}
				// slidesPerView={1}
				loop={true}
				speed={1000}
				initialSlide={1}
				allowTouchMove={false}
				autoplay={{delay: 8000, disableOnInteraction: false}}
				pagination={{clickable: true}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{
					movieItems.map((item, i) => (
						<SwiperSlide key={i}>
							{({isActive}) => (
								<HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
							)}
						</SwiperSlide>
					))
				}

			</Swiper>
			{
				movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
			}
		</div>
	)
}



export default HeroSlide