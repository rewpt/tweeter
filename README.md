# Tweeter

A twitter clone, allowing you to submit a tweet and have it be submitted and published from your local server.

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.

## In the Browser
- Navigate to your server `localhost:8080/`
- Create an account with a valid email and password

## Usage
- Click in the text box below "What are you humming about"
- Write your tweet

## Features
- Mobile friendly
  - Reduce the width of the page for mobile or expand it for a full desktop experience.
- Character counter
  - The character countdown from 140 will turn red if you exceed 140 characters.
- Error checking
  - Your tweets must be between 1 and 140 characters to be submitted or you will be prompted to alter your tweet upon submission


## Dependencies
  
  - body-parser 1.15.2
  - chance 1.0.2
  - express 4.13.4
  - md5 2.1.0

## Final Product
Home screen
!["Home screen"](https://github.com/rewpt/tweeter/blob/master/docs/Screen%20Shot%202021-09-21%20at%208.14.26%20pm.png?raw=true)
Writing and Submitting a tweet
!["Writing a tweet and submitting"](https://github.com/rewpt/tweeter/blob/master/docs/Screen%20Shot%202021-09-21%20at%208.15.26%20pm%202.jpeg?raw=true)
Tweet submitted and width reduced for an alternate, mobile friendly layout
!["Reducing screen width for alternative view"](https://github.com/rewpt/tweeter/blob/master/docs/Screen%20Shot%202021-09-21%20at%208.19.46%20pm.png?raw=true)