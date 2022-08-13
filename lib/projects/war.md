---
title: "Project WAR"
date: "2022-02"
intro: "We built a simple WORDLE solver in C++"
---

# Project WAR - [Repo](https://github.com/YeluriKetan/project-WAR)

> **WAR** stands for **W**ordle **A**nswer **R**esolver

## What is WORDLE?

> [Wordle](https://www.nytimes.com/games/wordle/index.html) is a web-based word game developed by Welsh-born software engineer Josh Wardle, formerly an employee of Reddit. Players attempt to guess a five-letter word in six attempts; feedback, in the form of colored tiles, is given for each guess, informing players which letters are in the correct position and which are in other positions of the answer word. [(source)](https://en.wikipedia.org/wiki/Wordle)

## So what?

> Well, it turns out I'm bad at the game without any external help. I often look up the word list or use some [online regex tool](https://www.dcode.fr/word-search-regexp) to find the correct words. People made some ridiculous claims that I was cheating! (Okay okay, I admit it's not fair). But, hear me out, I found a loophole to that claim. What if I were to make a program that helps me win the game, but since I wrote the program, technically speaking I would be enlisting my own help. That is surely not cheating, right? Right?

<img alt="Mind blown gif" src="https://media2.giphy.com/media/2rqEdFfkMzXmo/giphy.gif?cid=790b7611951ceedc0da586644a683dbe3f53a60716fb4c63&rid=giphy.gif" width="300" />

## And then?

> I have the idea and now I just need to execute it. I could write the program in Java, but its no fun doing something right in the middle of your comfort zone. C++ seemed like a good option, its fast and relatively new to me at the time of this project. I hopped on a zoom call with my buddy [Avinash](https://github.com/nabobery), who's a C++ expert, sat for couple of hours and done!

## Done? but how?

> We can't use search/decision trees, learning models or intelligent agents (big words I didn't learn about just yet). The most simple way we could see was by using an algorithm built upon the basic rules of the game. Just plain old DSA.

> Let's say we begin off by guessing the first word arbitrarily. We now have some feedback on that guess and the list of possible correct words (initially all the 2315 words). Let the correct word be **THORN** and our first guess be **WRITE**. Our feedback would be **BYBYB**. Since we can deduce from the feedback that **I** is the not in the answer, we can see why **RIGHT** can't be the answer. In fact, for a word **X** from the list to be a possible answer, the same feedback should be generated when **X** is used as the answer and our guess is used as, well the guess. We can now eliminate/filter the words in the list based on the feedback received for a guess. The list keeps getting smaller and eventually, only 1 word prevails and it will be the answer.

<img alt="Makes sense gif" src="https://media3.giphy.com/media/1qgIVb1F6Bfj2Gz6pQ/giphy.gif?cid=790b7611b1e4727a0644adb29b8e364acbcd7fd1dfe02d9a&rid=giphy.gif" width="300" />

> Hold up! The story doesn't end there. We realised that this method, although it works perfectly fine, is not efficient enough. We decided to optimize the algorithm by beginning the game with some predetermined useful predictions; Words that contain [statistically significant](https://www.fastcompany.com/90717072/these-are-the-most-used-letters-in-wordle-what-to-do-with-them-is-up-to-you) letters, and using multiple of these words to maximize the number of distinct letters used. We ended up going with **SALET**, **CORNI** and **DUMPY** to be the first three guesses, but at the same time preemptively using the list itself if its small enough.

> The final algorithm has managed to reach an avg. number of predictions value that is less than 0.25 away from the [best known automated solver (avg. 3.42)](https://jonathanolson.net/wordle-solver/).

## Some numbers...

- Time taken to build: 6 hours
- Average no. of predictions required: 3.67689
- Average time taken to solve: < 200 microseconds
- No. of words failed (i.e. take more than 6 predictions): 13

<img alt="Distribution" src="/images/war-distribution.png" width="600" />

## Made using...

- [C++](https://en.cppreference.com/w/cpp/14) - Written in C++ 14
- [CLion](https://www.jetbrains.com/clion/download/#section=windows) - A cross-platform IDE for C and C++

## Made by...

- [Yeluri Ketan](https://github.com/YeluriKetan)
- [Avinash Changrani](https://github.com/nabobery)
