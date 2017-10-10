/*---------------------------------------------------------------------------------*/
(function() {
	const loadScreen = document.querySelector('.load-screen');
	const mainPage = document.querySelector('.main-page');
	let loading = 0;
	const id = setInterval(frame, 50); 

	function frame() {
		if (loading === 50) {
			clearInterval(id);
			loadScreen.style.display = 'none';
			mainPage.style.display = 'grid'
		} else {
			loading += 1;
			if (loading === 47) {
				loadScreen.style.animation = 'fadeout 1s ease'
			}
		}
	}
})();
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
const mainPage = document.querySelector('.main-page');
const blackBar = document.querySelector('.black-header');
const phoneBar = document.querySelector('.phone-bar'); 
const recommendations = document.querySelector('.recommendations');
//const topOfBar = (blackBar.offsetTop - phoneBar.offsetHeight); 
const heroImage = document.querySelector('.hero-img'); 
const footerIconsExpand = document.querySelector('.footer-icons-expand');
const footerBar = document.querySelector('.footer-wrap')

function fixNav() {
	//const topOfBar = (blackBar.offsetTop -  phoneBar.offsetHeight);
	const bottomOfImage = (heroImage.offsetHeight - phoneBar.offsetHeight);
	//console.log(window.scrollY, bottomOfImage);
	if (window.scrollY >= bottomOfImage) { 
		mainPage.style.gridTemplate = '[hero] 90vh [recommendations] auto [other-products] 50vh [trips] 5vh [footer] 10vh / 1fr';
		blackBar.classList.add('black-bar-fixed');
		phoneBar.style.backgroundColor = 'rgba(0,0,0,1.0)';
		recommendations.style.paddingTop = blackBar.offsetHeight + 'px';
		footerIconsExpand.style.paddingTop = blackBar.offsetHeight + 'px';
		//footerBar.style.display = 'flex';

	} 
	if (window.scrollY <= bottomOfImage) { 
		mainPage.style.gridTemplate = '';
		blackBar.classList.remove('black-bar-fixed');
		phoneBar.style.backgroundColor = '' 
		recommendations.style.paddingTop = '';
		footerIconsExpand.style.paddingTop = '';
		//footerBar.style.display = '';
	}

}
window.addEventListener('scroll', fixNav);
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
const heroData = {
	0:{image: 'gronland hero.jpg', text: 'Winter Season Sale', sub: 'Discounts up to 30%', button: 'Shop 175 Items'},
	1:{image: 'gronland hero2.jpg', text: 'Frigid-Cold Protection', sub: 'Grønland Sub-Zero Jackets', button: 'Shop Item'},
	2:{image: 'gronland hero3.jpg', text: 'Trekking the Artic', sub: 'Grønland Sponsored Trips', button: 'Explore'}
}
let index = 0;
//const heroImage = document.querySelector('.hero-img');
const heroText = document.querySelector('.hero-text');
const heroSub = document.querySelector('.hero-sub');
const heroButton = document.querySelector('.hero-button');
const dots = document.querySelectorAll('.dot'); 

heroImage.style.backgroundImage = `url('${heroData[index].image}')`;
heroText.textContent = `${heroData[index].text}`;
heroSub.textContent = `${heroData[index].sub}`;
heroButton.textContent = `${heroData[index].button}`;
dots[index].className = 'dot fa fa-circle'

function previousImage() {
	index--;
	if (index < 0)
		index = 2;
	heroImage.style.backgroundImage = `url('${heroData[index].image}')`;
	heroText.textContent = `${heroData[index].text}`;
	heroSub.textContent = `${heroData[index].sub}`;
	heroButton.textContent = `${heroData[index].button}`;
	heroImage.style.transition = "1s";
	heroImage.style.transitionTimingFunction = 'ease-in-out';
	dots.forEach((dot, i) => {
		if (i === index) 
			dot.className = 'dot fa fa-circle';
		else 
			dot.className = 'dot fa fa-circle-o';
	});
}

function nextImage() {
	index++;
	if (index > 2)
		index = 0;
	heroImage.style.backgroundImage = `url('${heroData[index].image}')`;
	heroText.textContent = `${heroData[index].text}`;
	heroSub.textContent = `${heroData[index].sub}`;
	heroButton.textContent = `${heroData[index].button}`;
	heroImage.style.transition = "1s";
	heroImage.style.transitionTimingFunction = 'ease-in-out';
	dots.forEach((dot, i) => {
		if (i === index) 
			dot.className = 'dot fa fa-circle';
		else 
			dot.className = 'dot fa fa-circle-o';
	});
}

const imageScroll = setInterval(nextImage, 8000);

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
const hearts = document.querySelectorAll('.heart');
const productData = {
	0:{image:'prod 3.jpg', description:'Fjall Raven Jacket', price: '$400', heart: 'fa-heart-o', index: 0},
	1:{image:'prod 2.jpg', description:'Fjall Raven Gortex Pants', price: '$300', heart: 'fa-heart-o', index: 1},
	2:{image:'prod 7.jpg', description:'Fjall Raven Backpack', price: '$200', heart: 'fa-heart-o', index: 2}
}

let open = true; 

hearts.forEach((heart, i) => heart.addEventListener('click', (event) => {
	if (open && heart.className === 'heart fa fa-heart-o') {
		heart.className = 'heart fa fa-heart';
		heart.style.color = 'rgba(238,1,106,1.0)';
		open = false;
		productData[i].heart = 'fa-heart'
	} else {
		heart.className = 'heart fa fa-heart-o';
		heart.style.color = 'rgba(0,0,0,1.0)';
		open = true;
		productData[i].heart = 'fa-heart-o';
	}
}));
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
const products = document.querySelector('.products');
const product = document.querySelectorAll('.product-wrap'); 

const productArray = [];
let idx;
let thisItem;
let pWidth; 

const arrowRight = document.querySelectorAll('.fa-angle-right');
function moveRight(event) {
	product.forEach((p, i) => {
		pWidth = p.offsetWidth; 
		let itemDescription = p.children[1].children[0].textContent;
		productArray.push(itemDescription);
	});
	thisItem = this.parentNode.parentNode.parentNode.children[1].children[0].textContent;
	idx = productArray.indexOf(thisItem);
	console.log(idx)
	products.scrollLeft = pWidth * (idx + 1);
}
arrowRight.forEach((arrow) => arrow.addEventListener('click', moveRight));

const arrowLeft = document.querySelectorAll('.fa-angle-left');
function moveLeft(event) {
	product.forEach((p, i) => {
		pWidth = p.offsetWidth;
		let itemDescription = p.children[1].children[0].textContent;
		productArray.push(itemDescription);
	});
	thisItem = this.parentNode.parentNode.parentNode.children[1].children[0].textContent;
	idx = productArray.indexOf(thisItem);
	products.scrollLeft = pWidth * (idx - 1);
}
arrowLeft.forEach((arrow) => arrow.addEventListener('click', moveLeft));

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
//const recommendations;
const otherProducts = document.querySelector('.other-products'); 
const trips = document.querySelector('.trips')
//const footerIconsExpand = document.querySelector('.footer-icons-expand');
const footerExpandTitle = document.querySelector('.footer-expand-title')
const footerExpandFormat = document.querySelector('.format')

const footHome = document.querySelector('.foot-home');
function displayHome() {
	heroImage.style.display = '';
	this.style.color = 'rgba(0,0,0,1.0)';
	mainPage.style.display = 'grid';
	mainPage.style.flexDirection = 'none'; 
	mainPage.style.gridTemplate = '[hero] 90vh [black-bar] 60px [recommendations] auto [other-products] 50vh [trips] 50vh [footer] 10vh / 1fr';
	footerIconsExpand.style.display = 'none';
	recommendations.style.display = '';
	otherProducts.style.display = '';
	trips.style.display = '';
}
footHome.addEventListener('click', displayHome);

const footSearch = document.querySelector('.foot-search');
function displaySearch() {
	this.style.color = 'rgba(0,0,0,1.0)';
	mainPage.style.display = 'flex';
	mainPage.style.flexDirection = 'column';
	mainPage.style.gridTemplate = 'none';
	heroImage.style.display = 'none'; //////////////////
	footerIconsExpand.style.display = 'flex';
	recommendations.style.display = 'none';
	otherProducts.style.display = 'none';
	trips.style.display = 'none';
	//
	footerExpandTitle.textContent = 'SEARCH';
	footerExpandFormat.innerHTML = 
	`
	<input class="search" type="text" name="search" placeholder="SEARCH"><i class="fa fa-search" aria-hidden="true"></i></input>
	<ul> 
		<li></li>
		<li></li>
		<li></li>
	</ul>
	`;
}
footSearch.addEventListener('click', displaySearch); 

const footCart = document.querySelector('.foot-cart');
function displayCart() {
	this.style.color = 'rgba(0,0,0,1.0)';
	mainPage.style.display = 'flex';
	mainPage.style.flexDirection = 'column';
	mainPage.style.gridTemplate = 'none';
	heroImage.style.display = 'none';
	footerIconsExpand.style.display = 'flex';
	recommendations.style.display = 'none';
	otherProducts.style.display = 'none';
	trips.style.display = 'none';
	//
	footerExpandTitle.textContent = 'CART ITEMS';
	footerExpandFormat.innerHTML = 
	`
	<ul class="cart-items-dropdown">
		<li class="cart-product"></li>
		<li class="sum-total">$00.00</li>
		<li><a class="checkout">CHECKOUT</a></li>
	</ul>
	`;
}
footCart.addEventListener('click', displayCart);

const footHeart = document.querySelector('.foot-heart');
function displayFavorites() {
	this.style.color = 'rgba(0,0,0,1.0)';
	mainPage.style.display = 'flex';
	mainPage.style.flexDirection = 'column';
	mainPage.style.gridTemplate = 'none';
	heroImage.style.display = 'none';
	footerIconsExpand.style.display = 'flex';
	recommendations.style.display = 'none';
	otherProducts.style.display = 'none';
	trips.style.display = 'none';
	//
	footerExpandTitle.textContent = 'WISHLIST';
	if (wishList.length === 0) {
		footerExpandFormat.innerHTML = 
		`
		<h3 class="no-items">There are no items in your wishlist.</h3>
		`;
	} else {
		footerExpandFormat.innerHTML = ``;	
		wishList.forEach(item => {
			const itemRow = document.createElement('div');
			itemRow.innerHTML = 
			`
			<img src="${item.image}"><p>${item.description}</p><p>${item.price}</p>
			`;
			itemRow.classList.add('wishlist-product'); 
			footerExpandFormat.appendChild(itemRow);
		});
	}
}
footHeart.addEventListener('click', displayFavorites);

const footProfile = document.querySelector('.foot-user');
function displayProfile() {
	this.style.color = 'rgba(0,0,0,1.0)';
	mainPage.style.display = 'flex';
	mainPage.style.flexDirection = 'column';
	mainPage.style.gridTemplate = 'none';
	heroImage.style.display = 'none';
	footerIconsExpand.style.display = 'flex';
	recommendations.style.display = 'none';
	otherProducts.style.display = 'none';
	trips.style.display = 'none';
	//
	footerExpandTitle.textContent = 'YOUR PROFILE';
	footerExpandFormat.innerHTML = 
	`
	<div class="profile-wrap">
		<div class="profile-pic"></div>
		<h2 class="name-text">JOHN DOE</h2>
		<div class="profile-info">
			<h3 class="profile-text">EMAIL: </h3>
			<h3 class="profile-text">CREDIT CARD: </h3>
			<h3 class="profile-text">SHIPPING ADDRESS: </h3>
			<h3 class="profile-text">BILLING ADDRESS: </h3>
		</div>
	</div>
	`;
}
footProfile.addEventListener('click', displayProfile);
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
const footerIcons = document.querySelectorAll('.foot-i'); 

function changeColor() {
	footerIcons.forEach(item => {
		if (item.className !== this.className)
			item.style.color = 'rgba(0,0,0,0.3)';
	});
}

footerIcons.forEach(icon => icon.addEventListener('click', changeColor)); 
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
//const hearts = document.querySelectorAll('.heart'); 
let wishList = []; 

function addToWishList(event) {
	wishList = [];
	for (key in productData) {
		if (productData[key].heart !== 'fa-heart-o') 
			wishList.push(productData[key]);
	}
}

hearts.forEach(heart => heart.addEventListener('click', addToWishList));

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
/*
Links:
https://dribbble.com/shots/3192398-Gr-nland-Outdoors-eCommerce-App

http://lea.verou.me/2013/11/cleanest-css-spinner-ever/

https://www.youtube.com/watch?v=fsmFBwlk7wo
*/
