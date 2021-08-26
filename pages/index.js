import Head from "next/head";
import Img from "next/image";
import styles from "../styles/Home.module.css";

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
					<h1
						className={`${styles.title} animate__animated animate__fadeInUp`}
					>
						Gino Missael
					</h1>

					<div className={styles.wrapper}>
						<div className={styles["typing-demo"]}>
							Fullstack Developer
						</div>
					</div>
				</div>
				<div className={styles.wrapper_grid}>
					<div className={styles.grid_2}>
						<Img
							className={styles.avatar}
							src="/img/profile.jpg"
							layout="fixed"
							objectFit="cover"
							width={150}
							height={150}
              alt="profile"
						/>
						<h3>Sobre mi</h3>
						<p style={{ textAlign: "justify" }}>
							He tenido experiencia en proyectos para el formato
							de Retail y Ecommerce ambos también en su área de
							logística de trasporte y distribución aplicando
							técnicas de estrategias Inbound como Outbound a lo
							cual si tu necesidad es crear soluciones para
							algunas de estas áreas estaré dispuesto a llevar las
							mejores estrategias para poder lograr la mayor
							eficiencia cuento con 6 años de experiencia como
							programador web y 3 años como desarrollador android.
						</p>
					</div>
				</div>
				<div className={styles.wrapper_grid}>
					<div className={styles.grid_2}>
						<div className={styles.content_flex}>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/react.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/next.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/nodejs.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/aws.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
						</div>
						<div className={styles.content_flex}>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/npm.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/js.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/mongodb.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/firebase.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
						</div>
						<div className={styles.content_flex}>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/material-ui.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/express.svg"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/socketio.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
							<div className={styles.icon_tecnologies}>
								<Img
									src="/img/docker.png"
									objectFit="contain"
									width={100}
									height={100}
                  alt="tech"
								/>
							</div>
						</div>
						<div>
							<h4>Email de contacto</h4>
							<h3>contacto@soygino.com</h3>
						</div>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<Img src="/img/mx-flag.png" width={25} height={25} />
				Mexican talent
			</footer>
		</div>
	);
}
