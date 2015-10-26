@app or= {}
$ ->
  books = [
    {
      title: 'Javascript'
      author: 'Douglas'
      releaseDate: '2008'
      keywords: 'Programming'
    }
    {
      title: 'The little book'
      author: 'Alex'
      releaseDate: '2012'
      keywords: 'Coffee'
    }
    {
      title: 'Scala'
      author: 'Cay'
      releaseDate: '2013'
      keywords: 'Programm'
    }
    {
      title: 'American'
      author: 'Bret'
      releaseDate: '1991'
      keywords: 'Novel'
    }
    {
      title: 'Eloquent'
      author: 'Haver'
      releaseDate: '2011'
      keywords: 'Programming'
    }
  ]
  new app.LibraryView books