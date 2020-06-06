import React from 'react';
import '../css/header.css';
import Share from '../icons/share.svg';


const Header = props => (

	<header className="header__container">

		<div className="header__group">

			<h1 className="header__title color-darker">

				{props.name}

			</h1>

			<a href="/" className="header__share-topic">

				<img className="header__share-topic-icon" src={Share} alt="share" width={20} />

				<p className="header__share-topic-copy color-light">Share Topic</p>

			</a>

		</div>

		<button className="header__button color-darker">

			New Post

		</button>

	</header>

)


export default Header