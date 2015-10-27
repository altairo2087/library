// Generated by CoffeeScript 1.10.0
(function() {
  this.app || (this.app = {});

  app.LibraryView = Backbone.View.extend({
    el: '#books',
    events: {
      'click #add': 'addBook'
    },
    initialize: function(initialBooks) {
      this.collection = new app.Library();
      this.collection.fetch({
        reset: true
      });
      this.render();
      this.listenTo(this.collection, 'add', this.renderBook);
      return this.listenTo(this.collection, 'reset', this.render);
    },
    render: function() {
      return this.collection.each(function(item) {
        return this.renderBook(item);
      }, this);
    },
    renderBook: function(item) {
      var bookView;
      bookView = new app.BookView({
        model: item
      });
      return this.$el.append(bookView.render().el);
    },
    addBook: function(e) {
      var formData;
      e.preventDefault();
      formData = {};
      $('#add-book div').children('input').each(function(i, el) {
        if ($(el).val() !== '') {
          return formData[el.id] = $(el).val();
        }
      });
      return this.collection.create(formData);
    }
  });

}).call(this);

//# sourceMappingURL=library.js.map
