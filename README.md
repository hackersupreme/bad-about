# Bad-About Page from Refactoring UI Youtube Series

Contents

- Overview
- Live Site
- Installation
- Documentation
- Resources / Contact Info

## Overview

I decided to use some designs from the Youtube series Refactoring UI as practice for building web pages from static sketch files. This page is from the Youtube video *Refactoring UI: Bad About*.

The page features several panels and an in-page navigation. My focus for this project was organization, both in creating composable react components but also in CSS through using a naming convention called Block Element Modifier (BEM).

Install the files to see how it turned out!

Note: since there is no mobile design I haven't made an attempt at making it responsive. However, it's built using css grid and flex-boxes so it's in a good position to make it mobile-friendly.

#### Youtube Video

https://www.youtube.com/watch?v=S6-q5BheEYU

#### Sketch File

https://www.dropbox.com/s/tmu1c0s9rlhh0l4/bad-about.sketch?dl=0

## Live Site

http://hackersupreme.com/refactoring-ui/bad-about/

## Installation

This assumes you have the following installed:
  - node.js 
  - node package manager (npm)

Get both here: https://nodejs.org/

###### Instructions

1. Create file directory on your local device
2. Download files to that directory

_note: PNG images are for this document, not needed for the project_

3. Using a command line software, enter the directory
```
cd directory-name
```
4. Use npm install to get the node modules
```
npm install
```
5. Use npm start to start the server
```
npm start
```

## Documentation

#### App

The top level component for this page is `App` and it's found in the file `App.js`. It contains three child components that it wraps in a `div`: `Nav`, `Header`, and `Main`. 

The `Nav` component contains the top bar navigation while the `Header` component contains the header of the page located right below the nav. The `Main` component contains the in-page navigation sidebar and the panels for comments on the product grouped by category.

All of the information the page needs is organized in a file called `data.js`. I separated out the data from the components to ensure they are composable. This is what the data looks like:

```
export default {
  ProductName: 'Apple iPhone X',
	Facts: [
		{
			content: "Apple are charging higher than normal rates for repairing the screen ($279)",
			author: "Charlotte J",
			date: "Nov 15, 2017",
			important: 51,
			correct: 64,
			link: "/"
		},
		{
			content: "There is a larger than usual camera bump measuring 24.19mm long x 11.7 wide x 1.22 mm to accomodate the high resoolution camera",
			author: "Jess E",
			date: "Nov 15, 2017",
			important: 72,
			correct: 86,
			link: "/"
		},
		{
			content: "The back is made of glass, making it easier to break than other phones. The cost of repairing this when broken is $550 without AppleCare.",
			author: "Peter G",
			date: "Nov 15, 2017",
			important: 51,
			correct: 51,
			link: "/"
		},
		{
			content: "The Face ID unlock feature does not work with all sunglasses. This means you may have to take them off to unlock the phone using this feature.",
			author: "Jason G",
			date: "Nov 15, 2017",
			important: 51,
			correct: 51,
			link: "/"
		}
	],
	Opinions: [
		{
			content: "The phone is difficult to repair yourself.",
			author: "Taylor L",
			date: "Nov 15, 2017",
			important: 0,
			correct: 34,
			link: "/"
		},
		{
			content: "Many apps aren't optimized for the iPhone X screen.",
			author: "Danielle M",
			date: "Nov 15, 2017",
			important: 21,
			correct: 21,
			link: "/"
		}
	],
	Experiences: [
		{
			content: "The back panel broke in several areas after dropping it from waist height without a cover.",
			author: "Bijal T",
			date: "Nov 15, 2017",
			helpful: 44,
			link: null
		}
	]
}
```

#### Main

The `Main` component recieves the facts, opinions, and experiences of the product as arrays. It has an `aside` element for the in-page navigation on the left and a `main` element for the three panels on the right.

```
<main>
	<aside title="in-page navigation">...</aside>
	
	<main>
		<Panel title="Facts" />
		<Panel title="Opinions" />
		<Panel title="Experiences" />
	</main>
</main>
```

The `main` element contains three `Panel` components for the three data types. Each panel recieves its respective array of data that it turns into a list of `Article` or `ExperienceActicle` components. 

The `Main` component keeps track of which `Panel` component is the active component in the page and updates it as the user scrolls. Each `Panel` component's position relative to the viewport as well as the offset from the top of the page is tracked. A ref is passed onto each `Panel` component which is used to update the element's top and bottom page offsets whenever the page scrolls.

I configured the `aside` navigation to assign an "active" class to whichever `Panel` is most in the viewport. 

## Resources / Contact Info

#### Email

jeffgsch@gmail.com

#### Website

http://hackersupreme.com

#### Resources

- [Youtube Video](https://www.youtube.com/watch?v=S6-q5BheEYU)
- [Sketch File](https://www.dropbox.com/s/tmu1c0s9rlhh0l4/bad-about.sketch?dl=0)
- [Block Element Modifier](http://getbem.com/naming/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
