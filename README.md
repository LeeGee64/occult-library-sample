# Library of Solomon 

An elegent library app designed to ease exploration into the world of Spiritualism and the Occult. Users will be able to look through a wide selection of books with links to GoodRead where they can learn more about their selections and make purchases.


## The Process

This project was created using the following technologies:- HTML, JAVASCRIPT, CSS, NODE.js, Json, Next.Js, MongoDB. Thanks to Next.Js's ability to integrate well and call data from MongoDB, I was able to create a flat Database in Mongo using book information taken from GoodReads. Designing the app's current features (random book select, directory display, dynamic search) was then a matter of manipulating statically generated props on the client's side. The book cover images are stored clientside for now.


## Optimization

* *Image Hosting:* Right now, the book cover images are stored in a public asset file just for access ease. This is a fine solution now while the book selection is relatively low, but will become untenable as the library grows in size and users. Finding an image hosting backend will be key for the app to scale effectively. 
* *Dynamic Page Creation:* Links to GoodReads are an effective way for users to find out more information about the books that interest them. The app currently displays basic information once a user expands a book card (e.g. Authors, Publishing Date, etc). With dynamic pages, I would be able to include more information about each book and allow users to link to specific books via URL. I also want to add modal displays just for aesthethic purposes
* *User Features:* By allowing users to create personal accounts, I will be able to give them a more robust experience through things like logging their vieiwng history, allowing them to mark their favorite selections, or even creating wishlists for later purchases. Configuring authorization in Next.Js is a straightforward and well-documented process. It's matter of finding out what works best. 


## Write-up from MongoDB 

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

