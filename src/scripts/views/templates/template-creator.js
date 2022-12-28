import CONFIG from '../../globals/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const createrestaurantDetailTemplate = (restaurant) => `
<div class="this_content">
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class= "lazyload" "restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="restaurant__overview">
  <h3>Deskripsi DarkResto</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__info">
    <h3>Informasi DarkResto</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <br>
    <h4>Menu Makanan</h4>
    <p>${restaurant.menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
    <br>
    <h4>Menu Minuman</h4>
    <p>${restaurant.menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}</p>
  </div>
  <div class="review_customer">
    <h3>Review Pelanggan</h3>
    ${restaurant.customerReviews.map((review) => `
      <div class="customerReview">
          <p class="custReview">Review :"${review.review}"</p>
          <p class="custName">Nama : ${review.name}</p>
          <p class="custDate">Waktu : ${review.date}</p>
      </div>`)}
  </div>
`

const createrestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload" "restaurant-item__header__poster" alt="${restaurant.name}"
      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="restaurant-item__content">
    <center><p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p></center>
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createrestaurantItemTemplate,
  createrestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikedButtonTemplate
}
