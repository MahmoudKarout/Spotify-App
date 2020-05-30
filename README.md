# Spotify Profile

> A web app for artist search

Built with a bunch of things, but to name a few:

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Create React App](https://github.com/facebook/create-react-app)


## Setup

1. [Register a Spotify App](https://developer.spotify.com/dashboard/applications) and add `http://localhost:8888/callback` as a Redirect URI in the app settings
2. Write the below commands in your terminal (replacing XXXX AND YYYY with your acutal client id and secret from the page where you registered your application)

```
export CLIENT_ID=XXXX
export REDIRECT_URI=YYYY

```
( you can use the spotify clientId from the enviroment variable to be more secure but for the sake of this test I kept my own clientId to make it simple for review)

3. `npm install`
4. `npm start`
5. go to `localhost:3000/login`

 

## Things I Fixed: 

1. The Urls are now readable
2. Added Footer
3. Paging is now more user friendly 
4. Fixed the design of both pages


