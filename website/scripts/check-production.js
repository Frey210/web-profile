// Production server: playwright-cli goto http://localhost:3005
// playwright-cli run-code --filename=scripts/check-production.js
async (page) => {
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const base = await page.evaluate(() => location.origin);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ['/', '/about', '/projects', '/experience', '/research', '/achievements', '/contact']) {
    const response = await page.goto(base + route);
    assert(response.status() === 200, `Route failed: ${route}`);
    assert(await page.getByText('Poses & actions', { exact: true }).count() === 0, 'Debug controls leaked into production');
    await page.getByRole('heading', { level: 1 }).waitFor();
  }
  assert((await page.request.get(base + '/favicon.ico')).status() === 200, 'Favicon failed');
  const visitor = page.locator('div[data-running]').last();
  await visitor.locator('canvas[data-pose]').waitFor();
  assert(await visitor.getAttribute('data-pose') === 'neutral', 'Unanchored visitor must not sit in mid-air');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => {
    const box = document.createElement('article');
    box.dataset.visitorPerch = '';
    box.style.cssText = 'position:fixed;top:350px;left:400px;width:550px;height:180px;border:1px solid cyan;background:#101b25;z-index:20';
    document.querySelector('main').append(box);
    document.querySelectorAll('main input,main textarea,main select,main button,main a').forEach(node => { node.style.display = 'none'; });
  });
  await page.clock.install();
  await page.clock.fastForward(23000);
  await page.locator('[data-pose="seat"]').waitFor();
  const perch = await visitor.boundingBox();
  assert(Math.abs(perch.y + perch.width * 773 / 1254 - 350) < 2, 'Seat anchor misses panel top');
  await page.evaluate(() => document.querySelector('[data-visitor-perch]').remove());
  await page.evaluate(() => window.dispatchEvent(new Event('scroll')));
  await page.clock.runFor(30);
  await page.locator('[data-pose="neutral"]').waitFor();
  await page.clock.resume();
  await page.goto(base + '/contact');
  await visitor.locator('canvas[data-pose]').waitFor();
  await visitor.getByRole('button', { name: 'Ask about Fariz' }).click();
  const chat = page.getByRole('region', { name: 'Portfolio chat preview' });
  await chat.waitFor();
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const box = await chat.boundingBox();
    assert(box.x >= 0 && box.x + box.width <= width, 'Chat overflow');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Page overflow');
    await page.screenshot({ path: `C:/Users/ASUS TUF/AppData/Local/Temp/opencode/production-${width}.png` });
  }
  await chat.getByRole('button', { name: 'Close portfolio chat' }).click();
  await visitor.getByLabel('Visitor settings').click();
  await visitor.getByRole('button', { name: 'Pause motion' }).click();
  await page.locator('[data-running="false"]').waitFor();
  assert(errors.length === 0, errors.join('\n'));
  return 'Production routes, favicon, hidden debug UI, responsive chat, pause and runtime errors checked';
}
