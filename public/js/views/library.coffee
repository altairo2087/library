@app or= {}

app.LibraryView = Backbone.View.extend
  el: '#books'
  events:
    'click #add': 'addBook'
  initialize: (initialBooks)->
    @collection = new app.Library()
    @collection.fetch
      reset: true
    @render()
    @listenTo @collection, 'add', @renderBook
    @listenTo @collection, 'reset', @render
  render: ->
    @collection.each (item)->
      @renderBook item
    , @
  renderBook: (item)->
    bookView = new app.BookView
      model: item
    @$el.append bookView.render().el
  addBook: (e)->
    e.preventDefault()
    formData = {}
    $ '#add-book div'
      .children 'input'
      .each (i,el)->
        if $(el).val() isnt '' then formData[el.id] = $(el).val()
    @collection.create formData