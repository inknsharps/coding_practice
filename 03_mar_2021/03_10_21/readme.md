# API Calls Testing

This is some initial work on some API calls to test what information and parameters can be passed through certain APIs.

## APIs Tested and Vetoed

http://nypl.github.io/menus-api/ - Requires a token, but token acquisition requires an email to the NYPL email in the documentation. Kinda meh and niche API anyway.
http://www.recipepuppy.com/about/api/ - There is no 'Access-Control-Allow-Origin' header for this and will require a CORS proxy. Messy and there's better options, so no bueno.