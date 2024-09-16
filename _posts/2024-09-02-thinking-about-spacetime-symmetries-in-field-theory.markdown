---
layout: post
title:  "Thinking About Spacetime Symmetries in Field Theory"
date: 2024-09-02 00:00:01 +0100
tags: []
excerpt: In which I try to rephrase the physics understanding of spacetime symmetries in the language of principal bundles.
---

In physics, fields are thought of as functions on spacetime that carry indices
which determine how they transform under symmetries.
But a cleaner, more satisfying way to think about fields
is to think differential geometrically --- of spacetime as a
[differentiable manifold](https://en.wikipedia.org/wiki/Differentiable_manifold),
fields as [sections](https://en.wikipedia.org/wiki/Section_(fiber_bundle)) of 
[vector bundles](https://en.wikipedia.org/wiki/Vector_bundle), and spacetime
symmetries as a [group action](https://en.wikipedia.org/wiki/Group_action) on spacetime.
From this point of view, the action of a symmetry group on the space of fields
is determined by underlying geometric structures,
and once the correct geometric structure is identified, this action
can be deduced by appeals to "naturality"[^handwaving]. 

[^handwaving]: And some waving of hands.

Let $$M$$ be the spacetime manifold, and for the purposes of this post, let the
[group of diffeomorphisms](https://en.wikipedia.org/wiki/Diffeomorphism#Diffeomorphism_group), $$\mathrm{Diff}(M)$$, be the group of spacetime
symmetries[^setup]. 
As warm up let us think about
scalar fields that are just functions on $$M$$, i.e., sections of
the trivial line bundle. The only natural way
a diffeomorphism $$\Lambda : M \to M$$ can act on this scalar field, $$\phi : M
\to \mathbb R$$, is by 
[pulling it back](https://en.wikipedia.org/wiki/Pullback) by $$\Lambda^{-1}$$,

[^setup]: Even when the setup is different, the story of spacetime symmetries
    will either --- in case of flat space with Poincaré symmetry --- be a special case
    of the one presented here or --- for a supermanifold with supersymmetry ---
    a straightforward generalization of it.

$$
(\Lambda \cdot \phi) (p) = \phi(\Lambda^{-1} p) \text{ for every } p \in M,
$$

which is precisely how physics textbooks[^srednicki] write the transformation
rule for scalar fields. Let us see what happens in a nontrivial example.

[^srednicki]: Like Mark Srednicki's _Quantum Field Theory_, for example.

## Vector Fields

Vector fields are sections of the 
[tangent bundle](https://en.wikipedia.org/wiki/Tangent_bundle) 
$$TM \to M$$. Diffeomorphisms act on vector
fields in a natural way by [pushforwards](https://en.wikipedia.org/wiki/Pushforward_(differential)). In particular, for a vector field
$$v$$, and a diffeomorphism $$\Lambda$$, the action is given by

$$
(\Lambda \cdot v)(p) = (\Lambda_\ast v)(\Lambda^{-1} p) \text{ for every } p \in M,
$$

where $$\Lambda_\ast$$ is the pushforward of vector fields induced by
$$\Lambda$$.  Once again, this can be identified as the familiar transformation
law for vector fields from physics textbooks.

<figure class="image wide invert">
  <img src="/assets/images/spacetime_symmetries/tangent_bundle_map.png">
</figure>

However, note that the pushforward --- seen as a [bundle map](https://en.wikipedia.org/wiki/Bundle_map) --- does two
distinct things: (1) moves fibers around, and (2) acts _on_ fibers by a
linear transformation. How precisely these two decouple, is the content of the
universal property of [pullback bundles](https://en.wikipedia.org/wiki/Pullback_bundle).

<figure class="image wide invert">
  <img src="/assets/images/spacetime_symmetries/tangent_bundle_map_factored.png">
</figure>

Per this 
[universal property](https://en.wikipedia.org/wiki/Pullback_(category_theory)#Universal_property), 
the bundle map $$\Lambda_\ast = \kappa \circ \lambda$$ factors through the
pullback bundle $$\Lambda^\ast TM \cong TM$$, by a unique map $$\lambda$$. If
$$v$$ is a vector field, then the action of $$\kappa$$ is to move the fiber
around, i.e., $$(\kappa\cdot v)(p) = v(\Lambda^{-1} p)$$. And the action of
$$\lambda$$ is a linear transformation of fibers $$(\lambda \cdot v)(p) =
\lambda(p) v(p)$$, where $$\lambda(p) \in \mathrm{GL}(T_p M)$$.

Before moving to more generic situations, it is nice to pause and note that
the transformation rule for scalar fields I wrote in the introduction, is a
special case of what happens to vector fields. Fibers are moved around but the
action on fibers is trivial.

If you are eagle-eyed (or if you already know where this story is going), you
may ask if the bundle automorphism $$\lambda$$ has an interpretation as a
section of some bundle over $$M$$ whose fibers are the group
$$\mathrm{GL}(\mathbb{R}^m)$$. This is correct and the interpretation is fleshed
out in the following paragraphs.

To understand more general kinds of fields, we should look for a geometric
structure that unifies and generalizes the examples above. This geometric
structure is that of a 
[principal $$G$$-bundle](https://en.wikipedia.org/wiki/Principal_bundle) 
and [associated vector bundles](https://en.wikipedia.org/wiki/Associated_bundle).

## Principal Bundles

A principal [$$\mathrm{SO}(m)$$](https://en.wikipedia.org/wiki/Orthogonal_group#Special_orthogonal_group)-bundle that comes for free with every orientable
manifold is the bundle of 
[oriented orthonormal frames](https://en.wikipedia.org/wiki/Frame_bundle#Orthonormal_frame_bundle) 
of the tangent bundle[^structuregroup], which I will denote $$\mathrm{SO}(M) \to M$$. 
An almost tautological remark is that the tangent bundle is isomorphic to the
associated bundle $$\mathrm{SO}(M) \times_\mathbf{m} \mathbb{R}^m$$, where
$$\mathbf{m}$$ is the defining representation of $$\mathrm{SO}(m)$$. 
Real scalar fields can be seen as sections of the associated line bundle
$$\mathrm{SO}(M) \times_\mathbf{1} \mathbb{R}$$, where $$\mathbf{1}$$ is a
one-dimensional real representation of $$\mathrm{SO}(m)$$.

[^structuregroup]: The tangent frame bundle is _a priori_ a principal
    $$\mathrm{GL}(\mathbb{R}^m)$$-bundle, but the structure group can be
    reduced to $$\mathrm{SO}(m)$$ by (1) picking a Riemannian metric, which is
    always possible for a smooth manifold, and (2) picking an orientation,
    which is possible because the manifold is assumed to be orientable.

An abstract but more geometric way of thinking about vector bundles is to
regard the associated [frame bundle](https://en.wikipedia.org/wiki/Frame_bundle) 
--- a principal $$G$$-bundle for an appropriate structure group $$G$$ ---  as
the basic object, which gives rise to _a whole family_ of vector bundles with
the same topology[^sametopology], indexed by [linear representations](https://en.wikipedia.org/wiki/Group_representation) of $$G$$. 
From this point of view, we can construct a large class of fields on $$M$$, as sections
of $$\mathrm{SO}(M) \times_\rho V$$ for every representation $$\rho : \mathrm{SO}(m) \to \mathrm{GL}(V)$$.

[^sametopology]: By _the same topology_, I mean that the local trivialization
    and transition functions are the same.

To see how diffeomorphisms act on these fields we can run parallel to the
discussion above on vector fields, once we note that vector bundle maps induce
maps of associated frame bundles. So, a diffeomorphism induces the
principal bundle map

<figure class="image wide invert">
  <img src="/assets/images/spacetime_symmetries/principal_bundle_map.png">
</figure>

which factors uniquely through the pullback bundle, $$\Lambda^\ast \mathrm{SO}(M) \cong
\mathrm{SO}(M)$$ as

<figure class="image wide invert">
  <img src="/assets/images/spacetime_symmetries/principal_bundle_map_factored.png">
</figure>

As before $$\kappa$$ moves fibers around, and $$\lambda$$ acts on the fibers as
a bundle automorphism[^automorphism]. Principal bundle automorphisms are sections of the
adjoint bundle, so $$\lambda$$ is a section of the associated bundle
$$\mathrm{SO}(M) \times_\textrm{Ad} \mathrm{SO}(m)$$.

On sections, $$\varphi$$, of the associated vector bundle $$\mathrm{SO}(M) \times_\rho
V$$, a diffeomorphism acts as a composition of a coordinate change $$\kappa$$,
and a bundle automorphism $$\lambda$$ as follows

$$
(\Lambda \cdot \varphi)(p) = (\lambda \cdot \varphi)(\Lambda^{-1} p) \text{ for every } p \in M,
$$

where $$(\lambda \cdot \varphi)(p) = \rho(\lambda(p))\varphi(p)$$.

[^automorphism]: Existence and uniqueness of the bundle automorphism $$\lambda$$ is due to
    the universal property of pullback bundles.

---

The upshot of all this abstract[^abstract] language is that the action of spacetime
symmetries on any field that you can possibly think of is either --- in case of
tensors --- a special case of the formula above, or --- for spinors or
[superfields](https://en.wikipedia.org/wiki/Supermultiplet) --- a
straightforward generalization of it. To wrap up, I will sketch how
$$\mathrm{Diff}(M)$$ acts on tensor fields and spinors.

[^abstract]: Honestly, the question of precisely how diffeomorphisms act on the
    tangent frame bundle turned out to be subtler than I had anticipated.
    For more details of the story I have sketched here, my
    favorite references are Loring Tu's _Differential
    Geometry_, and Thomas Friedrich's _Dirac Operators and Riemannian Geometry_.

An $$(a, b)$$-tensor field on $$M$$ is a section of the vector bundle
$$TM^{\otimes a} \otimes T^\ast M^{\otimes b}$$.
Or in the language of principal bundles, it is a section of the vector bundle
associated to $$\mathrm{SO}(M)$$ with $$\rho = \mathbf{m}^{\otimes a} \otimes
\mathbf{\bar m}^{\otimes b}$$, where $$\mathbf m$$ is the fundamental
representation of $$SO(m)$$ and $$\mathbf{\bar m}$$ is its dual. In local
coordinates, $$\rho(\lambda)$$ will become the famous transformation rule for
tensors.

Finally, if the spacetime manifold supports a 
[spin structure](https://en.wikipedia.org/wiki/Spin_structure) then spinor fields
can be understood as sections of an associated 
[spinor bundle](https://en.wikipedia.org/wiki/Spinor_bundle). In particular,
given a choice of spin structure on $$M$$, there is a principal 
[$$\mathrm{Spin}(m)$$](https://en.wikipedia.org/wiki/Spin_group)-bundle over
it, $$\mathrm{Spin}(M) \to M$$. Dirac spinor fields on $$M$$ are sections of the
associated vector bundle $$\mathrm{Spin}(M) \times_\sigma \Delta_m$$, where $$\sigma :
\mathrm{Spin}(m) \to \mathrm{GL}(\Delta_m)$$ is a particular complex representation of the spin
group called the 
[spinor representation](https://en.wikipedia.org/wiki/Spin_representation).

To see how a diffeomorphisms acts on a spinor fields, note that --- modulo some
assumptions on the topology of $$M$$ --- the $$\mathrm{SO}(M)$$ bundle map induced by a
diffeomorphism lifts to a $$\mathrm{Spin}(M)$$ bundle map. As before, this bundle map
can be decomposed, via the pullback bundle, into a piece that moves the fiber
around and a piece that acts on fibers. So that the
transformation rule for spinors can be written as

$$
(\Lambda \cdot \psi)(p) = (\lambda \cdot \psi)(\Lambda^{-1} p) \text{ for every
} p \in M,
$$

where the bundle automorphism, $$\lambda : \mathrm{Spin}(M) \to \mathrm{Spin}(M)$$, acts on each
fiber by the spinor representation $$(\lambda \cdot \psi)(p) =
\sigma(\lambda(p)) \psi(p)$$.

---
