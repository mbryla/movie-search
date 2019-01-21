# movie-search
Simple movie search app using OMDb API

# run
This project was created as a React app using 'create-react-app'. To preview it, clone the repository, run `npm install` and then `npm run start`. The application should open up a browser window. For production use, a bundle has to be created using `npm run build` and then served with a static file server of your choice, ex. Nginx.

# what is left to be implemented
This project was created in 3 hours as a proof of concept on how such an application could work. There's a lot to be done concerning both code quality and features development, for instance: it was developed on Chrome 71.0 and not tested on other browsers.

## code quality improvements
- add unit tests
- introduce ESlint
- refactor code
- test against different browsers
- accessibility improvements

## features to be completed
- create a preview page allowing you to select a movie card and see its details
- use pagination - when the search has been initiated and there is more than 10 results, browse through all the pages. The API module is already prepared to do so, just need to code it in actions.js
- display suggestions: when the user is typing, requests can be sent to the API to request movies that match the title that has been entered so far; those movies can be displayed as suggestions for faster selection - here we can use just a single page