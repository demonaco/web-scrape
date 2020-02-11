# web-scrape

## Technologies used:
Visual Studio Code, Cheerio, Node.js, Express, Handlebars, Heroku, Axios, Morgan, Mongoose, MongoDB.

## Summary:
This Wallstreet Journal scrape page was a demonstration of how to scrape the web for information given a parent element as input into a function and stacking on methods to find children elements from that parent. It was also another excercise in seeing how objects can be used to store and reference data. Once the information was scraped via Axios, the MongoDB database was set up to create a schema that would be inserted into the database that would keep track of the title, body, and "note" objects for future reference. This "note" object is used in particular to save notes or comments that readers give to a story. This note is tied to the ID assigned to the database entry. On-click listening events performed functions given what was clicked. For instance, if a paragraph tag was clicked, then the article's title would expand over to the comments section where the reader can leave a comment that will be saved and retrieved from the database. 

## What I learned:
1. The importance of objects and the sheer amount of information that they can not only contain, but can also retrieve. Objects are super practical as a data structure and can be used (in my mind mostly easy) to retrieve complex data in a readable format (JSON).
2. Being able to scrape information from another site and save it in an object as data. This opens up a lot of potential to gather resources across the web quickly.
3. How to use a "ref" key value pair to pass along data to be saved in the database (I.E. "Note).
4. Handlebars requires a specific folder structure to be in place. In the beginning I couldn't understand why my main.handlebars template would not load. 
5. The "res.render" and "res.send" methods to render to send information after performing a function and being able to handle data in a specific way.
6. MongoDB Schema structures. Once you set up a local host path in your file Robo T3 will pick up on this and your database is created really easily (much preferred in my opinion to MySQL which seems more "manual" and "hands-on).

## What I would like to learn:
1. Both my tutor and I could not figure out why we were unable to get information in our database to display when using {{#each}}. We were referencing the object on scrape.js correctly. In fact, he is a fellow instructor, and even though our solution matched the solution document he had, Handlebars would not display the information correctly. I'd like to understand why this is.

## Steps:
1. Went through assignments under the Mongo section to refamiliarize myself with database functionality.
2. Grabbed usable Bootstrap components .
3. Went through the Mongo scraper assignment and used it as a guide for scraping elements and for getting information from the database based on each unique ID in the database.
4. Casually watched YouTube videos on scraping with Node.js and Cheerio.
5. Coded my crawler, DB, and schemas by following the last Mongoose class assignments.
6. Added further CSS to stylize.
7. Took screenshots and gifs of working application.

## Sources:
My tutor Ryan, class assignments.

# Screenshots

## Scrolling down application with crawled news articles
![webscraper](https://github.com/demonaco/web-scrape/blob/master/public/assets/images/scraper.gif)

## When a reader clicks on an article, the title and a comment field box will appear in the "Comments Section".
![Article Click](https://github.com/demonaco/web-scrape/blob/master/public/assets/images/Screen%20Shot%202020-02-10%20at%204.21.08%20PM.png)

## User comment that is saved and retrieved in the database.
![User comment](https://github.com/demonaco/web-scrape/blob/master/public/assets/images/Screen%20Shot%202020-02-10%20at%204.22.05%20PM.png)