// Run with dev server active: playwright-cli run-code --filename=scripts/check-capri.js
async (page) => {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const base = await page.evaluate(() => location.origin);
  await page.goto(base);
  const character = page.locator('[data-mascot-home] button[data-character]');
  await character.waitFor();
  await page.waitForFunction(() => {
    const canvas = document.querySelector('[data-mascot-home] canvas');
    return canvas?.getContext('2d').getImageData(0, 0, 512, 512).data.some((value, index) => index % 4 === 3 && value > 0);
  });
  assert(await page.locator('button[data-character]:visible').count() === 1, "Home must show exactly one visitor");
  await character.focus();
  await page.keyboard.press("Enter");
  assert(await page.getByText("Hey! I was getting comfortable.").isVisible(), "Reaction missing");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.waitForFunction(() => {
    const canvas = document.querySelector('[data-mascot-home] canvas');
    return canvas?.dataset.frame && canvas.dataset.frame !== "rest";
  });
  assert(!await character.evaluate(node => /capri/i.test(node.outerHTML)), "Character name must not appear in rendered rig");
  await page.locator('[data-mascot-home]').getByLabel("Visitor settings").click();
  await page.locator('[data-mascot-home]').getByRole("button", { name: "Pause motion" }).click();
  assert(await page.locator('[data-mascot-home]').getByRole("button", { name: "Resume motion" }).getAttribute("aria-pressed") === "true", "Pause state missing");
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow at ${width}px`);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert(await page.locator('[data-mascot-home]').getAttribute("data-running") === "false", "Reduced motion must disable animation playback");
  await page.goto(`${base}/contact`);
  await page.getByRole("button", { name: "Interact with digital visitor" }).scrollIntoViewIfNeeded();
  const visitor = page.getByRole("button", { name: "Interact with digital visitor" });
  await visitor.click();
  assert(await page.getByText("Hey! I was getting comfortable.").isVisible(), "Visitor reaction missing");
  await page.getByLabel("Visitor settings").click();
  await page.getByRole("button", { name: "Hide visitor" }).click();
  await visitor.waitFor({ state: "hidden" });
  assert(!await visitor.isVisible(), "Hide must remove visitor from interaction");
  await page.getByRole("button", { name: "Show visitor" }).click();
  await visitor.waitFor({ state: "visible" });
  assert(await visitor.isVisible(), "Restore missing");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  const box = await visitor.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(50, 250, { steps: 10 });
  await page.mouse.up();
  assert((await visitor.boundingBox()).x < 200, "Dragging must reposition visitor");
  assert(await visitor.locator("canvas").evaluate(node => node.getContext("2d").getImageData(0, 0, 512, 512).data.some((value, index) => index % 4 === 3 && value > 0)), "Sprite canvas must contain decoded artwork");
  return "Capri checks passed: greeting, pause, mobile/desktop width, reduced motion, contact context.";
}
