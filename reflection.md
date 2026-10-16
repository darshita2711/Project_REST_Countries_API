# Reflection: REST Countries Explorer

Building this app started out straightforward, but I definitely hit a few speedbumps along the way. I wanted to keep my code clean by splitting everything into ES modules (`script.js`, `api.js`, `ui.js`, and `theme.js`), which really helped keep my files organized once I got the hang of how imports and exports work.

The biggest headache I ran into was getting the search bar to work. I kept typing country names and getting zero results back in the console. After logging the data object, I realized the API used `country.names.common` (plural `names`) instead of singular `name`, which threw everything off. Once I tracked that down and added optional chaining (`?.`) to protect against missing data, the cards finally loaded. 

Another tricky challenge was getting the region filter to work smoothly. Initially, my region dropdown wasn't filtering anything correctly because I hadn't mapped or structured the region handling right in the API/filtering logic. Some regions had formatting differences or case sensitivities, so I had to make sure the filter logic cleanly compared the dropdown values against the `country.region` properties.

Overall, this project taught me a lot about real-world API data and handling DOM states. It was super satisfying when everything finally clicked into place, and I feel a lot more confident writing modular JavaScript now.