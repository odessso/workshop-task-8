# workshop-task-8

Web URL: https://odessso.github.io/workshop-task-8/

Using Application Programming Interfaces (APIs).

## Notes
- Although the image based API's were interesting, since I wanted to include a user input factor I decided I would work with text again. I wanted to pull quotes from a quote based API that would relate to the word that the user input into the search engine. I used the API https://quote-garden.onrender.com/api/v3/quotes?query= and added a funtion so that a quote is drawn off of the word the user inputs.
- also added a "no relevant quote found" funtion that would be called if the search engine could not retrieve any quote with the desired word.

## Problems
- I wanted to do a lot more with multiple APIs for example generate an image as well as a quote, however I was finding it really difficult to implement as the code is getting more complicated. I would finally get my code to work and then try to add a new API and it would stop the whole code from working. Even trying to add a randomisaiton of the background colour was then not allowing the quote to spawn properly.
- I had trouble with the quotes spawning so that the text went off the side of the canvas, I found a way to correct this by splitting the quote line up after it got to a certain amount of words. This allowed for a sort of "wrap text" funtion.
