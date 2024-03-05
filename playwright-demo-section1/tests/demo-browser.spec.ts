import { test, expect, firefox, chromium } from "@playwright/test";

test("browser test", async ({ page }) => {
  const firefoxBrowser = await firefox.launch({ headless: false });
  const context1 = await firefoxBrowser.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.google.com");
  const page2 = await context1.newPage();
  await page2.goto("https://www.facebook.com");


  const chromeBrowser = await chromium.launch({ headless: false });
  const context2 = await chromeBrowser.newContext();
  const page3 = await context2.newPage();
  await page3.goto("https://www.qahive.com");

  test.setTimeout(0);
  await page3.pause();
});
