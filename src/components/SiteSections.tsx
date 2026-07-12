import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const studio = {
  name: "The Imperial Tattoo Studio",
  category: "Tattoo shop",
  rating: "4.9",
  reviews: "386 reviews",
  address:
    "D-15 Indravihar Park, Near Navrang High School, K P, Hights Road, Ambika Nagar, Odhav, Ahmedabad, Gujarat 382415",
  hours: "Open · Closes 11 PM",
  phone: "092652 09572",
  plusCode: "2MJ5+FR Ahmedabad, Gujarat",
};

const navItems = ["Home", "About", "Artists", "Gallery", "Designs", "Contact"];

const gallery = [
  {
    title: "Mahadev Tattoo",
    tag: "Devotional",
    className: "md:col-span-5 md:row-span-2",
    src: "/tattoodesigns/mahadevTattoo.mp4",
    type: "video",
  },
  {
    title: "Fist Tattoo",
    tag: "Blackwork",
    className: "md:col-span-3",
    src: "/tattoodesigns/fistTattoo.jpg",
    type: "image",
  },
  {
    title: "Forearm Sleeve",
    tag: "Realism",
    className: "md:col-span-4 md:row-span-2",
    src: "/tattoodesigns/foreArmTattoo.mp4",
    type: "video",
  },
  {
    title: "Neck Mandala",
    tag: "Fine Line",
    className: "md:col-span-3",
    src: "/tattoodesigns/neckTattoo.mp4",
    type: "video",
  },
  {
    title: "Full back mythology",
    tag: "Custom",
    className: "md:col-span-5",
    src: "/tattoo-theme.webp",
    type: "image",
    position: "33% 71%",
  },
  {
    title: "Geometric sleeve",
    tag: "Cover-up",
    className: "md:col-span-4",
    src: "/tattoo-theme.webp",
    type: "image",
    position: "83% 55%",
  },
];

const artists = [
  {
    name: "Aarav Shah",
    specialty: "Blackwork and sacred geometry",
    imagePosition: "83% 55%",
  },
  {
    name: "Meera Patel",
    specialty: "Fine line florals and script",
    imagePosition: "20% 12%",
  },
  {
    name: "Kabir Desai",
    specialty: "Realism, portraits, and sleeves",
    imagePosition: "51% 12%",
  },
];

const heroCards = [
  { alt: "Geometric blackwork sleeve tattoo", src: "/hero/tattooCarouselImg1.jpg" },
  { alt: "Black spider tattoo on skin", src: "/hero/tattooCarouselImg2.jpg" },
  { alt: "Ornamental mandala shoulder tattoo", src: "/hero/tattooCarouselImg3.jpg" },
  { alt: "Tattooed artist portrait", src: "/hero/tattooCarouselImg4.jpg" },
  { alt: "Compass and sword tattoo on forearm", src: "/hero/piercingCarouselImg5.jpg" },
  { alt: "Skull and crossbones tattoo", src: "/hero/tattooCarouselImg6.jpg" },
  { alt: "Dagger and heart linework tattoo", src: "/hero/tattooCarouselImg7.jpg" },
];

/**
 * Compute arc transform for each card.
 * Gentle convex arc matching the reference — center card is highest,
 * outer cards tilt outward and shift downward.
 */
function getArcStyle(index: number, total: number): React.CSSProperties {
  const mid = (total - 1) / 2;
  const offset = index - mid; // -3 ... 0 ... +3
  const maxRotate = 16; // gentle tilt (negative on left, positive on right)
  const maxTz = -50; // subtle depth push
  const maxTy = 85; // outer cards shift downwards (convex)

  const rotate = (offset / mid) * maxRotate;
  const absNorm = Math.abs(offset) / mid;
  const tz = absNorm * absNorm * maxTz;
  const ty = absNorm * absNorm * maxTy;

  return {
    "--arc-rotate": `${rotate}deg`,
    "--arc-tz": `${tz}px`,
    "--arc-ty": `${ty}px`,
    zIndex: total - Math.abs(offset) * 2,
  } as React.CSSProperties;
}

const mapsUrl = "https://maps.app.goo.gl/eJGzCSxTiJ8sv57E7";
const mapEmbedUrl = "https://www.google.com/maps?q=The+Imperial+Tattoo+Studio+Ahmedabad&output=embed";

function CTA({
  children,
  href = "#contact",
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "dark";
}) {
  return (
    <Link className={`stroke-link ${variant}`} href={href}>
      {children}
    </Link>
  );
}

//this is demo

function FramedImage({
  alt,
  position,
  className = "",
  priority = false,
}: {
  alt: string;
  position: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <Image
        src="/tattoo-theme.webp"
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover grayscale transition duration-700"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

export function Header() {
  const headerLinks = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Artists", href: "#artists" },
    { label: "Designs", href: "#designs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-black/80 text-paper-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <Link href="#home" className="group flex items-center focus-ring">
          <span className="font-serif text-sm sm:text-base md:text-lg tracking-[0.12em] sm:tracking-[0.18em] uppercase text-[#f0eee8] transition-colors duration-300 hover:text-white">
            The Imperial Tattoo Studio
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex lg:gap-8">
          {headerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-paper-white/60 transition-colors duration-300 hover:text-white focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Link
            href="#contact"
            className="border border-white/20 hover:border-white text-paper-white text-[0.7rem] font-medium tracking-[0.14em] uppercase rounded-full px-5 py-2.5 transition-all duration-300 hover:bg-white/5 focus-ring"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-editorial relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-paper-white"
    >
      {/* --- Text content --- */}
      <div className="relative z-10 mx-auto flex flex-1 max-w-5xl flex-col items-center justify-center px-4 pt-28 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="hero-serif mx-auto max-w-5xl text-[clamp(3.4rem,8.2vw,7.8rem)] leading-[0.92] tracking-normal text-[#f0eee8]">
            The Kind of Tattoo
            <br className="hidden sm:inline" />{" "}
            You Won&apos;t Regret.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-paper-white/50 sm:text-[0.92rem]">
            Exclusive blackwork tattoos by appointment-only.
            <br />
            Where clean design meets permanent art.
          </p>
        </div>
      </div>

      {/* --- Semicircle card arc at bottom --- */}
      <div className="hero-card-arc relative z-10">
        {heroCards.map((card, index) => (
          <article
            className="hero-card"
            key={card.src}
            style={getArcStyle(index, heroCards.length)}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              priority={index === 3}
              sizes="(max-width: 768px) 18vw, 13vw"
              className="object-cover"
            />
          </article>
        ))}
        <div className="hero-arc-glow" />

        {/* Buttons overlaying the bottom center of the arc */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-4 w-max max-w-[calc(100vw-2rem)] px-4">
          <Link
            href="#contact"
            className="bg-[#e4e4e2] hover:bg-white text-black text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-6 py-3.5 transition-colors duration-300 shadow-xl focus-ring whitespace-nowrap"
          >
            Book an Appointment
          </Link>
          <Link
            href="#gallery"
            className="border border-white/20 hover:border-white text-white hover:bg-white/5 text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-6 py-3.5 transition-colors duration-300 focus-ring whitespace-nowrap"
          >
            View The Flash Book
          </Link>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section paper relative overflow-hidden">
      <span className="ghost-word left-[-6vw] top-8">INK</span>
      <div className="section-inner grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
        <Reveal>
          <FramedImage
            alt="Monochrome tattooed portrait from the studio mood board"
            position="22% 30%"
            className="min-h-[34rem]"
            priority
          />
        </Reveal>
        <Reveal className="relative z-10">
          <p className="eyebrow">Stories on skin</p>
          <h2 className="section-title max-w-3xl">New tattoo. Deliberate destiny.</h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-steel-grey">
            <p>
              At The Imperial Tattoo Studio, each piece begins with the person
              wearing it. We translate memories, symbols, references, and raw
              ideas into designs that sit naturally on the body.
            </p>
            <p>
              The work is custom-first: clean preparation, focused consultation,
              precise execution, and aftercare guidance that keeps the tattoo
              aging with intention.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="section ink relative overflow-hidden">
      <span className="ghost-word right-[-12vw] top-14 text-paper-white/5">TATTOO</span>
      <div className="section-inner">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Our gallery</p>
            <h2 className="section-title text-paper-white">Linework Tattoos that holds the room.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Blackwork", "Traditional", "Fine Line", "Realism"].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-12">
          {gallery.map((item) => (
            <Reveal key={item.title} className={item.className}>
              <article className="gallery-card group">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 size-full object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                    style={{ objectPosition: item.position || "center" }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 pointer-events-none">
                  <h3 className="font-display text-3xl uppercase leading-none text-paper-white">
                    {item.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.22em] text-signal-teal">
                    {item.tag}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Artists() {
  return (
    <section id="artists" className="section paper relative overflow-hidden">
      <div className="section-inner grid gap-10 lg:grid-cols-[10rem_1fr]">
        <Reveal>
          <div className="vertical-label">Eternal Tattoo</div>
        </Reveal>
        <div>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Artists</p>
            <h2 className="section-title">Choose the hand that fits the story.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {artists.map((artist) => (
              <Reveal key={artist.name}>
                <article className="artist-card">
                  <FramedImage
                    alt={`${artist.name}, tattoo artist portrait`}
                    position={artist.imagePosition}
                    className="aspect-[4/5]"
                  />
                  <div className="mt-5">
                    <h3 className="font-display text-4xl uppercase leading-none">
                      {artist.name}
                    </h3>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-steel-grey">
                      {artist.specialty}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <CTA href="#contact" variant="dark">Book</CTA>
                      <a className="inline-link focus-ring" href="#gallery">
                        Work
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DesignsAndStats() {
  return (
    <section id="designs" className="bg-ink-black text-paper-white">
      <div className="section-inner grid gap-1 py-0 md:grid-cols-4">
        {[
          ["4.9", "studio rating"],
          ["386", "client reviews"],
          ["Custom", "design first"],
          ["Odhav", "Ahmedabad studio"],
        ].map(([value, label]) => (
          <Reveal key={label}>
            <div className="border-x border-mist/10 px-6 py-10">
              <div className="font-display text-6xl uppercase leading-none">{value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.28em] text-mist">{label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VisitStudio() {
  return (
    <section id="contact" className="section paper relative overflow-hidden">
      <span className="ghost-word bottom-4 right-[-8vw]">VISIT</span>
      <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <Reveal className="relative z-10">
          <p className="eyebrow">Visit the studio</p>
          <h2 className="section-title">Walk in with an idea. Leave with a mark.</h2>
          <dl className="mt-8 space-y-5 text-base leading-7">
            <div>
              <dt className="detail-label">Address</dt>
              <dd className="text-steel-grey">{studio.address}</dd>
            </div>
            <div>
              <dt className="detail-label">Hours</dt>
              <dd className="text-steel-grey">{studio.hours}</dd>
            </div>
            <div>
              <dt className="detail-label">Phone</dt>
              <dd>
                <a className="inline-link focus-ring" href={`tel:${studio.phone}`}>
                  {studio.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="detail-label">Google Plus Code</dt>
              <dd className="text-steel-grey">{studio.plusCode}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <CTA href={mapsUrl} variant="dark">Get Directions</CTA>
          </div>
        </Reveal>
        <Reveal>
          <div className="map-shell">
            <iframe
              title="Map showing The Imperial Tattoo Studio in Ahmedabad"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-ink-black px-4 py-8 text-paper-white sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border border-signal-teal bg-signal-teal/15 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-mist">Artistry in ink chronicles</p>
            <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
              Ready for your next story on skin?
            </h2>
          </div>
          <CTA>Book Now</CTA>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-black text-paper-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-mist/15 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="font-display text-4xl uppercase leading-none">The Imperial Tattoo Studio</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-mist">
            {studio.category} · {studio.rating} ★ · {studio.reviews}
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-3 text-sm">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="nav-link focus-ring">
              {item}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-7 text-mist">
          <p>{studio.address}</p>
          <p className="mt-3">{studio.hours}</p>
          <a className="inline-link focus-ring" href={`tel:${studio.phone}`}>
            {studio.phone}
          </a>
          <p className="mt-6 text-xs uppercase tracking-[0.22em]">
            © 2026 {studio.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
