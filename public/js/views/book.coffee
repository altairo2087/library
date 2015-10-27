@app or= {}

app.BookView = Backbone.View.extend
  tagName: 'div'
  className: 'book-container'
  template: Handlebars.compile $('#book-template').html()
  events:
    'click .delete': 'deleteBook'
  render: ->
    @$el.html @template @model.toJSON()
    @
  deleteBook: ->
    @model.destroy()
    @remove()