import React from 'react';
import Share from '../icons/share.svg';
import Flag from '../icons/flag.svg';
import Downvote from '../icons/downvote.svg';


const ExperienceArticle = (props) => {

let article = props.article;

	return(

	<article className="article__container--experience">

		<div className="content__container">

			<h3 className="content__title color-darker">{article.content}
			<a className="content__show-more color-light" href={article.link}>Show more</a>
			</h3>

			

			<p className="content__author color-light">{article.author}</p>

			<p className="content__date color-light">{article.date}</p>

			<img className="content__share-icon" src={Share} alt="share post" width={20} />

			<img className="content__report-icon" src={Flag} alt="report post" width={20} />

		</div>

		<div className="data__container">

			<h4 className="data__title color-light">Helpful</h4>

			<img 
			className="data__upvote" 
			src={Downvote} 
			alt="upvote" 
			style={{transform: 'rotate(180deg)'}} 
			/>

			<img
			 className="data__downvote" 
			 src={Downvote} 
			 alt="downvote" 
			 />

			<data className="data__content color-darker">
				{article.helpful + "%"}
			</data>

		</div>

	</article>

	)
}

export default ExperienceArticle;