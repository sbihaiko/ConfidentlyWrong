---
title: 'Power is Nothing Without Control — Part 1/3'
description: "AI didn't eliminate work — it moved the bottleneck. And we're all running barefoot toward the cliff, mesmerized by the speed of our own legs."
pubDate: '2026-05-13'
---

If you survived the 90s firmly believing that the Y2K Bug would be the end of Western civilization — and not merely an early Christmas bonus for COBOL consultants — you probably remember a Pirelli commercial that bordered on the absurd: Carl Lewis runs barefoot through the streets of New York at a speed that would make Usain Bolt look like a sea slug with chronic vertigo. He climbs the Statue of Liberty, crosses Brooklyn Bridge, glides over the Hudson River, and scales the Chrysler Building as if gravity were merely a poorly-worded suggestion. At the top, he looks down at the sole of his own foot — and there it is: the rubber tread of a Pirelli tire, engraved with millimetric precision into his skin. The tagline was a punch of sobriety:

**"Power is nothing without control."**

Three decades later, that image still haunts me. But now the asphalt has become software, and the engine is Artificial Intelligence.

The great change that AI brought wasn't just speed. It was something more dangerous: it violently shifted the bottlenecks of software engineering. The problem is no longer writing code. The problem now is controlling the acceleration. And, frankly, we're all running barefoot toward the cliff, mesmerized by the speed of our own legs, while ignoring that the fall is free but the landing remains decidedly solid.

To explain the productive chaos we're living through, allow me a brief digression to the city where I was born, in 1974: Curitiba, the former "Model City" of Brazil.

In the 70s and 80s, Curitiba looked like a glimpse of the future in a country still figuring out how to fill potholes. Under the baton of Jaime Lerner and IPPUC, the city designed an extremely rational urban model: structural axes, integrated transport, tube stations, and bi-articulated buses that made European urban planners weep with envy. It was the triumph of flow-oriented urbanism. You could cross the city in minutes. The population at the time was around 800,000 people.

The problem with planning tomorrow to perfection is that tomorrow rarely respects the plan. Curitiba fell so deeply in love with its own model that it forgot to evolve. IPPUC, which once symbolized innovation, slowly became part of the very bureaucracy it was supposed to fight. The system saturated. The bi-articulated bus, once a symbol of speed and efficiency, became a massive tin can on wheels trapped in a flow that could no longer accommodate its own ambition.

And management's response was revealing: instead of reinventing the flow, they decided to punish speed. Speed traps set to 40 km/h spread across the city. If the infrastructure can no longer handle the demand, reduce the movement until everything appears "safe."

And here lies one of the great fallacies of modern safety: the idea that lower speed always means more protection. It's a seductive line of reasoning, but intellectually lazy. If we take that logic to its limit, we reach absolute safety: zero speed. In a completely motionless traffic jam, the risk of accidents is practically nil. Zero collisions. Zero casualties. But also zero movement, zero progress, and zero relevance. A city that doesn't move isn't safe; it's dead.

In software development, many companies are repeating exactly this mistake. If you want "zero AI bugs," there's a simple and lazy solution: don't use AI. You'll have zero risk and probably zero future as well.

Many organizations today have absurdly powerful engines but keep operating with processes designed for another era. Their flows are saturated by legacy bureaucracies, endless approvals, and validation models incapable of keeping pace with the new speed. These are companies trying to control power by scattering organizational speed traps everywhere.

Today I live in Florianópolis, and here the urban lesson is different: control doesn't come only from limiting speed; it can also emerge from expanding the capacity of flow.

The Aterro da Baía Norte in Florianópolis and the Aterro do Flamengo in Rio de Janeiro — where I lived part of my childhood — are examples of this. In both cases, engineering decided to expand the physical territory to allow flow to exist. In Rio, Burle Marx and Affonso Reidy integrated expressways and urban parkland into a masterpiece of infrastructure. In Florianópolis, the landfill and the SC highways created space to connect entire regions of the city. Of course, physical limits still exist. Florianópolis in summer triples its population and partially collapses under the strain of scale. No infrastructure grows infinitely.

But there is a fundamental philosophical difference between the two models:

The "Curitiba Model" tries to control power by limiting it.  
The "Aterro Model" tries to release power by expanding capacity.

And this is exactly where AI comes in. Today, using AI to program, I produce code somewhere between 5 and 6 times faster than before. That sounds wonderful — until you realize that AI didn't eliminate work; it simply moved the bottleneck to the edges of the process. The middle of the road, the act of coding, is no longer the limiting factor. Coding is rapidly becoming a commodity. And with that, all the structural pressure migrates to two places:

1. **Specification (The Beginning)**  
   If you produce software 6x faster, a definition error now destroys your project 6x faster too. Congratulations: you've just automated disaster with enviable efficiency.

2. **Validation (The End)**  
   This is where the math gets brutal. If we used to comfortably accept a ratio of 1 QA for every 3 developers — because testing consumed roughly 1/3 of coding time — AI implodes that equation. When code is produced 6x faster, the math stops working: without validation automation at the same scale, you quickly approach an unlikely scenario: something like 2 QA engineers for every 1 developer, just to contain the flow you yourself created.

And here's the point that many people still haven't grasped: perhaps we're interpreting AI bugs as "poor code quality," when in reality we're still trying to validate exponential systems using tools and processes from the artisanal era. To make things worse, we're moving away from purely deterministic software and starting to operate cognitive, probabilistic, and non-deterministic systems — which makes testing far more complex. In these environments, the same input can produce different outputs depending on context, memory, and even the trajectory of the conversation. That alone begins to make traditional validation models, like black-box testing, insufficient. It's like entering a shooting competition armed with only a slingshot.

From the beginning, engineering has always meant learning to "tame" explosions. The steam engine was a time bomb. The combustion engine is essentially the same thing — just transformed into a continuous sequence of small, carefully controlled explosions. Aviation, electricity, nuclear energy, and the internet were not born from the elimination of risk, but from our capacity to build mechanisms sophisticated enough to release power without being destroyed by it.

We only got this far because we had the rational courage to build brakes, valves, redundancies, protocols, and observability systems — rather than simply banning speed, pressure, or energy. We don't need a reckless courage that ignores AI's risks. We need to stop thinking about code production as an end in itself and start seeing software as systems engineering again. The challenge now is no longer piling up features, but designing flow, scale, observability, and control mechanisms capable of surviving the speed that AI has made possible.

AI has already delivered the engine...  
The question now isn't who can accelerate...  
...but who can handle the curve.

There's plenty to think about and absorb. But for today, I'll stop here. I still intend to return with two more articles on this topic.

In **Part 2**, I want to dive into the first bottleneck AI displaced: specification. Because when coding stops being the limiting factor, defining the problem correctly becomes more important than writing the solution. We'll talk about AI-assisted engineering, living documentation, context-driven architecture, and what happens when the act of programming stops being scarce.

In **Part 3**, I'll tackle the hardest problem of all: validation. Probabilistic systems, non-deterministic agents, behavioral observability, and the moment when QA stops being a step in the process and becomes continuous control infrastructure.

Because power without control remains just a very efficient way to reach disaster faster.

---

**The series — Power is Nothing Without Control:**

- **Part 1 — AI didn't eliminate work, it moved the bottleneck (you're here)**
- [Part 2 — Specification: the ghost of generating software from a model](/ConfidentlyWrong/blog/power-is-nothing-without-control-part-2/)
- Part 3 — Validation: testing a probabilistic system (coming soon)

---

**Links for the curious:**
- [Original Pirelli commercial featuring Carl Lewis (1994)](https://www.youtube.com/watch?v=d0hElvVpWcU)
- [Curitiba — tube stations, bi-articulated buses and structural road axes](https://www.google.com/search?q=curitiba+%22esta%C3%A7%C3%A3o+tubo%22+%22onibus+biarticulados%22+%22mapa+vias+estruturais%22&tbm=isch)
- [Florianópolis — Beira-Mar Norte waterfront before and after the landfill](https://www.google.com/search?q=florian%C3%B3polis+beira+mar+aterro+hist%C3%B3rica&tbm=isch)
- [Parque do Flamengo — aerial view, Burle Marx](https://www.google.com/search?q=parque+do+flamengo+burle+marx+a%C3%A9rea&tbm=isch)
