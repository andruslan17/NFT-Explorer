import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://memeduck.netlify.app" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/alchemy_logo.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
