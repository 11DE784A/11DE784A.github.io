---
title: Home
layout: default
---

# Hello! I'm Ayush Singh.

I am a PhD student in mathematics, trying to understand quantum
invariants of 3-manifolds, and their connections with modularity,
three-dimensional geometry, and supersymmetric field theories. 

I am based at [SISSA](https://www.sissa.it/) and I work under the supervision
of Pavel Putrov. I spend most of my time in Trieste and split my working days
between SISSA and ICTP.

<figure class="wide invert">
  <video autoplay loop muted playsinline>
    <source src="assets/life.mp4">
    <source src="assets/life.webm">
  </video>
</figure>

In my free time, I like board games, TTRPGs, horror media, cooking, singing, and silly
puns. I also like writing [code](https://github.com/{{ site.github_username
}}), and I [blog](/archive) sometimes.

## Contact

The best way to reach me is by writing to {{ site.obf_email }}. 
If you want to send me an encrypted email, [download my public
key](/assets/files/gpg_public.asc). 

```
Key ID: 0x72FFE67E9A741977
Fingerprint: 895A 9EF0 269B E512 2645 8B36 72FF E67E 9A74 1977
```

To receive an encrypted response, send me your public key.

## Fun Stuff

I am currently reading
_Lock In_ by John Scalzi. I am also listening to _The Silmarillion_ audiobook
narrated by Andy Serkis.
I recently finished reading
_Orbital_ by Samantha Harvey. 

I recently watched _The Lord of the Rings: The Two Towers_.

I recently started my playing _Doom_ (2016).

I helped produce [NiSERCast](https://nisercast.gitlab.io) --- a science
communication podcast based on conversations between professors and
undergraduates. See [How to Make a
NiSERCast]({{ site.baseurl }}{% link
_posts/2022-06-09-how-to-make-a-nisercast.markdown %}).

## Recent Posts

{% for post in site.posts limit:3 %}
<article>
  <div class="detail">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </div>
</article>
{% endfor %}

See all posts in the [blog archive](/archive).

