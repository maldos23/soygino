import Head from "next/head";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Gino Missael - Desarrollador fullstack</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Hola soy gino missael un desarrollador con mas de 6 años de
            experiencia contacto: contacto@soygino.com"
				/>
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, Reactjs , Fullstack , Dev , Developer , Web, CDMX"
				></meta>
				<meta name="robots" />
				<meta name="author" content="Gino Missael"></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className={styles.main}>
					<div>
						<div className={styles["animated-title"]}>
							<div className={styles["text-top"]}>
								<div>
									<span>Gino</span>
									<span>Missael</span>
								</div>
							</div>
							<div className={styles["text-bottom"]}>
								<div>Fullstack Developer</div>
							</div>
						</div>
					</div>

					<div className={styles.arrow}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={styles.wrapper_grid}>
					<div>
						<Fade top>
							<img
								className={styles.avatar}
								src="/img/profile.jpg"
								width={150}
								height={150}
								alt="profile"
							/>
						</Fade>

						<Fade left cascade>
							<h3>Sobre mi</h3>
						</Fade>

						<Fade bottom>
							<p style={{ textAlign: "justify" }}>
								He tenido experiencia en proyectos para el
								formato de Retail y Ecommerce ambos también en
								su área de logística de trasporte y distribución
								aplicando técnicas de estrategias Inbound como
								Outbound a lo cual si tu necesidad es crear
								soluciones para algunas de estas áreas estaré
								dispuesto a llevar las mejores estrategias para
								poder lograr la mayor eficiencia cuento con 6
								años de experiencia como programador web y 3
								años como desarrollador android.
							</p>
						</Fade>
					</div>
				</div>
				<div className={styles.wrapper_grid_icons}>
					<Slide bottom cascade>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/react.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/next.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/nodejs.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/aws.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>

						<div className={styles.icon_tecnologies}>
							<img
								src="/img/npm.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/js.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/mongodb.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/firebase.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>

						<div className={styles.icon_tecnologies}>
							<img
								src="/img/material-ui.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/express.svg"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/socketio.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<img
								src="/img/docker.png"
								width="100px"
								height="100px"
								alt="tech"
							/>
						</div>
					</Slide>
				</div>

				<div className={styles.wrapper_grid}>
					<div>
						<h4>Email de contacto</h4>
						<h3>contacto@soygino.com</h3>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<img src="/img/mx-flag.png" width={25} height={25} />
				Mexican talent
			</footer>
		</div>
	);
}
