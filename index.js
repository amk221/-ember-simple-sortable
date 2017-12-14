/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-simple-sortable',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/sortablejs/Sortable.js');
  }
};
