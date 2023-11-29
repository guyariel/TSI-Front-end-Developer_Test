# Sports Events Web_Page 👨🏽‍💻

## What is it ? 🤔

It's a web project that allows anyone to find out about sporting events (soccer, basketball, etc.) and, what's more, get important information about these events, such as location, ticket prices (if any) and much more.


## Features 🛠

- Sports Events list
- Filtering and Sorting Events 
- Sport Event API Integration
- Search Bar in order to use the API 
- Visual Ticket reservation or purchase system


## Tech Stack 🏋🏽‍♂️

**Frontend:** HTML, CSS,

**API Integration:** Javascript

**Filter Events Integration:** Javascript



## API Reference 🚦

I used as API "balldontlie" an API which is based on the NBA games.

https://www.balldontlie.io/home.html#introduction

#### How it works 🤔

In order to use the API users need to give an ID, spacially an integer in the search bar, and click on the "GO" button to fetch the event data from the API event. 

#### Get item

```http
  GET https://www.balldontlie.io/api/v1/games/<ID>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`      | `integer` | The ID of the game to retrieve |



