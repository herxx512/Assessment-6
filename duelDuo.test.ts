
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Click Draw button display the div with id = choices', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(5000)

    const choices = await driver.findElement(By.id('choices'))
    let displayed = await choices.isDisplayed() 
    expect(displayed).toBe(true)
});

test('Click Add to Duo button display the div with id = player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()

    await driver.sleep(7000)

    const player = await driver.findElement(By.id('player-duo'))
    let displayed = await player.isDisplayed() 
    expect(displayed).toBe(true)
});