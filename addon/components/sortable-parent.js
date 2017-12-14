import Component from '@ember/component';
import layout from '../templates/components/sortable-parent';
import Sortable from 'Sortable';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    this.set('sortable', Sortable.create(
      this.get('element'),
      this.get('options')
    ));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('sortable').destroy();
  }
});
