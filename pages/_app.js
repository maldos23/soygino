import Head from "next/head";

import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
