import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Clock, Compass, Puzzle, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { industries } from "@/data/industries";
import heroImg from "@/assets/hero-factory-dusk.jpg";
import earnImg from "@/assets/opportunity-earning.jpg";
import saveImg from "@/assets/opportunity-saving.jpg";
import measureImg from "@/assets/process-measure.jpg";
import reportImg from "@/assets/process-report.jpg";
import adviseImg from "@/assets/process-advise.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* S01 — HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Indian industrial complex at dusk with smoke stacks silhouetted against a moody sky"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover img-editorial"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink/85" />
        <div className="relative z-10 h-full container-editorial flex flex-col justify-center text-center text-ink-foreground pt-20">
          <p className="eyebrow-on-ink mb-8 fade-up">Bombay Carbon Exchange</p>
          <h1 className="display-1 mx-auto max-w-4xl fade-up" style={{ animationDelay: "0.1s" }}>
            You're losing money <em className="not-italic" style={{ color: "hsl(var(--accent-glow))" }}>right now.</em>
          </h1>
          <p className="lead lead-on-ink mt-8 mx-auto max-w-2xl fade-up" style={{ animationDelay: "0.2s" }}>
            Either ₹20L/year you could be earning. Or ₹50L/year you could be saving.
            You'll never know which one until you measure.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#sectors" className="btn-primary">
              Discover your opportunity <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#process" className="btn-ghost">How it works</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
          <span className="font-mono uppercase tracking-[0.2em] text-[0.65rem] text-ink-foreground/60">
            Scroll
          </span>
        </div>
      </section>

      {/* S02 — THE BLIND SPOT */}
      <section className="section-ink py-28 md:py-40">
        <div className="container-narrow">
          <p className="eyebrow-on-ink mb-8">The Blind Spot</p>
          <h2 className="display-2 text-ink-foreground mb-12">
            Something big is coming. You don't see it yet.
          </h2>

          <div className="space-y-8 text-ink-foreground/85 text-lg leading-relaxed">
            <p>
              India's Carbon Credit Trading Scheme (CCTS, 2023) becomes mandatory from
              FY 2026–27. Every notified factory must measure its emissions and submit
              a verified MRV report.
            </p>
            <p>
              If your facility's GEI is above the BEE target, you must buy credits to
              cover the gap — or face penalties of <span style={{ color: "hsl(var(--accent-glow))" }}>up to ₹11 crore</span>.
              If it's below, you can sell the surplus.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-ink-foreground pt-4">
              You're walking toward a wall you can't see.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline">
            {[
              { label: "Today", text: "Most factories are blind" },
              { label: "+30 days", text: "Data collection begins" },
              { label: "+90 days", text: "MRV reports due" },
              { label: "FY 26–27", text: "Penalty exposure live" },
            ].map((t) => (
              <div key={t.label} className="bg-ink p-6 md:p-8">
                <div className="font-mono uppercase tracking-[0.18em] text-[0.7rem] text-accent-glow mb-3">
                  {t.label}
                </div>
                <div className="text-ink-foreground/85 text-sm leading-relaxed">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03 — TWO HIDDEN OPPORTUNITIES */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">Two Hidden Opportunities</p>
            <h2 className="display-2">Whichever side you're on, you're losing it today.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {/* Earning */}
            <article className="bg-background p-8 md:p-12">
              <div className="aspect-[4/3] mb-10 overflow-hidden">
                <img
                  src={earnImg}
                  alt="Stack of Indian rupee notes with a small green sapling on a dark slate"
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
              <p className="eyebrow mb-4">If you're efficient</p>
              <h3 className="display-3 mb-6">The Earning Opportunity</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>₹20L+<span className="text-2xl font-sans font-normal text-muted-foreground">/year</span></div>
              <p className="text-muted-foreground mb-6">In carbon credits you don't know you could generate.</p>
              <p className="text-foreground leading-relaxed mb-8">
                If your emissions are <em className="not-italic font-medium">below</em> the BEE target,
                you have surplus. That surplus has a market price. That price is money.
              </p>
              <div className="mono-label">Right now: unknown · Losing opportunity</div>
            </article>

            {/* Saving */}
            <article className="bg-background p-8 md:p-12">
              <div className="aspect-[4/3] mb-10 overflow-hidden">
                <img
                  src={saveImg}
                  alt="Industrial steam vapour rising in a dim factory boiler room with a glowing furnace"
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
              <p className="eyebrow mb-4">If you're not</p>
              <h3 className="display-3 mb-6">The Saving Opportunity</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>₹10–50L<span className="text-2xl font-sans font-normal text-muted-foreground">/year</span></div>
              <p className="text-muted-foreground mb-6">In energy you don't realise you're wasting.</p>
              <p className="text-foreground leading-relaxed mb-8">
                If your emissions are <em className="not-italic font-medium">above</em> the BEE target,
                there's waste. Waste has a name: steam leaks, idle compressors, vented heat. Fix it, keep the money.
              </p>
              <div className="mono-label">Right now: unknown · Burning money</div>
            </article>
          </div>
        </div>
      </section>

      {/* S04 — CORE MESSAGE */}
      <section className="py-28 md:py-36 bg-secondary">
        <div className="container-editorial">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="eyebrow mb-6">The Core Message</p>
            <h2 className="display-2">Either way, you're losing.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { icon: Compass, title: "Not measuring", text: "You don't know your baseline.", status: "Losing both awareness AND opportunity." },
              { icon: AlertTriangle, title: "Not aware", text: "CCTS compliance is coming in 90 days.", status: "Losing time to prepare." },
              { icon: Puzzle, title: "Not consulting", text: "No strategic plan for what to do next.", status: "Losing competitive advantage." },
            ].map(({ icon: Icon, title, text, status }) => (
              <div key={title} className="border-t hairline pt-8">
                <Icon className="w-8 h-8 mb-6" style={{ color: "hsl(var(--accent))" }} strokeWidth={1.25} />
                <div className="eyebrow mb-3">{title}</div>
                <p className="font-serif text-2xl leading-snug mb-4">{text}</p>
                <p className="text-sm text-muted-foreground">{status}</p>
              </div>
            ))}
          </div>

          <p className="text-center display-3 mt-24 max-w-3xl mx-auto" style={{ color: "hsl(var(--accent))" }}>
            Not measuring = leaving ₹30–70L on the table. Every year.
          </p>
        </div>
      </section>

      {/* S05 — WHAT WE DO */}
      <section id="process" className="py-28 md:py-40">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">What we do</p>
            <h2 className="display-2">We make you see.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-px bg-border">
            {[
              { n: "01", img: measureImg, title: "Measure", body: "We audit your factory in 6 weeks. Bills, production data, MRV protocol, Scope 1+2 emissions.", out: "Baseline data + GEI calculation" },
              { n: "02", img: reportImg, title: "Report", body: "We show you the truth. Your GEI vs the BEE target. No spin, no jargon.", out: "Clear answer: above or below target" },
              { n: "03", img: adviseImg, title: "Advise", body: "We tell you what's next. Earn credits if below. Save energy + hit target if above.", out: "Clear strategy and roadmap" },
            ].map((s) => (
              <article key={s.n} className="bg-background p-8 md:p-10">
                <div className="aspect-[4/3] mb-8 overflow-hidden">
                  <img src={s.img} alt={s.title} width={1280} height={960} loading="lazy" className="w-full h-full object-cover img-editorial" />
                </div>
                <div className="font-mono text-xs tracking-[0.2em] text-muted-foreground mb-4">STEP {s.n}</div>
                <h3 className="display-3 mb-4">{s.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.body}</p>
                <p className="font-mono uppercase tracking-[0.16em] text-[0.7rem]" style={{ color: "hsl(var(--accent))" }}>
                  → {s.out}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S06 — WHY YOU NEED US */}
      <section className="section-ink py-28 md:py-36">
        <div className="container-editorial">
          <p className="eyebrow-on-ink mb-6">Why not DIY?</p>
          <h2 className="display-2 text-ink-foreground mb-20 max-w-2xl">
            Three reasons factories hire us instead.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-hairline">
            {[
              { icon: Puzzle, title: "Complexity", text: "ISO 14064-1, GHG Protocol, BEE emission factors — MRV is technical.", us: "We speak the language. You don't waste time learning it." },
              { icon: ShieldCheck, title: "Credibility", text: "BEE-empanelled verifiers reject sloppy reports. Mistakes mean restart.", us: "Our reports get accepted first time, every time." },
              { icon: Clock, title: "Speed", text: "DIY = months of trial and error. The clock is already running.", us: "We deliver a complete MRV in 6 weeks. Penalty hits in 90 days." },
            ].map(({ icon: Icon, title, text, us }) => (
              <div key={title} className="bg-ink p-8 md:p-10">
                <Icon className="w-8 h-8 mb-6 text-accent-glow" strokeWidth={1.25} />
                <div className="eyebrow-on-ink mb-3">{title}</div>
                <p className="text-ink-foreground/90 leading-relaxed mb-6">{text}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{us}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S07 — INDUSTRIES */}
      <section id="sectors" className="py-28 md:py-40">
        <div className="container-wide">
          <div className="mb-20 max-w-2xl">
            <p className="eyebrow mb-6">Choose your industry</p>
            <h2 className="display-2">Your sector. Your opportunity.</h2>
            <p className="lead mt-6">Nine sectors. Same blind spot. Different numbers.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/${ind.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-ink card-hover block"
              >
                <img
                  src={ind.image}
                  alt={`${ind.name} industry`}
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover img-editorial transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end text-ink-foreground">
                  <div className="font-mono uppercase tracking-[0.2em] text-[0.7rem] text-accent-glow mb-3">
                    {String(industries.indexOf(ind) + 1).padStart(2, "0")} / 09
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-3">{ind.name}</h3>
                  <p className="text-ink-foreground/80 text-sm leading-relaxed mb-5 max-w-xs">
                    {ind.hook}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.16em] text-[0.7rem] text-ink-foreground">
                    Open sector <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S08 — CONTACT */}
      <section id="contact" className="py-28 md:py-36 bg-secondary">
        <div className="container-editorial grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Discovery call</p>
            <h2 className="display-2 mb-6">Let's find out what you're losing.</h2>
            <p className="lead">
              30 minutes. No slides. We ask about your factory, walk you through the
              opportunity in your sector, and tell you exactly what an MRV would
              uncover.
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
