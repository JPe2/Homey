'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

  const card = this.homey.flow.getActionCard('log-something-to-the-console');
    card.registerRunListener(async () => {
      this.log('Hello World');
    });
 }

}

module.exports = MyApp;
