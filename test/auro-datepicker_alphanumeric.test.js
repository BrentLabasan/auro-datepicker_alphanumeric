import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-datepicker_alphanumeric.js';

describe('auro-datepicker_alphanumeric', () => {
  it('if auro-datepicker-alphanumeric\'s parent element doesn\'t have a depart date, set ADA\'s depart date to today\'s date', async () => {
    const el = await fixture(html`
      <div>
        <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
      </div>
    `);

    const date = new Date();

    const target = el.querySelector('auro-datepicker_alphanumeric');

    console.log("target", target)

    expect(parseInt(target.getAttribute('departDate_year'))).to.equal(date.getFullYear());
    expect(parseInt(target.getAttribute('departDate_month'))).to.equal(date.getMonth() + 1);
    expect(parseInt(target.getAttribute('departDate_day'))).to.equal(date.getDate());
  });

  it('if auro-datepicker-alphanumeric\'s parent element does have a depart date, ADA\'s depart date matches', async () => {
    const el = await fixture(html`
      <div departDate_year="2021" departDate_month="10" departDate_day="15">
        <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
      </div>
    `);


    const target = el.querySelector('auro-datepicker_alphanumeric');

    console.log("target", target)

    expect(parseInt(target.getAttribute('departDate_year'))).to.equal(2021);
    expect(parseInt(target.getAttribute('departDate_month'))).to.equal(10);
    expect(parseInt(target.getAttribute('departDate_day'))).to.equal(15);
  });

  it('input depart', async () => {
    const el = await fixture(html`
      <div departDate_year="2021" departDate_month="10" departDate_day="15">
        <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
        <auro-datepicker_calendar cssclass="testClass"></auro-datepicker_calendar>
      </div>
    `);

    const input = el.querySelector('auro-datepicker_alphanumeric').shadowRoot.querySelector('#inputDepart');
    input.click();

    const calendar = el.querySelector('auro-datepicker_calendar');
    expect(calendar.hasAttribute('isSelectionDepartDate')).to.equal(true);


    // TODO parent element received toggleShow
  });

  it('input return', async () => {
    const el = await fixture(html`
      <div departDate_year="2021" departDate_month="10" departDate_day="15">
        <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
        <auro-datepicker_calendar cssclass="testClass"></auro-datepicker_calendar>
      </div>
    `);

    const input = el.querySelector('auro-datepicker_alphanumeric').shadowRoot.querySelector('#inputReturn');
    input.click();

    const calendar = el.querySelector('auro-datepicker_calendar');
    expect(calendar.hasAttribute('isSelectionDepartDate')).to.equal(false);

  });

  // TODO check that this test works by bringing in datepicker-calendar and auro-dropdown and checking that datepicker-calendar syncs its date with this
  /*
  it.only('handleKeyPressDepart', async () => {
    const el = await fixture(html`
      <div departDate_year="2021" departDate_month="10" departDate_day="15">
        <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
        <auro-datepicker_calendar cssclass="testClass"></auro-datepicker_calendar>
      </div>
    `);

    const input = el.querySelector('auro-datepicker_alphanumeric').shadowRoot.querySelector('#inputDepart');

    // attempted to type characters 1 by 1 and then press Enter, but the text in the input doesn't change
    // input.dispatchEvent(new KeyboardEvent('keydown', { 'key': '1' }));
    // console.log("input", input);
    // input.dispatchEvent(new KeyboardEvent('keydown', { 'key': '/' }));
    // console.log("input", input);
    // input.dispatchEvent(new KeyboardEvent('keydown', { 'key': '1' }));
    // console.log("input", input);
    // input.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));

    // input.click();
    
    // setTimeout(function(){ console.log("3 seconds have passed"); }, 3000);

    // const calendar = el.querySelector('auro-datepicker_calendar');
    // expect(calendar.hasAttribute('isSelectionDepartDate')).to.equal(false);
  });
  */

  // it('', async () => {

  // });
  // it('', async () => {

  // });
  // it('', async () => {

  // });
  // it('', async () => {

  // });



  // it('auro-datepicker_alphanumeric is accessible', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker_alphanumeric cssclass="testClass"></auro-datepicker_alphanumeric>
  //   `);

  //   await expect(el).to.be.accessible();
  // });

  // it('auro-datepicker_alphanumeric custom element is defined', async () => {
  //   const el = await !!customElements.get("auro-datepicker_alphanumeric");

  //   await expect(el).to.be.true;
  // });
});
