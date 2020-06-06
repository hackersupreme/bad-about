import React, { useState, useEffect, useRef } from 'react';
import Share from '../icons/share.svg';
import Flag from '../icons/flag.svg';
import Downvote from '../icons/downvote.svg';
import '../css/main.css';
import '../css/aside.css';
import Panel from './Panel.js'

const getActivePanel = (scrollTop, factsRect, opinionsRect, experiencesRect) => {

	if (scrollTop <= factsRect.bottom) {
		return 0;
	} else if (opinionsRect.top < 0) {
		return 2;
	} else {
		return 1;
	}
}

const Main = (props) => {

	const [active, setActive] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	const [factsRect, setFactsRect] = useState({top: 0, bottom: 0});
	const [opinionsRect, setOpinionsRect] = useState({top: 0, bottom: 0});
	const [experiencesRect, setExperiencesRect] = useState({top: 0, bottom: 0});

	const handleScroll = e => {
		const scrollTop = e.target.documentElement.scrollTop;
		setScrollTop(scrollTop);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, []);

	const activePanel = getActivePanel(scrollTop, factsRect, opinionsRect, experiencesRect);

	return (

	<div className="main__container">

		<aside className="aside__container">

			<ul className="aside__nav">
				<a href="#Facts" className="aside__link" onClick={() => setActive(0)}>
					<li className={activePanel === 0 ? "aside__nav-item active" : "aside__nav-item"}>
						<p className="color-darker">Facts</p>
						<p className="color-darker">{props.facts.length}</p>
					</li>
				</a>
				<a href="#Opinions" className="aside__link" onClick={() => setActive(1)}>
					<li className={activePanel === 1 ? "aside__nav-item active" : "aside__nav-item"}>
						<p className="color-darker">Opinions</p>
						<p className="color-darker">{props.opinions.length}</p>
					</li>
				</a>
				<a href="#Experiences" className="aside__link" onClick={() => setActive(2)}>
					<li className={activePanel === 2 ? "aside__nav-item active" : "aside__nav-item"}>
						<p className="color-darker">Experiences</p>
						<p className="color-darker">{props.experiences.length}</p>
					</li>
				</a>
			</ul>

		</aside>

		<main>

			<Panel 
			title="Facts"
			data={props.facts}
			setRect={setFactsRect}
			/>

			<Panel 
			title="Opinions"
			data={props.opinions}
			setRect={setOpinionsRect}
			/>

			<Panel 
			title="Experiences"
			data={props.experiences}
			setRect={setExperiencesRect}
			/>

		</main>

		

	</div>

	)

}


export default Main