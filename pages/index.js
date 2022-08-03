import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Gino Missael - Desarrollador fullstack</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Gino missael desarrollador con mas de 6 años de
            experiencia en el desarrollo de software"
				/>
				<meta name="contact" content="contacto@soygino.com" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, Reactjs , Fullstack , Dev , Developer , Web, CDMX"
				></meta>
				<meta name="robots" />
				<meta name="author" content="Gino Missael"></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<div style={{ position: "relative", height: "100vh" }}>
					<video
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							height: "100vh",
							width: "100%",
							objectFit: "cover",
							filter: "contrast(120%)",
						}}
						src="back-2.mp4"
						type="video/mp4"
						disableRemotePlayback
						autoPlay
						muted
						loop
						id="myVideo"
					></video>
					<div
						style={{
							position: "absolute",
							top: "35%",
							left: "50%",
							width: "100%",
							transform: "translate(-50%, -50%)",
						}}
					>
						{/* Name secction animation */}
						<div className={styles.main}>
							<div className={styles["text-focus-in"]}>
								<div className={styles["animated-title"]}>
									Gino Missael
								</div>
								<div className={styles["animated-subtitle"]}>
									<div>Fullstack Developer</div>
								</div>
							</div>
						</div>
					</div>

					<a
						href="#profile"
						className="ca3-scroll-down-link ca3-scroll-down-arrow"
						data-ca3_iconfont="ETmodules"
						data-ca3_icon=""
					></a>
				</div>

				{/* Parallax section */}
				<div id="profile">
					<div
						style={{
							display: "block",
							height: "100vh",
							position: "relative",
						}}
					>
						<video
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								height: "100vh",
								width: "100%",
								objectFit: "contain",
								rotate: "180deg",
								filter: "grayscale(100%) contrast(30%) brightness(2.0) ",
							}}
							src="back-3.mp4"
							type="video/mp4"
							disableRemotePlayback
							autoPlay
							muted
							loop
							id="myVideo"
						></video>
						<div>
							<div
								style={{
									textAlign: "center",
									borderRadius: 25,
									padding: "20px 40px",
									position: "absolute",
									width: "90vmin",
									maxWidth: "90%",
									left: "50%",
									top: "50%",
									transform: "translate(-50%, -50%)",
								}}
							>
								<Image
									className={styles.avatar}
									src="/img/profile.jpg"
									width={150}
									height={150}
									alt="profile"
								/>
								<h1
									style={{
										textAlign: "center",
										fontWeight: "900",
									}}
								>
									Sobre mi
								</h1>
								<p style={{ textAlign: "justify" }}>
									Soy una persona que se incursiono al mundo
									del desarrollo de software de una edad muy
									joven y crecio en un entorno rodeado de
									tecnologia la curiosidad me llevo a
									eperimentar con el codigo y me ha dado una
									increible carreara profesional.
									<br />
									<br />
									<br />
								</p>
								<p style={{ textAlign: "center" }}>
									Si deseas saber mas te comparto mi cv
								</p>
								<a
									target="_blank"
									rel="noreferrer noopener"
									className="black-btn"
									href="https://drive.google.com/file/d/1UyFUmB-_uLNxymlTvzy27nE0c8T_UJOO/view?usp=sharing"
								>
									Descargar CV
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						position: "relative",
						background: "#000000",
						height: "100%",
						textAlign: "center",
					}}
				>
					<h1 style={{ color: "white", fontSize: 100 }}>Skills</h1>
					<div
						style={{
							display: "block",
							borderRadius: 25,
							backdropFilter: "blur(5px)",
							boxShadow:
								"10px 10px 66px 12px rgba(138,138,138,0.59)",
							margin: "40px 40px",
							padding: "30px 20px",
							width: "90vmin",
							maxWidth: "90%",
						}}
					>
						<h2 style={{ textAlign: "justify", color: "white" }}>
							Software Developer
						</h2>
						<p style={{ textAlign: "justify", color: "white" }}>
							FrontEnd
						</p>
						<ProgressBar
							bgColor="#e100ff"
							completed={100}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							Backend
						</p>
						<ProgressBar
							bgColor="#7f00ff"
							completed={80}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							UI/UX
						</p>
						<ProgressBar
							bgColor="#e100ff"
							completed={80}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							CI/CD
						</p>
						<ProgressBar
							bgColor="#7f00ff"
							completed={60}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							QA
						</p>
						<ProgressBar
							bgColor="#e100ff"
							completed={40}
							customLabel="."
						/>
					</div>
					<div
						style={{
							display: "block",
							borderRadius: 25,
							backdropFilter: "blur(5px)",
							boxShadow:
								"10px 10px 66px 12px rgba(138,138,138,0.59)",
							margin: "40px 40px",
							padding: "30px 20px",
							width: "90vmin",
							maxWidth: "90%",
						}}
					>
						<h2 style={{ textAlign: "justify", color: "white" }}>
							Lenguajes
						</h2>
						<p style={{ textAlign: "justify", color: "white" }}>
							Javascript
						</p>
						<ProgressBar
							bgColor="#00c6ff"
							completed={100}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							Typescript
						</p>
						<ProgressBar
							bgColor="#0072ff"
							completed={80}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							Python
						</p>
						<ProgressBar
							bgColor="#00c6ff"
							completed={40}
							customLabel="."
						/>
						<p style={{ textAlign: "justify", color: "white" }}>
							Shell
						</p>
						<ProgressBar
							bgColor="#0072ff"
							completed={100}
							customLabel="."
						/>
					</div>
				</div>
				<div
					style={{
						position: "relative",
						background: "#FFFFFF",
						height: "100%",
						textAlign: "center",
						padding: "30px 0px",
					}}
				>
					<div
						style={{
							position: "relative",
							height: "300px",
							width: "100%",
							textAlign: "center",
						}}
					>
						<div
							style={{
								position: "absolute",
								textAlign: "center",
								width: "100%",
								zIndex: 10,
							}}
						>
							<h5>
								<span style={{ color: "transparent" }}>
									{"."}
								</span>
								<div className="message">
									<div className="word1">Reacjs</div>
									<div className="word2">Nodejs</div>
									<div className="word3">Docker</div>
								</div>
							</h5>
							<h5 style={{ fontWeight: "bold" }}>
								<span>Tecnologias</span>
							</h5>
							<p
								style={{
									margin: "20px 40px",
								}}
							>
								Suelo usar las siguientes tecnologias con las
								mejores practicas de desarrollo
							</p>
						</div>
					</div>

					<div className={styles.wrapper_grid_icons}>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/react.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/next.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/nodejs.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/aws.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>

						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/npm.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/js.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/mongodb.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/firebase.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>

						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/material-ui.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/express.svg"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/socketio.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
						<div className={styles.icon_tecnologies}>
							<Image
								src="/img/docker.png"
								width={100}
								height={100}
								alt="tech"
							/>
						</div>
					</div>
				</div>
				<div
					style={{
						position: "relative",
						background: "#000000",
						height: "100%",
						textAlign: "center",
						padding: "50px 0px",
					}}
				>
					<video
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 0,
							height: "100%",
							width: "100%",
							objectFit: "cover",
							filter: "grayscale(200%) contrast(250%)",
						}}
						src="back-4.mp4"
						type="video/mp4"
						disableRemotePlayback
						autoPlay
						muted
						loop
					></video>
					<div
						style={{
							position: "relative",
							height: "80vmin",
							width: "100%",
							textAlign: "center",
						}}
					>
						<div
							style={{
								position: "absolute",
								textAlign: "center",
								zIndex: 10,
								top: "50%",
								left: "50%",
								transform: "translate(-50% , -50%)",
							}}
						>
							<h4 style={{ color: "#FFFFFF" }}>
								Programando todo es posible
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
