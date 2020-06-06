import React, { useRef, useEffect } from 'react';
import Share from '../icons/share.svg';
import Flag from '../icons/flag.svg';
import Downvote from '../icons/downvote.svg';
import Article from './Article.js';
import ExperienceArticle from './ExperienceArticle.js';

const Panel = (props) => {

	const panelRef = useRef();

	let articles;

	if (props.title == 'Experiences') {

		articles = props.data.map((article, i) => (
		
			<ExperienceArticle article={article} key={i} />
		
		));

	} else {

		articles = props.data.map((article, i) => (
		
			<Article article={article} key={i} />
		
		));

	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const element = panelRef.current.getBoundingClientRect();
			props.setRect({top: element.top, bottom: element.bottom});
		})
	}, [])

	return(

		<section id={props.title} className="panel__container" ref={panelRef}>

			<h2 className="panel__title color-darker">{props.title}<span class="panel__title-q">?</span></h2>

			{articles}

			<button className="panel__button color-light">
				Load More
			</button>

		</section>

	)

}


export default Panel