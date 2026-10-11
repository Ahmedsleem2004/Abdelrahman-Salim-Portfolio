import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Globe,
  Building2,
  Award,
  ZoomIn,
  Sun,
  Moon,
} from 'lucide-react';
import { profile, copy } from './data/profile';

gsap.registerPlugin(ScrollTrigger);

function IntroLoader({ onDone }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: onDone });

      tl.fromTo(
        '.loader-kicker',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          '.loader-name',
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power4.out',
          },
          '-=.2'
        )
        .fromTo(
          '.loader-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.75, ease: 'power2.inOut' },
          '-=.4'
        )
        .to('.loader-inner', {
          opacity: 0,
          y: -16,
          duration: 0.4,
          delay: 0.3,
          ease: 'power2.in',
        })
        .to(
          root.current,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.9,
            ease: 'power4.inOut',
          },
          '-=.1'
        );
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="intro-loader" ref={root} aria-label="Loading">
      <div className="loader-inner">
        <span className="loader-kicker">
          ENVIRONMENTAL SERVICES · PUBLIC CLEANLINESS
        </span>

        <div className="loader-name">
          M.A.S <span>DEVELOPMENT</span>
        </div>

        <div className="loader-line" />

        <span className="loader-foot">
          ENVIRONMENTAL SERVICES · SUSTAINABLE OPERATIONS
        </span>
      </div>
    </div>
  );
}

const lines = (str, goldFrom = 1) =>
  str.split('\n').map((line, i) => (
    <span key={`${line}-${i}`} className={i >= goldFrom ? 'gold-text' : ''}>
      {line}
      <br />
    </span>
  ));


function ServiceArt({ kind }) {
  const art = [
    // 0: Environmental services — sculptural leaf
    <g key="leaf">
      <ellipse cx="150" cy="174" rx="77" ry="17" fill="#78905b" opacity=".12" />
      <circle cx="150" cy="108" r="73" fill="url(#envGlow)" opacity=".65" />
      <path
        d="M91 153C88 101 117 58 198 48C199 111 171 160 91 153Z"
        fill="url(#leafMetal)"
        stroke="#a6bb83"
        strokeWidth="1.5"
      />
      <path d="M93 153Q146 112 190 57" fill="none" stroke="#d0dda8" strokeWidth="2" />
      <path d="M126 128L120 91M145 111L167 105M159 94L157 75M111 140L106 117" fill="none" stroke="#d0dda8" strokeWidth="1.2" opacity=".7" />
      <path d="M90 183Q150 197 210 183" fill="none" stroke="#8da76a" strokeWidth="1.5" opacity=".65" />
      <circle cx="208" cy="83" r="3" fill="#d0dda8" />
      <circle cx="91" cy="89" r="2" fill="#d0dda8" opacity=".7" />
    </g>,

    // 1: Waste transportation — premium waste truck
    <g key="truck">
      <ellipse cx="150" cy="185" rx="112" ry="14" fill="#78905b" opacity=".13" />
      <rect x="39" y="92" width="133" height="70" rx="5" fill="url(#truckMetal)" stroke="#91a87a" strokeWidth="1.5" />
      <path d="M39 112H172M39 133H172" stroke="#c1d0a6" strokeWidth="1" opacity=".35" />
      <path d="M53 103H157" stroke="#d4dfbc" strokeWidth="1.5" opacity=".65" />
      <path d="M172 119H204L235 148V162H172Z" fill="url(#truckMetal)" stroke="#91a87a" strokeWidth="1.5" />
      <path d="M184 126H201L222 146H184Z" fill="#17221a" stroke="#a9be8b" strokeWidth="1.2" />
      <path d="M44 151H166M179 151H227" stroke="#c7d8ad" strokeWidth="2" opacity=".7" />
      <circle cx="79" cy="166" r="17" fill="#111511" stroke="#8da76a" strokeWidth="2" />
      <circle cx="79" cy="166" r="7" fill="#788c5b" stroke="#d0dda8" strokeWidth="1.5" />
      <circle cx="203" cy="166" r="17" fill="#111511" stroke="#8da76a" strokeWidth="2" />
      <circle cx="203" cy="166" r="7" fill="#788c5b" stroke="#d0dda8" strokeWidth="1.5" />
      <path d="M97 121L109 137L122 121L134 137L146 121" fill="none" stroke="#d0dda8" strokeWidth="2" opacity=".8" />
      <rect x="47" y="99" width="116" height="5" rx="2" fill="#a5bc84" opacity=".4" />
    </g>,

    // 2: Pest control — protection shield
    <g key="pest">
      <circle cx="150" cy="108" r="72" fill="url(#envGlow)" opacity=".55" />
      <path d="M150 43L211 65V112C211 149 183 173 150 189C117 173 89 149 89 112V65Z" fill="url(#shieldMetal)" stroke="#a5bc84" strokeWidth="2" />
      <path d="M150 57L198 74V111C198 139 178 159 150 174C122 159 102 139 102 111V74Z" fill="#111a12" stroke="#6f8b55" strokeWidth="1.3" />
      <path d="M150 83V139M124 111H176" stroke="#819d63" strokeWidth="1" opacity=".4" />
      <ellipse cx="150" cy="109" rx="12" ry="17" fill="#8fa96a" stroke="#d0dda8" strokeWidth="1.5" />
      <circle cx="150" cy="88" r="7" fill="#a9bf84" stroke="#d0dda8" strokeWidth="1.3" />
      <path d="M144 84L137 76M156 84L163 76M139 102L125 94M139 113L124 120M161 102L175 94M161 113L176 120M145 124L136 136M155 124L164 136" fill="none" stroke="#d0dda8" strokeWidth="2" strokeLinecap="round" />
      <path d="M132 151L145 163L171 132" fill="none" stroke="#d0dda8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>,

    // 3: Project coordination — environmental operations
    <g key="operations">
      <ellipse cx="150" cy="181" rx="91" ry="12" fill="#78905b" opacity=".13" />
      <rect x="74" y="60" width="115" height="126" rx="7" fill="url(#truckMetal)" stroke="#91a87a" strokeWidth="1.5" />
      <rect x="88" y="76" width="87" height="95" rx="3" fill="#121a13" stroke="#71885b" strokeWidth="1.2" />
      <path d="M105 95H158M105 108H150M105 121H156" stroke="#91a87a" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <circle cx="110" cy="143" r="8" fill="#829c62" opacity=".35" stroke="#c0d1a2" strokeWidth="1.2" />
      <path d="M106 143L109 146L115 139" fill="none" stroke="#d0dda8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M129 143H158" stroke="#91a87a" strokeWidth="2" strokeLinecap="round" />
      <path d="M129 155H151" stroke="#91a87a" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <path d="M112 60V48Q112 38 122 38H141Q151 38 151 48V60" fill="#253524" stroke="#91a87a" strokeWidth="1.5" />
      <path d="M200 81L215 66L226 77L211 92Z" fill="url(#leafMetal)" stroke="#a5bc84" strokeWidth="1.3" />
      <path d="M197 85L208 96" stroke="#d0dda8" strokeWidth="2" />
      <circle cx="218" cy="58" r="3" fill="#d0dda8" />
      <path d="M52 188H248" stroke="#8da76a" strokeWidth="1.5" opacity=".5" />
    </g>,
  ];

  return (
    <svg
      className="service-art"
      viewBox="0 0 300 220"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="envGlow">
          <stop offset="0%" stopColor="#829b61" stopOpacity=".34" />
          <stop offset="100%" stopColor="#829b61" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="leafMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d0dda8" />
          <stop offset="45%" stopColor="#708c50" />
          <stop offset="100%" stopColor="#293d27" />
        </linearGradient>
        <linearGradient id="truckMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#435a3a" />
          <stop offset="55%" stopColor="#202e20" />
          <stop offset="100%" stopColor="#111711" />
        </linearGradient>
        <linearGradient id="shieldMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#455e38" />
          <stop offset="100%" stopColor="#172218" />
        </linearGradient>
      </defs>
      {art[kind % art.length]}
    </svg>
  );
}


export default function App() {
  const [lang, setLang] = useState('en');
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'light'
        ? 'light'
        : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The theme still works if local storage is unavailable.
    }
  }, [theme]);

  const page = useRef(null);
  const progress = useRef(null);

  const t = copy[lang];
  const isAr = lang === 'ar';

  const navIds = [
    'about',
    'expertise',
    'experience',
    'certificates',
    'projects',
    'contact',
  ];

  const emailReady =
    profile.email && !profile.email.includes('YOUR_EMAIL');

  const phoneReady = profile.phone && !profile.phone.includes('X');

  const phoneDigits = (profile.phone || '').replace(/\D/g, '');

  const displayName = isAr ? 'عبدالرحمن سليم' : profile.name;

  const displayRole = isAr
    ? 'مدير مشروعات · M.A.S Development'
    : `${profile.role} · M.A.S Development`;

  const displayLocation = isAr
    ? 'المدينة المنورة، السعودية'
    : profile.location;

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      if (progress.current && max > 0) {
        progress.current.style.transform = `scaleX(${Math.min(
          window.scrollY / max,
          1
        )})`;
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (loading) return;

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const cleanups = [];

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('.reveal, .reveal-card, .exp-item', {
          clearProps: 'all',
        });
        return;
      }

      // HERO
      const hero = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      hero
        .fromTo(
          '.eyebrow',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
        .fromTo(
          '.hero h1 span',
          { y: 70, opacity: 0, rotateX: -50 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.18,
            transformOrigin: '0% 100%',
          },
          '-=.4'
        )
        .fromTo(
          '.hero-description',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=.6'
        )
        .fromTo(
          '.hero-buttons > *',
          { y: 24, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=.5'
        )
        .fromTo(
          '.hero-bottom',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=.3'
        )
        .fromTo(
          '.hero-visual',
          { opacity: 0, scale: 0.92, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          0.3
        );

      gsap.to('.hero-orb', {
        y: -40,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-grid', {
        yPercent: 6,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.portrait-frame', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-copy', {
        yPercent: -8,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: '60% top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // SECTIONS
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          }
        );
      });

      gsap.utils.toArray('.label-rule').forEach((el) => {
        gsap.fromTo(
          el,
          {
            scaleX: 0,
            transformOrigin: isAr ? 'right' : 'left',
          },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
            },
          }
        );
      });

      gsap.utils.toArray('.reveal-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: (i % 4) * 0.09,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
            },
          }
        );
      });

      gsap.utils.toArray('.exp-item').forEach((el) => {
        gsap.fromTo(
          el,
          { x: isAr ? 60 : -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          }
        );
      });

      gsap.fromTo(
        '.experience-list',
        { '--line': 0 },
        {
          '--line': 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.experience-list',
            start: 'top 80%',
          },
        }
      );

      // SERVICE ART
      gsap.utils.toArray('.service-art').forEach((svg) => {
        gsap.fromTo(
          svg,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: svg,
              start: 'top 90%',
            },
          }
        );
      });

      // STATS
      gsap.utils.toArray('.stat strong').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 20, opacity: 0, letterSpacing: '0.2em' },
          {
            y: 0,
            opacity: 1,
            letterSpacing: '0em',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
            },
          }
        );
      });

      // 3D TILT
      if (window.matchMedia('(hover: hover)').matches) {
        gsap.utils.toArray('.tilt').forEach((el) => {
          const move = (e) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;

            gsap.to(el, {
              rotationY: px * 10,
              rotationX: -py * 10,
              transformPerspective: 900,
              duration: 0.4,
              ease: 'power2.out',
            });
          };

          const leave = () => {
            gsap.to(el, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.6,
              ease: 'power3.out',
            });
          };

          el.addEventListener('mousemove', move);
          el.addEventListener('mouseleave', leave);

          cleanups.push(() => {
            el.removeEventListener('mousemove', move);
            el.removeEventListener('mouseleave', leave);
          });
        });
      }
    }, page);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      window.clearTimeout(refresh);
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [loading, lang]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const Brand = ({ className = '' }) => (
    <a
      href="#home"
      className={`brand ${className}`}
      onClick={(e) => {
        e.preventDefault();
        scrollTo('home');
      }}
    >
      <span className="brand-mark">AS</span>
      <span className="brand-text">
        {displayName}
        <small>{isAr ? 'مدير مشروعات' : 'PROJECTS MANAGER'}</small>
      </span>
    </a>
  );

  return (
    <div
      className={isAr ? 'site rtl' : 'site'}
      dir={isAr ? 'rtl' : 'ltr'}
      ref={page}
    >
      {loading && <IntroLoader onDone={() => setLoading(false)} />}

      <div className="scroll-progress" ref={progress} />

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <Brand />

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {t.nav.map((item, i) => (
            <button key={item} onClick={() => scrollTo(navIds[i])}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            aria-label="Switch language"
            title={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe size={15} />
            {isAr ? 'EN' : 'عربي'}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? isAr
                  ? 'الوضع الفاتح'
                  : 'Light Mode'
                : isAr
                  ? 'الوضع الداكن'
                  : 'Dark Mode'
            }
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="nav-contact"
            onClick={() => scrollTo('contact')}
          >
            {t.contact}
            <ArrowUpRight size={15} />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-shell" id="home">
          <div className="hero-grid" />
          <div className="hero-orb" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              {t.eyebrow}
            </div>

            <h1>{lines(t.heroTitle)}</h1>

            <p className="hero-description">{t.heroText}</p>

            <div className="hero-buttons">
              <button
                className="button-primary"
                onClick={() => scrollTo('projects')}
              >
                {t.explore}
                <ArrowUpRight size={17} />
              </button>

              <button
                className="button-quiet"
                onClick={() => scrollTo('contact')}
              >
                {t.contact}
                <ArrowDownRight size={17} />
              </button>
            </div>

            <div className="hero-bottom">
              <span className="scroll-mark">
                <span />
                {t.scroll}
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={displayName}
                  className="portrait-image"
                />
              ) : (
                <div className="portrait-placeholder">
                  <Building2 size={46} strokeWidth={1} />
                  <strong>{t.photoPlaceholder}</strong>
                  <small>{t.photoHint}</small>
                </div>
              )}

              <div className="portrait-corner tl" />
              <div className="portrait-corner br" />
            </div>

            <div className="visual-caption">
              <div>
                <strong>{displayName}</strong>
                <small>{displayRole}</small>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...t.marquee, ...t.marquee, ...t.marquee].map((m, i) => (
              <span key={i}>
                {m}
                <i>◆</i>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section-shell section-pad" id="about">
          <div className="section-label reveal">
            <span>{t.aboutLabel}</span>
            <span className="label-rule" />
          </div>

          <div className="about-layout">
            <h2 className="reveal">{lines(t.aboutTitle)}</h2>

            <div className="about-copy reveal">
              <p>{t.aboutText}</p>
              <div className="about-location">
                <MapPin size={16} />
                <span>{displayLocation}</span>
              </div>
            </div>
          </div>

          <div className="stats-row">
            {t.stats.map(([v, l]) => (
              <div className="stat reveal-card" key={l}>
                <strong>{v}</strong>
                <small>{l}</small>
              </div>
            ))}

            <div className="stat-note reveal-card">“{t.quote}”</div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section-shell section-pad" id="expertise">
          <div className="section-heading reveal">
            <div className="section-label">
              <span>{t.expertiseLabel}</span>
              <span className="label-rule" />
            </div>

            <h2>{t.expertiseTitle}</h2>
            <p>{t.expertiseSub}</p>
          </div>

          <div className="expertise-grid">
            {t.expertise.map(([n, title, desc]) => (
              <article
                className="expertise-card reveal-card tilt"
                key={n}
              >
                <div className="card-top">
                  <span>{n}</span>
                  <ArrowUpRight size={19} />
                </div>

                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="card-bottom-line" />
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-shell section-pad" id="experience">
          <div className="section-heading reveal">
            <div className="section-label">
              <span>{t.expLabel}</span>
              <span className="label-rule" />
            </div>

            <h2>{t.expTitle}</h2>
          </div>

          <div className="experience-list">
            {t.experience.map((item, i) => (
              <article className="exp-item" key={item.period + i}>
                <div className="exp-marker">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="exp-content">
                  <div className="exp-meta">
                    <span>{item.period}</span>
                    <span className="exp-dot" />
                    <span>{item.place}</span>
                  </div>

                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section
          className="section-shell section-pad"
          id="certificates"
        >
          <div className="section-heading reveal">
            <div className="section-label">
              <span>{t.certLabel}</span>
              <span className="label-rule" />
            </div>

            <h2>{t.certTitle}</h2>
            <p>{t.certSub}</p>
          </div>

          <div className="cert-grid">
            {t.certs.map((c, i) => {
              const img = (profile.certImages || [])[i];

              return (
                <article
                  className="cert-card reveal-card tilt"
                  key={c.title}
                >
                  <div
                    className={`cert-frame ${img ? 'has-img' : ''}`}
                    onClick={() =>
                      img && setLightbox({ src: img, title: c.title })
                    }
                    role={img ? 'button' : undefined}
                    tabIndex={img ? 0 : undefined}
                    onKeyDown={(e) =>
                      img &&
                      e.key === 'Enter' &&
                      setLightbox({ src: img, title: c.title })
                    }
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={c.title}
                        className="cert-image"
                      />
                    ) : (
                      <div className="cert-placeholder">
                        <Award size={40} strokeWidth={1} />
                        <span>{t.certSlot}</span>
                      </div>
                    )}

                    <span className="cert-corner tl" />
                    <span className="cert-corner br" />
                    <span className="cert-shine" />

                    {img && (
                      <span className="cert-zoom">
                        <ZoomIn size={18} />
                      </span>
                    )}
                  </div>

                  <div className="cert-info">
                    <span className="cert-year">{c.year}</span>
                    <h3>{c.title}</h3>
                    <p>{c.issuer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ENVIRONMENTAL SERVICES / PROJECTS */}
        <section className="section-shell section-pad" id="projects">
          <div className="section-heading project-heading reveal">
            <div>
              <div className="section-label">
                <span>{t.projectLabel}</span>
                <span className="label-rule" />
              </div>

              <h2>{t.projectTitle}</h2>
            </div>

            <p>{t.projectText}</p>
          </div>

          <div className="projects-grid">
            {t.projects.map((p, i) => (
              <article
                className="project-card reveal-card tilt"
                key={p.type + i}
              >
                <div className="project-art">
                  <div className="art-grid" />
                  <div className="art-number">0{i + 1}</div>

                  <ServiceArt kind={i} />

                  <div className="art-tag">
                    {p.type} · {p.loc}
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <h3>{p.name || p.type}</h3>
                    <p>{p.desc}</p>
                  </div>

                  <span className="project-link">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-shell section-pad" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-glow" />

            <div className="section-label">
              <span>{t.contactLabel}</span>
              <span className="label-rule" />
            </div>

            <h2>{lines(t.contactTitle)}</h2>
            <p>{t.contactText}</p>

            <div className="contact-links">
              <a
                className="contact-link"
                href={emailReady ? `mailto:${profile.email}` : '#contact'}
                onClick={(e) => !emailReady && e.preventDefault()}
              >
                <span className="contact-icon">
                  <Mail size={18} />
                </span>

                <span>
                  <small>{t.email}</small>
                  <strong>{profile.email}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                className="contact-link"
                href={phoneReady ? `tel:${profile.phone}` : '#contact'}
                onClick={(e) => !phoneReady && e.preventDefault()}
              >
                <span className="contact-icon">
                  <Phone size={18} />
                </span>

                <span>
                  <small>{t.call}</small>
                  <strong dir="ltr">{profile.phone}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                className="contact-link"
                href={
                  phoneReady
                    ? `https://wa.me/${phoneDigits}`
                    : '#contact'
                }
                target={phoneReady ? '_blank' : undefined}
                rel="noreferrer"
                onClick={(e) => !phoneReady && e.preventDefault()}
              >
                <span className="contact-icon whatsapp-icon">W</span>

                <span>
                  <small>{t.whatsapp}</small>
                  <strong dir="ltr">{profile.phone}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <Brand className="footer-brand" />

        <span className="footer-copy">
          © {new Date().getFullYear()} {displayName}. {t.footer}
        </span>

        <button
          className="back-top"
          onClick={() => scrollTo('home')}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </footer>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label={lightbox.title}
        >
          <button className="lightbox-close" aria-label="Close">
            <X size={22} />
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
