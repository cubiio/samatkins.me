+++
title = "Reflections on DevOps Barcelona 2019"
description = ""
author = "Sam Atkins"
date = 2019-07-23T20:08:21+01:00
tags = ["DevOps"]
draft = false
type = "post"
categories = ["DevOps"]
+++
In June I attended a DevOps conference in Barcelona. Whilst I work in web development, I have a growing interest in DevOps which is mainly due to my previous career in supply chain and lean. This was a key motivation for attending: to learn more about different people's experiences with DevOps.

I've had these high level thoughts sat in "draft" for a while so thought I'd smarten them up a bit and post to my blog.

### Summary
First up, it was a well run and good conference. I enjoyed that it was single track as there's no feeling of missing out if two talks scheduled at the same time are of interest. Lots of good speakers and I'm full of admiration for everyone that presented, especially the majority doing so in a second language.

As for the talks, there were several that really resonated with me.

### DevOps Culture
Nationwide had two good talks on culture and building teams from Marc Cluet and Aubrey Stearn. It's always exciting to hear about tools but people and culture are the foundation of DevOps. Both talks were excellent examples of how Nationwide are building a great DevOps culture.

### Security
Shout out to Néstor Salceda at Sysdig for an impressive demonstration of Falco. Falco is a "behavioural activity monitor designed to detect anomalous activity in your applications". Néstor Salceda's demo was great because he demonstrated how the container was stopped once anomalous activity was detected. Very impressive.

### Managing Failure in a Distributed World
The best talk in terms of execution and the slick demo was by Nic Jackson (and his colleague whose name I sadly can't find in my notes) from Hashicorp about Managing Failure in a Distributed World. A very slick demo showed how multiple cloud providers could be used to ensure improve latency but also as a fallback if one cloud provider has an outage, traffic can be switched to another cloud provider.

### Testing in Production
My favourite talk was Alex Soto's (Redhat) talk on testing in production. This was a real eye-opener and definitely something to read more on. It was controversial to me because I'd aways read and experienced directly at work that you have multiple stages e.g. dev for general development of features, QA or staging for testing of features and bug fixes before deploying to production.

The approach outlined in the talk is all development is done in production behind feature flags. Internal users can toggle if they see production or beta/alpha development e.g. feature or bug fixes. As I understand it this approach extends from CI and trunk based development where all work is merged directly to trunk but behind feature flags until it is ready for prime time.

The key benefit of the approach Alex outlined is that you only need to have one stage, namely production. However he warned it is very hard to and to start slowly. I still have a lot to learn so this idea is still quite scary to me, but the idea is eye opening and makes me rethink my previous assumptions on how things should be done.

### Final Thought
And finally, Barcelona is a beautiful city and I want to visit again. 😎
