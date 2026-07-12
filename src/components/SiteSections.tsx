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
  phone: "+91 92652 09572",
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
    src: "/tattoodesigns/mythology_back.png",
    type: "image",
    position: "center",
  },
  {
    title: "Geometric sleeve",
    tag: "Cover-up",
    className: "md:col-span-4",
    src: "/tattoodesigns/geometric_sleeve.png",
    type: "image",
    position: "center",
  },
];

const artists = [
  {
    name: "parth_tattooist_02",
    specialty: "Lead Artist specializing in custom blackwork, fine-line, and hyper-realism.",
    imagePosition: "center",
    src: "/primary_artist.png",
    instagram: "https://www.instagram.com/parth_tattooist_02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
 * Gentle convex arc matching the reference — center card is highest.
 * Calculations are offloaded to CSS variables for responsive queries.
 */
function getArcStyle(index: number, total: number): React.CSSProperties {
  const mid = (total - 1) / 2;
  const offset = index - mid; // -3 ... 0 ... +3
  const absNorm = Math.abs(offset) / mid;

  return {
    "--arc-index": index,
    "--arc-offset": offset,
    "--arc-abs-norm": absNorm,
    zIndex: total - Math.abs(offset) * 2,
  } as React.CSSProperties;
}

const mapsUrl = "https://maps.app.goo.gl/eJGzCSxTiJ8sv57E7";
const mapEmbedUrl = "https://www.google.com/maps?q=The+Imperial+Tattoo+Studio+Ahmedabad&output=embed";
const bookingUrl = "https://wa.me/919265209572?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20The%20Imperial%20Tattoo%20Studio.";

function CTA({
  children,
  href = bookingUrl,
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline" | "dark";
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      className={`stroke-link ${variant}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
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
  src = "/tattoo-theme.webp",
}: {
  alt: string;
  position: string;
  className?: string;
  priority?: boolean;
  src?: string;
}) {
  return (
    <div className={`photo-frame ${className}`}>
      <Image
        src={src}
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
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Artists", href: "#artists" },
    { label: "Designs", href: "#designs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-black/80 text-paper-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3 focus-ring">
          <div className="relative size-8 overflow-hidden rounded-full border border-white/25 grayscale">
            <Image
              src="/logo/imperial_logo.jpg"
              alt="The Imperial Tattoo Studio logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
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
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
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
          <h1 className="hero-serif mx-auto max-w-5xl text-[clamp(2.2rem,8.2vw,7.8rem)] leading-[0.92] tracking-normal text-[#f0eee8]">
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
        <div className="absolute bottom-6 left-1/2 z-30 flex flex-col sm:flex-row -translate-x-1/2 gap-3 w-max max-w-[calc(100vw-2rem)] px-4">
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e4e4e2] hover:bg-white text-black text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-6 py-3.5 transition-colors duration-300 shadow-xl focus-ring whitespace-nowrap text-center"
          >
            Book an Appointment
          </Link>
          <Link
            href="#gallery"
            className="border border-white/20 hover:border-white text-white hover:bg-white/5 text-xs font-semibold tracking-[0.14em] uppercase rounded-full px-6 py-3.5 transition-colors duration-300 focus-ring whitespace-nowrap text-center"
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
            position="center"
            src="/about_studio.png"
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

export function Services() {
  const services = [
    {
      title: "Permanent Tattoo",
      description: "Custom illustrative, blackwork, fine-line, and hyper-realistic body art tailored to your personal narrative.",
      icon: "✒️",
    },
    {
      title: "Microblading",
      description: "Semi-permanent cosmetic tattooing simulating natural eyebrow hairs for a fuller, precisely defined shape.",
      icon: "✍️",
    },
    {
      title: "Permanent Makeup",
      description: "Premium cosmetic tattooing for lips (blush) and eyeliner to enhance your daily features permanently.",
      icon: "✨",
    },
    {
      title: "Body Piercing",
      description: "Safe, clean, and professional body piercings utilizing premium titanium and implant-grade jewelry.",
      icon: "💎",
    },
  ];

  return (
    <section id="services" className="section ink relative overflow-hidden">
      <span className="ghost-word left-[-8vw] top-12 text-white/5">CRAFT</span>
      <div className="section-inner">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="section-title text-paper-white">Artistry Beyond Boundaries.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="border border-white/10 bg-white/5 p-8 hover:border-signal-teal/50 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col h-full justify-between">
                <div>
                  <span className="text-4xl block mb-6">{service.icon}</span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-paper-white group-hover:text-signal-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-paper-white/50">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
          <div className="mt-10 max-w-sm">
            {artists.map((artist) => (
              <Reveal key={artist.name}>
                <article className="artist-card">
                  <FramedImage
                    alt={`${artist.name}, tattoo artist portrait`}
                    position={artist.imagePosition}
                    src={artist.src}
                    className="aspect-[4/5]"
                  />
                  <div className="mt-5">
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-signal-teal transition-colors duration-300 focus-ring inline-block"
                    >
                      <h3 className="font-display text-4xl uppercase leading-none">
                        {artist.name}
                      </h3>
                    </a>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-steel-grey">
                      {artist.specialty}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <CTA variant="dark">Book</CTA>
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
          <div className="mt-6">
            <a
              href="https://www.instagram.com/parth_tattooist_02?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-mist hover:text-paper-white transition-colors duration-300 focus-ring"
              aria-label="Instagram Profile"
            >
              <svg
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.96.23 2.673.506.759.296 1.41.697 2.057 1.344.647.647 1.048 1.298 1.344 2.057.276.714.455 1.533.506 2.673.043.926.052 1.282.052 3.71 0 2.43-.009 2.784-.052 3.71-.051 1.14-.23 1.96-.506 2.673a5.579 5.579 0 01-1.344 2.057 5.58 5.58 0 01-2.057 1.344c-.714.276-1.533.455-2.673.506-.926.043-1.282.052-3.71.052-2.43 0-2.784-.009-3.71-.052-1.14-.051-1.96-.23-2.673-.506a5.579 5.579 0 01-2.057-1.344 5.579 5.579 0 01-1.344-2.057c-.276-.714-.455-1.533-.506-2.673-.043-.926-.052-1.282-.052-3.71 0-2.43.009-2.784.052-3.71.051-1.14.23-1.96.506-2.673a5.584 5.584 0 011.344-2.057 5.583 5.583 0 012.057-1.344c.714-.276 1.533-.455 2.673-.506.926-.043 1.282-.054 3.71-.054zm0 2.232c-2.388 0-2.671.009-3.613.053-.872.04-1.346.186-1.66.309a3.35 3.35 0 00-1.218.793 3.35 3.35 0 00-.793 1.218c-.123.314-.268.788-.309 1.66-.043.942-.052 1.226-.052 3.613s.009 2.671.052 3.613c.04.872.186 1.346.309 1.66.222.573.535 1.04.99 1.496.455.455.922.77 1.495.99.314.123.788.268 1.66.309.942.043 1.226.052 3.613.052s2.671-.009 3.613-.052c.872-.04 1.346-.186 1.66-.309a3.352 3.352 0 001.218-.793 3.35 3.35 0 00.793-1.218c.123-.314.268-.788.309-1.66.043-.942.052-1.226.052-3.613s-.009-2.671-.052-3.613c-.04-.872-.186-1.346-.309-1.66a3.35 3.35 0 00-.793-1.218 3.35 3.35 0 00-1.218-.793c-.314-.123-.788-.268-1.66-.309-.942-.044-1.226-.053-3.613-.053zm0 2.678a5.09 5.09 0 100 10.18 5.09 5.09 0 000-10.18zm0 7.948a2.858 2.858 0 110-5.717 2.858 2.858 0 010 5.717zm6.037-6.978a1.22 1.22 0 100-2.44 1.22 1.22 0 000 2.44z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Follow us on Instagram</span>
            </a>
          </div>
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
