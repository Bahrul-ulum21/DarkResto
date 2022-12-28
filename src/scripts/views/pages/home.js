import restoDbSource from '../../data/resto-DbSource'
import { createrestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <header>
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Selamat Datang di Aplikasi Kami</h1>
        <h1 class="hero__tagline">
        Silahkan Cari Restourant Kesukaan Anda
        </h1>
      </div>
    </div>
    </header>

      <div class="content">
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurant = await restoDbSource.home()

    const restoContainer = document.querySelector('#restaurants')
    restaurant.forEach((restaurant) => {
      restoContainer.innerHTML += createrestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
