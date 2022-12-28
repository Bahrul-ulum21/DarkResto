import UrlParser from '../../routes/url-parser'
import restoDbSource from '../../data/resto-DbSource'
import { createrestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const Detail = {
  async render () {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await restoDbSource.detail(url.id)

    const restoContainer = document.querySelector('#restaurant')
    restoContainer.innerHTML = createrestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
  }
}

export default Detail
