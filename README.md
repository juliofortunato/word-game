# Word Game

This is a [Wordle](https://www.nytimes.com/games/wordle/index.html)-like game
built with React.

![Demo showing the word game](docs/word-game-demo.gif)

## Demo

You can check the fully-working demo at [word-game.juliofortunato.dev](https://word-game.juliofortunato.dev).

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c32844f-c0ff-4182-bf11-07a13e64fb9a/deploy-status)](https://app.netlify.com/sites/effervescent-swan-26ecf2/deploys)

## How to play
The goal of the game is to figure out a randomly-choosed specific word in six 
guesses or fewer.

After entering the first guess, you get some feedback about 
the letters of your word:

- Gray letters are not part of the word
- Yellow letter are part of the word, but are misplaced
- Green letters are part of the word and are on their correct position
