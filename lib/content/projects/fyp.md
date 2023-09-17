---
title: "Open Online Orrery"
date: "2023-09"
intro: "Final year project on open-source online library for simulation of celestial motion"
---

# Open Online Orrery - In Progress

[BComp Dissertation](https://www.comp.nus.edu.sg/programmes/ug/project/fyp/) (CP4101) or more commonly referred to as Final Year Project at the School of Computing, National University of Singapore under the supervision of [Prof. Martin Henz](https://www.comp.nus.edu.sg/cs/people/henz/).

Work on this project began in Aug 2023, to be concluded by **May 2024**.

## Existing problem

There's a surprising lack of an **accurate open-source online library for computing and visualising celestial motion**. None so that can be easily used for educational purposes in either introductory level physics or programming courses.

## So what?

<img alt="jsOrrery" src="/images/jsOrrery.gif" width="700" />

Inspired by the wonderful [jsOrrery](https://mgvez.github.io/jsorrery/) project from [Martin Vézina](https://github.com/mgvez), I have taken on the goal to

Build a library/module with well documented API that allows users to **compute**, simulate and **visualize** **accurate** interactions and phenomena of the astronomical scale, possibly including at **extreme conditions** such as near black holes, while providing educational and experiential learning opportunities through direct **interaction** with code and configuration.

- **compute** - offer choice of various integration methods (of varying speed and accuracy) including the ability to pass custom integration methods in the form of higher order functions
- **visualize** - using plotly, unity_academy, etc to enable a compelling visual system with free moving/mountable cameras/POV
- **accurate** - use appropriate methods at various scales to auto-correct/counter compounding computational inaccuracies
- **extreme conditions** - such as near black holes
- **interaction** - be able to see and edit the code, setup and configuration to understand and visualize the effects

## How is it looking now?

The project is currently in the inital research and setup stage, where I take a deeper dive into some of the mathematical and design challenges that I anticipate. I will try to regularly update this page with new and interesting updates.