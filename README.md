# Hey

This is a little side project I'm working on with a friend. Maybe it will go somewhere, maybe it won't. It was bootstrapped with create-react-app version 2.1.1, with the typescript flag.

## To run:

It shouldn't be too hard.

-   `$ npm install`
-   `$ npm start`

## To deploy to github pages

found at http://vcolavin.com/nature-of-the-beast/

-   `$ npm run deploy`

### Todo list

-   [x] keep cursor at the end of the prompt when moving through history
-   [x] use Redux instead of a POJO
-   [x] fix issue where QuietForest is appearing as undefined in neighbors
-   [x] tab completion
-   [ ] tests???? especially for the utilities
-   [x] Make the console writing permission revocable, or make running utilities cancellable. E.g. we don't want `whoami` to run through its whole dialog if we've `cd`'d to another location
-   [x] make input prompt change based on location
-   [x] get text to wrap correctly on long passages
-   [ ] cooler terminal styling (e.g. https://css-tricks.com/old-timey-terminal-styling/)
-   [ ] date utility (probably replicate `date +%s`)
-   [ ] uptime utility (this could be a source of spooky mysteries)
-   [x] Switch typescript back to strict mode
-   [ ] Use browser APIs to change some things about the story (e.g. sound, location, camera, time)
-   [ ] Create an ambient ASCII sound visualizer.
-   [ ] introduce concept of aliased utilities
-   [x] make locations a little more complicated. can they behave anything like the "whoami" tool?
-   [ ] `$ cd ..` should work
-   [ ] some sort of CMS / authorship solution. it's no fun writing JSON
-   [ ] create richer features for locations... interactivity, items, different descriptions based on state
-   [ ] create usable items and an inventory. e.g. "use key on lock"
-   [][per redux docs](https://redux.js.org/basics/reducers#note-on-relationships), don't store relations as actual objects (e.g. `location.neighbors: Location[]`), but IDs (e.g. `location.neighborSlugs: string[]`), and create get/set helpers in place
