---
layout: post
title:  "A Cursed Topological Space"
date: 2024-06-04 00:00:01 +0100
tags: []
---

Recently, I had the misfortune of coming across the Sierpiński 2-point space in
the wild. And while I'm sure that I must have seen it a within minutes of
learning the definition of a topological space, seeing it arise naturally in a
linear algebra problem (of all places!) was horrifying.

---

Consider the problem of classifying linear maps between two finite dimensional
complex vector spaces, $$A : V \to W$$, up to change of basis. If you are very
smart, you will eventually conclude that this is done completely by the set
of numbers $$(\dim V,$$ $$\dim W,$$ $$\dim \ker A,$$ $$\dim \mathrm{im}\, A)$$,
subject to the [rank--nullity theorem](https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem#Linear_transformations). 

But if you are geometrically minded, you might think that linear maps are just
matrices, so the space of all linear maps must be $$R_{m, n} = \mathrm{Mat}_{n \times
m}(\mathbb{C}) \cong \mathbb{C}^{mn}$$, where $$\dim V = m$$ and $$\dim W =
n$$. And identifying linear maps that are equivalent under change of bases is
done by quotienting this space by the group $$G_{m, n}$$ $$= \mathrm{GL}(V) \oplus
\mathrm{GL}(W) \cong$$ $$\mathrm{GL}_m(\mathbb{C}) \oplus
\mathrm{GL}_n(\mathbb{C})$$. And then, you will conclude that the
classification problem is solved completely by the space $$M_{m, n} = R_{m, n}
/ G_{m, n}$$.

Fantastic! Let us try to compute this space in some simple cases.

First, note that for $$A \in R_{m, n}$$ and $$(S, T) \in G_{m, n}$$, the action
is given by 

$$
(S, T)\cdot A = T A S^{-1},
$$ 

which is exactly a change of basis. 

Now, let us do the simplest case: $$m = n = 1$$. We have $$R_{1, 1} \cong
\mathbb{C}$$ and $$G_{1, 1} \cong \mathbb{C}^* \oplus \mathbb{C}^*$$, and the
action $$G_{1, 1} \curvearrowright R_{1, 1}$$ is given by $$(s, t)\cdot a = (t
/ s) a$$ for every $$a \in \mathbb{C}$$ and $$s, t \in \mathbb{C}^*$$. It is an
easy exercise to show that $$M_{1, 1} = \{[0], [1]\}$$.

The good news is that $$M_{1, 1}$$ has two points---corresponding to the two
orbits of $$G_{1, 1}$$ in $$R_{1, 1}$$---which matches with the linear algebra
answer.  The bad news is that the 
[quotient topology](https://en.wikipedia.org/wiki/Quotient_space_(topology)) 
makes $$M_{1, 1}$$ the
[Sierpiński 2-point space](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space). 

Indeed, the point $$\{[0]\} \subset M_{1, 1}$$ is closed because the orbit is a
singleton, whose complement is open in $$\mathbb C.$$ It is not open because the orbit is
is not open in $$\mathbb C$$. $$\{[1]\} \subset M_{1, 1}$$ is open
because its orbit $$\mathbb C \setminus \{0\} \subset \mathbb C$$ is open. It is not closed
because the complement of its orbit is a singleton and therefore not open in
$$\mathbb C$$. Furthermore, as a result, the closure $$\overline{\{[1]\}} = M_{1, 1}$$ is
equal to the whole space.

The only things I knew about this space before seeing this example were that

1. it is the only topology that can be given to a two element set other than
   the trivial and discrete topologies,
2. it has very bad separation properties: $$M_{1, 1}$$ is not
   [Hausdorff](https://en.wikipedia.org/wiki/Hausdorff_space), it is not even
   [$$T_1$$](https://en.wikipedia.org/wiki/T1_space), and
3. its only function is to be a
   [counterexample](https://en.wikipedia.org/wiki/Counterexamples_in_Topology)
   that instructors use to torture undergrads in their first topology course.

And that's why I was horrified when I saw it come up in, what is essentially, an
elementary linear algebra problem.

---
I learned about this in Marcus Reineke's great series of lectures on Quivers
and Cohomological Hall Algebras at the 
[Galelio Galelei Institute in May 2024](https://www.ggi.infn.it/showevent.pl?id=498).



