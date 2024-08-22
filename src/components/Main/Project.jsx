import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Real_Estate_Site</h3>
                            <p>
                                Real_Estate_Site
                            </p>
                            <p className="tecnologias">
                                Blade
                                <span> -</span> PHP
                            </p>
                            <a href="https://github.com/Suzuki0916/Real_Estate_Site" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/Real_Estate_Site" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-14.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Laravel-From-Scratch-Blog-Project</h3>
                            <p>
                            Laravel-From-Scratch-Blog-Project
                            </p>
                            <p className="tecnologias">
                                PHP
                                <span> -</span> Blade
                                <span> -</span> Shell
                            </p>
                            <a href="https://github.com/Suzuki0916/Laravel-From-Scratch-Blog-Project" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/Laravel-From-Scratch-Blog-Project" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-17.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>iCinema</h3>
                            <p>
                            iCinema
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> SCSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://github.com/Suzuki0916/iCinema" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/iCinema" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-7.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Power Engine</h3>
                            <p>
                                Automobiles Website
                            </p>
                            <p className="tecnologias">
                                JavaScript
                                <span> -</span> Shell
                                <span> -</span> Other
                            </p>
                            <a href="https://github.com/Suzuki0916/mern-blog" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/mern-blog" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-6.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Nuxt-Example</h3>
                            <p>
                                Nuxt-Example
                            </p>
                            <p className="tecnologias">
                                Vue
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://github.com/Suzuki0916/nuxt-example" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/nuxt-example" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-12.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Ecommerce-Store</h3>
                            <p>
                            Ecommerce-Store
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> SCSS
                                <span> -</span> Shell
                            </p>
                            <a href="https://github.com/Suzuki0916/ecommerce-store" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/ecommerce-store" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Docker-Wordpress</h3>
                            <p>
                            Docker-Wordpress
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Shell
                                <span> -</span> Sass
                            </p>
                            <a href="https://github.com/Suzuki0916/docker-wordpress" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Suzuki0916/docker-wordpress" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);