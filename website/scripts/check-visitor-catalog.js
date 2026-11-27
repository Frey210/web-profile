// Dev server required: playwright-cli run-code --filename=scripts/check-visitor-catalog.js
async (page) => {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const base = await page.evaluate(() => location.origin);
  await page.goto(`${base}/contact`);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const visitor = page.locator('[data-pose]').filter({ has: page.locator('[data-character]') }).last();
  await visitor.locator('details').last().evaluate(node => { node.style.display = 'block'; });
  await visitor.locator('summary').click();
  const select = visitor.getByLabel('Visitor pose');
  for (const pose of await select.locator('option').evaluateAll(nodes => nodes.map(node => node.value))) {
    await page.evaluate(pose => { document.body.dataset.checkPhase = pose; }, pose);
    await select.selectOption(pose);
    await visitor.locator('canvas').waitFor();
    await visitor.locator(`canvas[data-pose="${pose}"]`).waitFor();
    assert(await visitor.locator('canvas').evaluate(node => node.getContext('2d').getImageData(0, 0, 512, 512).data.some((value, index) => index % 4 === 3 && value > 0)), `Empty pose: ${pose}`);
  }
  await visitor.getByRole('button', { name: 'Preview teleport' }).click();
  await page.evaluate(() => { document.body.dataset.checkPhase = 'teleport'; });
  assert(await visitor.locator('svg').count() === 2, 'Teleport needs arrival and departure');
  await visitor.getByRole('button', { name: 'Ask about Fariz' }).click();
  const chat = page.getByRole('region', { name: 'Portfolio chat preview' });
  await page.evaluate(() => { document.body.dataset.checkPhase = 'chat'; });
  await chat.waitFor();
  assert(await visitor.getAttribute('data-pose') === 'seat', 'Chat must use ledge pose');
  await chat.getByLabel('Your question').fill('What has Fariz built?');
  await chat.getByRole('button', { name: 'Send', exact: true }).click();
  assert(await chat.getByRole('log').getByText('What has Fariz built?', { exact: true }).count() === 1, 'Message missing');
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    const bounds = await chat.boundingBox();
    assert(bounds.x >= 0 && bounds.x + bounds.width <= width, 'Chat overflows viewport');
    await page.screenshot({ path: `C:/Users/ASUS TUF/AppData/Local/Temp/opencode/visitor-chat-${width}.png` });
  }
  await chat.getByLabel('Your question').focus();
  await page.keyboard.press('Escape');
  await chat.waitFor({ state: 'hidden' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(() => { document.body.dataset.checkPhase = 'reduced'; });
  await page.waitForFunction(() => [...document.querySelectorAll('[data-running]')].every(node => node.dataset.running === 'false'));
  return 'Visitor catalog, teleport, local chat, responsive layout and reduced motion passed';
}
