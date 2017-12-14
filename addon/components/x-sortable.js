import Component from '@ember/component';
import layout from '../templates/components/x-sortable';
import Sortable from 'Sortable';
import { assign } from '@ember/polyfills';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);

    this.set('sortable', Sortable.create(
      this.get('element'),
      assign({}, this.get('options'))
    ));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('sortable').destroy();
  }
});
