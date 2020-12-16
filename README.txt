#TMDB Movies API

##Added Views
Created 4 new views in the app,
*(Most Popular) which sends a request and fills the page with most popular movies
![Image of most popular]
()
*(Now Playing) which sends a request and fills the page with movies that are playing in the cinemas now
![Image of now playing]
()
*(Top Rated) which sends a request and fills the page with movies that are highest rated
![Image of top rated]
()
##Favourites Page
All these movies can be added to the favourites list
![Image of favourite page]
()

Every movie from upcoming that is added to the watch list is displayed here. Works just like the favourites page but a review can be written right away from here.
![Image of watch list]
()

![Image of review]
()

##Movie Details Page
Created More movie details in the details page. Added Movie Budget which displays the amount spent on the movie and Movie Status if 
the movie was released or not.
![Image of movie details]
()

##TMDB Endpoints
###Credits
Added another TMDB endpoint of credits and extracted movie crew and the movie cast and added the following details to the movie details page.
![Image credits]
()

###Similar Movies
Added another TMDB endpoint for similar movies which takes the current movies id and runs a fetch for similar movies and displays them.
![Image Similar]
()

###Movie Provider
Added another TMDB endpoint for movie providers. In the movie details it will display where the movie can be purchased if its available in Ireland with a link to the tmdb website for the available places to purchase. If the movie is unavailable in Ireland no info will be displayed.
![Image Providers]
()

###Hyperlinking
Added Data hyperlinking in the movies details page with a link to where to buy the movie on the tmdb website.
![Image hyperlink]
()



