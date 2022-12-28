/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking DarkResto')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty like DarkResto', ({ I }) => {
  I.seeElement('#query')
  I.see('List Restaurant in DarkResto not found!', '.resto_not_found')
})

Scenario('liking DarkResto', async ({ I }) => {
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
  const likeDarkRestoName = await I.grabTextFrom('.restaurant-item h3')
  assert.strictEqual(DarkRestoName, likeDarkRestoName)
})
