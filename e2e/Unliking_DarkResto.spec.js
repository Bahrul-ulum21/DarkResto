/* eslint-disable no-undef */
const assert = require('assert')

Feature('Unliking DarkResto')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked DarkResto', ({ I }) => {
  I.see('List Restaurant in DarkResto not found!', '.resto_not_found')
})

Scenario('Unliking DarkResto', async ({ I }) => {
  I.see('List Restaurant in DarkResto not found!', '.resto_not_found')
  I.amOnPage('/')

  I.seeElement('.restaurant-item h3')
  const DarkRestoFirst = locate('.restaurant-item h3').first()
  const DarkRestoName = await I.grabTextFrom(DarkRestoFirst)
  I.click(DarkRestoFirst)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.seeElement('.DarkRestoAllItem')
  const DarkRestoFirstLike = locate('.restaurant-item h3').first()
  const DarkRestoNameLike = await I.grabTextFrom(DarkRestoFirstLike)
  I.click(DarkRestoFirstLike)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('List Restaurant in DarkResto not found!', '.resto_not_found')
  assert.strictEqual(DarkRestoName, DarkRestoNameLike)
})
