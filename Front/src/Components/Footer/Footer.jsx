import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.modules.css';

const Footer = (props) => {
	return (
		<>
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<h6>About</h6>
							<p className="text-justify">
								"Rick and Morty App" es un proyecto de integración realizado
								durante la cursada del bootcamp{' '}
								<a
									href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand"
									target="_blank"
									rel="noreferrer"
								>
									Soy Henry
								</a>
								. El fin del mismo es integrar distintas tecnologias y lograr
								una interfaz divertida para conocer todos los personajes de esta
								genial serie de televisión creada por Dan Harmon. ¡Que se
								diviertan!
							</p>
						</div>

						<div className="col-xs-6 col-md-3">
							<h6>Technologies</h6>
							<ul className="footer-links">
								<li>
									<i className="fa-brands fa-html5"></i>
									<a
										href="https://developer.mozilla.org/es/docs/Web/HTML"
										target="_blank"
										rel="noreferrer"
									>
										HTML
									</a>
								</li>
								<li>
									<i className="fa-brands fa-css3-alt"></i>
									<a
										href="https://developer.mozilla.org/es/docs/Web/CSS"
										target="_blank"
										rel="noreferrer"
									>
										CSS
									</a>
								</li>
								<li>
									<i className="fa-brands fa-square-js"></i>
									<a
										href="https://developer.mozilla.org/es/docs/Web/JavaScript"
										target="_blank"
										rel="noreferrer"
									>
										Java Script
									</a>
								</li>
								<li>
									{' '}
									<i className="fa-brands fa-bootstrap"></i>
									<a
										href="https://getbootstrap.com/"
										target="_blank"
										rel="noreferrer"
									>
										Bootstrap
									</a>
								</li>
								<li>
									{' '}
									<i className="fa-brands fa-react"></i>
									<a
										href="https://es.reactjs.org/tutorial/tutorial.html"
										target="_blank"
										rel="noreferrer"
									>
										React
									</a>
								</li>
								<li>
									<i class="fa-brands fa-ravelry"></i>
									<a
										href="https://redux.js.org/"
										target="_blank"
										rel="noreferrer"
									>
										Redux
									</a>
								</li>
							</ul>
						</div>

						<div className="col-xs-6 col-md-3">
							<h6>Site Map</h6>
							<ul className="footer-links">
								<li>
									<NavLink to="/home">Home </NavLink>
								</li>
								<li>
									<NavLink to="/favorites">Favorites </NavLink>
								</li>
								<li onClick={props.logout}>
									<NavLink to="/favorites">Logout </NavLink>
								</li>
							</ul>
						</div>
					</div>
					<hr />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-6 col-xs-12">
							<p className="copyright-text">
								Copyright &copy; 2023 Juan Ignacio Morales. All Rights Reserved
							</p>
						</div>

						<div className="col-md-4 col-sm-6 col-xs-12">
							<ul className="social-icons">
								<li>
									<a
										className="twitter"
										href="https://twitter.com/NachoMorales15"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-twitter"></i>
									</a>
								</li>
								<li>
									<a
										className="whatsapp"
										href="https://wa.link/hh39sy"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-whatsapp"></i>
									</a>
								</li>
								<li>
									<a
										className="instagram"
										href="https://www.instagram.com/nacho.moraless/"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a
										className="linkedin"
										href="https://www.linkedin.com/in/juan-ignacio-moraless/"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
