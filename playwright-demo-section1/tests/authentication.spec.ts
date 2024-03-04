import {test, expect} from '@playwright/test';

test('login with valid username and password should redirect to profile page',async({page}) => {
    await page.goto ('https://demoqa.com/login');
    await page.fill('id=userName','demoqa');
    await page.fill('id=password','Welcome1!');
    await page.click ('id=login');

    await page.waitForSelector('id=submit'); //waitForSelector = wait for display logout button
    const userName = await page.textContent('id=userName-value'); // const เก็บค่าในวงเล็บ = useName เพื่อไว้เรียกใช้ทีหลัง,textContent คืออ่านtext ก้อนนั้น
    await expect(user).toEqual('demoqa');

});