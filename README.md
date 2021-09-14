# Clean My Room

> Clean My Room is the solution to making hotel services more controlled and efficient for both the hosts and clients.

## Motivation

From my experience of staying at hotels, it was sometimes very annoying to have to remember to put up the 'Do Not Disturb' sign and sometimes I would only want towels or blankets changed but there was no way to tell the room cleaner that unless I was in the room when they come by.

## Technologies Used

- React
- Node
- Express
- PostgreSQL
- Webpack

## Features
  
- Authentication: A user can create a new account, login, and logout of the app. They will have access to different functionality depending on account type (client | server).
- Request Form: Clients can submit that will include information on a scheduled time for room cleaning, their special preferences, and the option to give a tip.
- Requests: Clients will be able to view the status of their requests and cancel them. Servers will be able to view and accept open requests. Servers will also be able to view requests they have completed along with extra information such as the times at which they have accepted, started and completed their task and the amount of tip received.

## Usage

To run this repo, you will need to install dependencies and run appropriate scripts.

## Requirements

- Node 6.9.0
- npm
- PostgreSQL

## Development

- First update env/config.js with PostgreSQL login information

- Then execute the code below to install dependencies, start webpack, & start the server.

```
npm install
npm run react-dev
npm start
```
