import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<img
				className="logo"
				src="https://lh3.googleusercontent.com/proxy/aViTJjYXw-1m0hx1YNKjbLBhth_8Hj8PmMUR8yEQGit2f32FDWKxhn8kbX5IEQyJi3xvbWwNBVk5vcaNl-C2riov-aWfGCvIpfmsSumvRbdgbaWsS1U"
				alt="Netflix Logo"
			></img>
			<img
				className="avatar"
				src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				alt="Netflix Avatar"
			></img>
		</div>
	);
}

export default Nav;
