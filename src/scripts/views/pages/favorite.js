import FavoriteRestoIdb from '../../data/favoriterestoIdb'
import { createrestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <header>
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Selamat Datang di INDO RESTO</h1>
        <p class="hero__tagline">
          INDO RESTO adalah sebuah solusi untuk anda yang bingung cari restoran
          yang bagus dan terpercaya.
        </p>
      </div>
    </div>
    </header>
    
    <div class="content">
      <h2 class="content__heading">Favorite Restaurant</h2>
      <div id="restaurants" class="restaurants"></div>
      <div id="query" class = "resto_not_found"></div>
      <div id="DarkRestoAllItem" class = "DarkRestoAllItem"></div>
    </div>
      `
  },

  async afterRender () {
    const resto = await FavoriteRestoIdb.getAllResto()
    const restoContainer = document.querySelector('#DarkRestoAllItem')

    try {
      resto.forEach((restaurant) => {
        restoContainer.innerHTML += createrestaurantItemTemplate(restaurant)
      })
      if (resto.length === 0) {
        restoContainer.innerHTML += `
          <h3 class="resto_not_found"><i>List Restaurant in DarkResto not found!</i></h3>
      `
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default Favorite
