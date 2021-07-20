import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-datepicker_alphanumeric.js';

describe('auro-datepicker_alphanumeric', () => {
  it('sets the CSS class on auro-datepicker_alphanumeric > div element', async () => {
    const el = await fixture(html`
      <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-datepicker_alphanumeric is accessible', async () => {
    const el = await fixture(html`
      <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-datepicker_alphanumeric custom element is defined', async () => {
    const el = await !!customElements.get("auro-datepicker_alphanumeric");

    await expect(el).to.be.true;
  });
});
