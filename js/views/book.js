// Generated by CoffeeScript 1.10.0
(function() {
  this.app || (this.app = {});

  app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'book-container',
    template: Handlebars.compile($('#book-template').html()),
    events: {
      'click .delete': 'deleteBook'
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteBook: function() {
      this.model.destroy();
      return this.remove();
    }
  });

}).call(this);

//# sourceMappingURL=book.js.map
