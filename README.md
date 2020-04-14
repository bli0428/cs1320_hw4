# Assignment4 Concentrator

## Project Description
<!-- you can include known bugs, design decisions, external references used... -->

I used dynamic text resizing on the messages in the rooms. I also opted to move all database related functionality 
to its own file in database.js so that it wouldn't mix with server code and become messy. In addition, I added a frontend
home.js and room.js file to handle all the client facing functionality.

## Ethics Questions

### Question 1

> Give two possible chatroom moderation features and the reasons that you should implement each one

One possible chatroom moderation feature is the inclusion of a "report post" button. This wasn't mentioned as one of the
features in the article, but reporting posts would allow users in the chat to report trolls and toxic posting, because
while trolls might be commonly found in chatrooms, so can people who care about the community being fostered in the chatroom.
These people who report the trolls can help reduce the amount of searching a moderator has to do, and therefore allow for 
less moderators.

Another possible chatroom moderation feature is the silent listener period. In addition to how the article mentions how people
who are banned have to wait through the silent period again, there's a sense of investment that the silent listener period
brings. People have to invest their time in order to be added to the chatroom. Therefore, toxic posters would have less of a
motivation to post harmful content due to the fact that they would have wasted the time they spend waiting to be added to the
room.

<!-- Put your answer to question 1 here -->

## Database Setup

<!-- required if you use custom MySQL setup instead of the MySQL database provided or if you use other databases like SQLite, PostgreSQL... -->