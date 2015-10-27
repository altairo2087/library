@app or= {}
app.Library = Backbone.Collection.extend
  model: app.Book,
  url: 'http://localhost:8090/api/books'