import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    dragged() {
      console.log(...arguments);
    }
  }
});
