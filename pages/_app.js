import Head from "next/head";

import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
			</Head>
			<Component {...pageProps} />
			<footer className="footer">
				<div className="footer__addr">
					<h1 className="footer__logo">Gino Missael</h1>

					<h2>Contacto</h2>

					<address>
						CDMX, Mexico
						<br />
						<a
							className="footer__btn"
							href="mailto:contacto@soygino.com"
						>
							Email
						</a>
					</address>
				</div>

				<ul className="footer__nav">
					<li className="nav__item">
						<h2 className="nav__title">Redes Sociales</h2>

						<ul className="nav__ul">
							<li>
								<a
									target="_blank"
									rel="noreferrer noopener"
									href="https://www.workana.com/freelancer/f5b133747faff75c17ff14defd905582"
								>
									Workana
								</a>
							</li>

							<li>
								<a
									target="_blank"
									rel="noreferrer noopener"
									href="https://www.linkedin.com/in/gino-romero-0783861b4/"
								>
									Likedin
								</a>
							</li>

							<li>
								<a
									target="_blank"
									rel="noreferrer noopener"
									href="https://github.com/maldos23"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noreferrer noopener"
									href="#"
								>
									Medium
								</a>
							</li>
						</ul>
					</li>

					<li className="nav__item ">
						<h2 className="nav__title">Tecnologias</h2>

						<ul className="nav__ul ">
							<li>
								<a href="#">Web Developer</a>
							</li>

							<li>
								<a href="#">Software Developer</a>
							</li>

							<li>
								<a href="#">Android Developer</a>
							</li>

							<li>
								<a href="#">IoT</a>
							</li>
						</ul>
					</li>
				</ul>

				<div className="legal">
					<img src="/img/mx-flag.png" width={25} height={25} />
					<p>
						Soygino.com <b>Programando todo es posible</b>
					</p>
				</div>
			</footer>
		</Fragment>
	);
}

export default MyApp;
