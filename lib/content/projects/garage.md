---
title: "Project GARAGE"
date: "2022-06"
intro: "Random array generation based on a given pattern"
---

# Project GARAGE - [Repo](https://github.com/YeluriKetan/project-GARAGE), [Live](https://yeluriketan.github.io/project-GARAGE/)

<img alt="Logo" src="https://raw.githubusercontent.com/YeluriKetan/project-GARAGE/master/public/logo.png" width="150"/>

> **GARAGE** stand for **G**raph **A**ugmented **R**andom **A**rray **G**eneration **E**ngine

## A garage for arrays?

> [Arrays](https://en.wikipedia.org/wiki/Array_data_structure) (or simply a list) of numbers is the most commonly used input form for competitive programming questions. Having the ability to generate random arrays of a specific pattern offers the ability to test your algorithm to the limits.

> With that idea in mind, presenting GARAGE - a first of its kind (don't quote me on that) graph-based random array generation with unique integers. Simply key in the graph using the smooth sliders, input the bounds and count values, and generate the array. Plotting the elements of the array would give an exagerrated version of the graph you input.

> The best part... the generation is entirely done on the client side. Once the website is loaded, there is no more interaction with open internet. All the necessary Javascript is loaded on the first paint, and the browser resources are more than enough to carry out the generation.

## How does it work?

<img alt="Numbers confusing gif" src="https://c.tenor.com/phAqVBNpQ1QAAAAd/will-ferrell-confused.gif" width="300" />

> Once the generate button is pressed, a snapshot of the sliders and input values is taken to prevent any memory corruption during the generation. Sliders each have a resolution of 300. A set of unique random integers within the bounds is generated and mapped to the slider values. The mapping is done by sorting the slider values (while keeping track of the slider they belong to) and sorting the random values, which are then mapped [bijectively](https://en.wikipedia.org/wiki/Bijection). The required amount of remaining values are generated randomly and their uniqueness is ensured by maintaining a set of generated values. Once this set is obtained, the values are sorted and then [sprinkled procedurally](https://github.com/YeluriKetan/project-GARAGE/blob/71b4e9465d24bd91b11903b94091d04fe93ace98/src/components/Data.js#L84) (and literally) in the intervals between each slider. Since the mapped slider values are chosen arbitrarily, the size of intervals between each slider cannot be uniform, not to forget the intervals can overlap (over a peak or valley). Hence the distribution of the generated numbers amongst the intervals is also arbitrary.

## But there are limits!

> Keeping speed and efficiency in mind, the following are the limitations of the tool

- Lower bound >= -10^9
- Upper bound <= 10^9
- Number of sliders <= Count <= 50000
- 2 <= Number of sliders <= 10

<img alt="Rookie number gif" src="https://c.tenor.com/uN_sLmFqa9cAAAAC/wolf-of-wall-street-rookie-numbers.gif" width="300" />

## Put together using

- [React.js](https://reactjs.org/) - Written in React.js 18.1.0
- [p5.js](https://p5js.org/) - A JavaScript library for creative coding. Written with p5.js 1.4.1
- [Rando.js](https://randojs.com/) - A lightweight library for fast and cryptographically strong random number generation

## Imagined and created by

> [Yeluri Ketan](https://github.com/YeluriKetan)

## With the help of

> [Sravanth Chowdary Potluri](https://github.com/parzival979) - Generation algorithm for k unique values in a given range
