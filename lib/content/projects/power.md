---
title: "Project POWER"
date: "2022-03"
intro: "How and Why I built this website..."
tech: "NextJS, ReactJS, SASS"
tags: "Web Application, FrontEnd"
---

# Project POWER - [Repo](https://github.com/YeluriKetan/project-POWER)

> **POWER** stands for **P**ersonalized **O**rganization of **W**orks, **E**xperiences and **R**eflections

## Personal Website huh?

> I did it! I finally have my own custom-designed personalized website. I have dreamt about this since the first day I started learning web dev almost a year ago during my time on [Dollar Finder](/projects/dollar-finder). I could not stop thinking about the endless possibilities to design and create stuff, and the kind on content I could put on the website. I guess I alwayed wanted a way to channel my creative desires, be it in the from of a tiny no-longer funtional [YouTube channel](https://www.youtube.com/channel/UCHXmvv-6fxaZNXc0_VYIDBQ/) (RIP) or just [experimenting with a camera](/gallery).

<img alt="Finally gif" src="https://media1.giphy.com/media/wXnmM6hHFtz3IulO36/giphy.gif?cid=790b7611c7304e007b9f7602aa98246b1b084205ccfa2efc&rid=giphy.gif" width="300"/>

## Choosing the right tools

> During the winter vacation of 2021, I heard from a friend about this framework called Next.js and how it takes an already powerful framework like React to the next level. I [looked it up](https://youtu.be/Sklc_fQBmcs) and learnt that it has some interesting features that solve the key pain points I faced during my time on React. The insanely complicated [React router](https://v5.reactrouter.com/web/guides/quick-start) can now be replaced with a simple [file-system based paging](https://nextjs.org/docs/routing/introduction), the easy to write [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes), and best of all - [image optimization](https://nextjs.org/docs/basic-features/image-optimization). I also felt that this would be an appropriate time to test out SASS and up my CSS game (If you didn't know, I enjoy designing in CSS). In that way, I set out to build a minimalistic, fast and efficient website in the shortest time I could.

## Brace for some more technical jargon

> Content for the About page and all the Project articles writted in markdown and embedded html is stored in their own separate markdown files. These markdown files are then parsed using [unified](https://www.npmjs.com/package/unified) and its plugins, converted to html and inserted into their respective pages. The images (sadly, compressed versions) are currently stored in the codebase on github. Themeing, formatting and styling is done using SASS modules. Harnessing the Next.js' power of Static Site Generation (SSG), all the HTML pages are pre-rendered at build time, ready to be reused and served upon each request.

> At this point, there was still some room for a potential "**WOW**" factor on the website. That resulted in me spending about an hour on animating my name at the top left of the header bar. It was totally worth it!

## So what's next?

<img alt="What's next gif" src="https://media1.giphy.com/media/3oz8xCsYTaeGxtF1W8/giphy.gif?cid=ecf05e47s518lnohv2roxl4ndbd2uh08h88rq6rlh8wmwmbl&rid=giphy.gif" width="350"/>

> For starters, I need to look into using a [Content Delivery Network (CDN)](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) to host images for my Gallery page. This should make my codebase lighter, improve website load time, reduce bandwidth usage on Vercel, and enable me to host and serve a larger quantity of images with efficieny. I'll probably give light-mode theme a try in the process.

> I also want to add a "Blog" section to the website; somewhere I can write about stuff in general, you know, the non-technical kind. Maybe I saw a movie and I liked it too much or maybe I hated it to hell and back. Somewhere I can praise and/or rant about something, or just be myself. But there's still a long way ahead for that. Most importantly, I need to learn how to be comfortable and satisfied with the content I put out on the open internet.

## Stats, cause why not?

- Project started on March 6th, 2022
- Time taken to build: 20 hours
- Tears of happiness shed: 4

## Built using

- [Next.js](https://nextjs.org/) - Written in Next.js 12.0.7
- [React.js](https://reactjs.org/) - Written in React.js 17.0.2
- [Remark.js](https://github.com/remarkjs/remark) and [Rehype.js](https://github.com/rehypejs/rehype) - Markdown and HTML processors, Part of the [Unified](https://github.com/unifiedjs/collective) collective
- [rehype-shiki](https://github.com/rsclarke/rehype-shiki) - rehype plugin for [Shiki.js](https://github.com/shikijs/shiki) (a really beautiful syntax highlighter)
- [SASS](https://sass-lang.com/) - Written using SASS 1.49.9
- [Vercel](https://vercel.com/) - Hosted on Vercel

## Manifested by

- [Yeluri Ketan](https://github.com/YeluriKetan) - Undergraduate, Computer Science, NUS '24

## Thank you!

- [Dark theme](https://kaitlinmctigue.github.io/#/)
- [Typewriting name animation](https://youtu.be/w1nhwUGsG6M)
- [Card Hover animation](https://codepen.io/JackCuthbert/pen/pjZzGE)
- [Halcyon theme](https://github.com/bchiang7/halcyon-vscode)
