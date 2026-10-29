import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = '/home/avatar/.gemini/antigravity-ide/brain/6abb10f2-f0d8-408f-afdb-47300917ba47/scratch/comparison';
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  // Track console and errors
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));

  // --- 1. Desktop Test ---
  console.log('Testing Desktop 1440x900...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });

  // Full page screenshot
  await page.screenshot({ path: path.join(outDir, 'impl_desktop_fullpage.png'), fullPage: true });
  console.log('Saved impl_desktop_fullpage.png');

  // --- 2. Test Experience Selector ---
  console.log('Testing Experience Selector...');
  const expButtons = await page.$$('.xp__item');
  console.log(`Found ${expButtons.length} experience selector tabs.`);
  if (expButtons.length >= 2) {
    // Click second role (Instructor)
    await expButtons[1].click();
    const activePanelText = await page.$eval('.job[data-active="1"]', el => el.innerText);
    console.log('Active panel after click contains Instructor:', activePanelText.includes('Backend Instructor'));
    await page.screenshot({ path: path.join(outDir, 'impl_experience_switched.png') });
  }

  // --- 3. Test Project Modal ---
  console.log('Testing Project Modal...');
  const firstProjectBtn = await page.$('.case__go');
  if (firstProjectBtn) {
    await firstProjectBtn.click();
    const modalVisible = await page.$eval('#case-dialog', el => el.open);
    console.log('Modal is open:', modalVisible);
    const modalTitle = await page.$eval('#dialog-title', el => el.innerText);
    console.log('Modal project title:', modalTitle);
    await page.screenshot({ path: path.join(outDir, 'impl_modal_open.png') });

    // Close modal
    const closeBtn = await page.$('#dialog-close-btn');
    await closeBtn.click();
    const modalClosed = await page.$eval('#case-dialog', el => !el.open);
    console.log('Modal is closed:', modalClosed);
  }

  // --- 4. Test Theme Switcher ---
  console.log('Testing Theme Switcher...');
  const themeBtn = await page.$('#theme-toggle');
  await themeBtn.click();
  const theme = await page.$eval('html', el => el.getAttribute('data-theme'));
  console.log('Theme after click:', theme);
  await page.screenshot({ path: path.join(outDir, 'impl_dark_mode.png') });

  // Switch back to cream
  await themeBtn.click();

  // --- 5. Mobile Viewport Test ---
  console.log('Testing Mobile 390x844...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outDir, 'impl_mobile_fullpage.png'), fullPage: true });
  console.log('Saved impl_mobile_fullpage.png');

  // Test Mobile Drawer
  const burger = await page.$('#burger-btn');
  await burger.click();
  const drawerOpen = await page.$eval('html', el => el.hasAttribute('data-drawer'));
  console.log('Mobile drawer is open:', drawerOpen);
  await page.screenshot({ path: path.join(outDir, 'impl_mobile_drawer_open.png') });

  // --- 6. Reference Site Fullpage Capture for Side-by-Side Comparison ---
  console.log('Capturing Reference Site Fullpage...');
  try {
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto('https://www.aahil-khan.xyz/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: path.join(outDir, 'ref_desktop_fullpage.png'), fullPage: true });
    console.log('Saved ref_desktop_fullpage.png');

    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('https://www.aahil-khan.xyz/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: path.join(outDir, 'ref_mobile_fullpage.png'), fullPage: true });
    console.log('Saved ref_mobile_fullpage.png');
  } catch (err) {
    console.warn('Reference capture note:', err.message);
  }

  await browser.close();
  console.log('All tests and captures completed successfully.');
}

run().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
