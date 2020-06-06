import React from 'react';
import '../css/nav.css';
import Logo from '../icons/logo.PNG';
import Search from '../icons/search.svg';
import Plus from '../icons/plus.svg';
import Hamburger from '../icons/hamburger.svg';

const Nav = () => (

	<nav className="nav__container">

		<figure className="nav__logo-container">

			<img className="nav__logo-image" src={Logo} />

		</figure>

		<form className="nav__search-form">

			<img className="nav__search-icon" src={Search} />

			<input type="search" name="search" className="nav__input" placeholder="Search Topics" />

		</form>

		<div className="nav__item-container">

			<img className="nav__plus-icon" src={Plus} />

			<button className="nav__new-topic-button color-darker">

				New Topic

			</button>

		</div>

		<div className="nav__item-container--end">

		<img className="nav__hamburger-icon" src={Hamburger} />

		</div>

		<div className="nav__item-container--end">

			<button className="nav__sign-in-button color-darker">

				Sign in

			</button>

		</div>

	</nav>

)

export default Nav