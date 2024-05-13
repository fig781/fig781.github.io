Was not really sure what I wanted to write about, so I thought I would just write about a few of my thoughts I had this week.

**Heroku's free tier**
I just switched the front end for my Vue app [myCodingStats](https://my-coding-stats-com-client.vercel.app/) to Vercel. It was originally hosted on Heroku. On the free tier of Heroku, if a site does not get any requests for 30 minutes, it will sleep. this results in a five second spin up time when someone goes to the site. It is definitely not ideal for the frontend of your site. I am keeping the api hosted on Heroku though. It seems fine if there is a bit of a delay when you first login, as long as you are able to get to the frontend quickly. If I was to remake the whole site, I would likely use Vercel's Edge and serverless functions for my api.

**Next.js build time**
I worked on my main three projects this week, one written in React, one in Vue, and another in Next. I always serve them locally using whatever command I have in package.json for 'dev'. After switching back and forth between them, I was amazed by how fast Next ran. It would take a few seconds, as opposed to a few minutes. I know that the recent version of the Next compiler was written in Rust, so I am guessing that is why it is so fast. If I was starting a new project, I would likely choose Next, for this reason and others.

I did a quick comparison of the three projects. Here was the time it took to build the project after serving them locally in 'dev' mode:

- Vue: 01:36
- React: 01:45
- Next: 00:02
