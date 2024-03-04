import {test} from '@playwright/test';

test('demo page navigate',async({page}) => {
    await page.goto ('https://demoqa.com/');
    await Promise.all([
        page.waitForNavigation({waitUntil : 'load'}),//ควรใช้ตอน click link and button submitform ต่างๆ แล้วมีการredirec ไปหน้าต่างใหม่
        page.click('text=Elements')
    ]);
    
    

    test.setTimeout(0);
    await page.pause();
});