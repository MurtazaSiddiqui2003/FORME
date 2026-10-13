"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const looks = [
  {
    number: "01",
    title: "Quiet confidence",
    category: "The tailoring story",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    alt: "Minimal fashion editorial portrait",
    className: "look-image look-image-tall",
  },
  {
    number: "02",
    title: "Soft structure",
    category: "Form in motion",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    alt: "Editorial portrait in soft natural light",
    className: "look-image look-image-wide",
  },
  {
    number: "03",
    title: "After hours",
    category: "A study in contrast",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary fashion street style",
    className: "look-image look-image-tall",
  },
];

export default function Home() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.085 });
    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker, .hero-title-line, .hero-copy, .hero-cta", {
        y: 34,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 38, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".look-card img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={root}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Forme home">
          FORME<span>®</span>
        </a>
        <p className="header-note">An independent style journal</p>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
        <nav className={`menu-panel ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>The story</a>
          <a href="#looks" onClick={closeMenu}>Lookbook</a>
          <a href="#about" onClick={closeMenu}>Our point of view</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Fashion editorial in warm afternoon light" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker">Issue No. 01 — Autumn / Winter</p>
          <h1 className="hero-title">
            <span className="hero-title-line">THE ART</span>
            <span className="hero-title-line hero-title-indent">OF DRESSING.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-copy">
              A quieter kind of statement.<br />
              Pieces chosen with intention.
            </p>
            <a className="hero-cta" href="#looks">
              Explore the issue <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <p className="hero-index">01 / 04</p>
      </section>

      <section className="intro section-wrap" id="story">
        <p className="eyebrow" data-reveal>Our point of view</p>
        <div className="intro-grid">
          <h2 data-reveal>
            Style is not<br />what you wear.<br />
            <em>It is what remains.</em>
          </h2>
          <div className="intro-aside" data-reveal>
            <span className="small-rule" />
            <p>
              An ongoing exploration of shape, texture, and the beauty of
              restraint. A wardrobe built not around more, but around meaning.
            </p>
            <a className="text-link" href="#about">Read our philosophy <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="editorial-strip" aria-label="FORME editorial values">
        <div className="editorial-strip-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="editorial-strip-group" key={index}>
              <span>FORME STUDIO</span><i>✳</i><span>CONSIDERED BY DESIGN</span><i>✳</i><span>ISSUE Nº 01</span><i>✳</i>
            </span>
          ))}
        </div>
      </section>

      <section className="lookbook section-wrap" id="looks">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">The visual journal</p>
            <h2>Selected <em>looks.</em></h2>
          </div>
          <p className="section-count">A study in modern dressing<br />Three stories, one sensibility</p>
        </div>

        <div className="look-grid">
          {looks.map((look, index) => (
            <article className={`look-card look-card-${index + 1}`} key={look.number}>
              <a href="#about" className="look-image-link" aria-label={`Discover ${look.title}`}>
                <div className={look.className}>
                  <img src={look.image} alt={look.alt} loading="lazy" />
                  <span className="image-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
              <div className="look-meta">
                <span>{look.number} / {look.category}</span>
                <h3>{look.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-image" role="img" aria-label="Minimalist fashion silhouette against a neutral backdrop" />
        <div className="manifesto-content" data-reveal>
          <p className="eyebrow">A considered wardrobe</p>
          <h2>Less, but<br /><em>with feeling.</em></h2>
          <p className="manifesto-copy">
            We believe in the pieces you return to. The lines that feel right.
            The details you notice slowly. Dressing, made personal.
          </p>
          <a className="text-link text-link-light" href="#top">Back to the beginning <span>↑</span></a>
        </div>
        <span className="manifesto-index">FORME — EST. MMXXV</span>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">FORME<span>®</span></a>
        <p>An independent style journal.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
        <small>© 2025 FORME STUDIO. MADE WITH INTENTION.</small>
      </footer>
    </main>
  );
}
