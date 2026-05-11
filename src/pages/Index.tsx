import { Link } from "react-router-dom";
// Triggering deployment refresh
import { ArrowRight, AlertTriangle, Clock, Compass, Puzzle, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { industries } from "@/data/industries";
import heroImg from "@/assets/hero-factory-dusk.jpg";
import earnImg from "@/assets/opportunity-earning.jpg";
import saveImg from "@/assets/opportunity-saving.jpg";
import measureImg from "@/assets/img_5860.png";
import reportImg from "@/assets/img_5859.png";
import adviseImg from "@/assets/img_5862.png";
import logo from "@/assets/bcx-logo.png";

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
        <div className="relative z-10 h-full container-editorial flex flex-col justify-center text-center text-ink-foreground">
          <p className="eyebrow-on-ink mb-8 fade-up">Bombay Carbon Exchange</p>
          <h1 className="mx-auto max-w-5xl fade-up flex flex-col gap-3 md:gap-4" style={{ animationDelay: "0.1s" }}>
            <span className="display-1 block">
              You are losing money <span className="text-accent-glow/60">right now.</span>
            </span>
            <span className="display-3 block text-ink-foreground/80 font-normal">
              Get ready before the <span className="text-accent-glow/60">compliance hits.</span>
            </span>
          </h1>
          <p className="lead lead-on-ink mt-8 mx-auto max-w-2xl fade-up" style={{ animationDelay: "0.2s" }}>
            Either ₹20L/year you could be earning. Or ₹50L/year you could be saving.
            You'll never know which one until you measure.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#sectors" className="btn-primary">
              Discover your opportunity <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#process" className="btn-ghost">Our methodology</a>
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
            A climate reckoning is coming. Are you prepared?
          </h2>

          <div className="space-y-8 text-ink-foreground/85 text-lg leading-relaxed">
            <p>
              India's Carbon Credit Trading Scheme (CCTS, 2023) becomes mandatory from
              FY 2026–27. Every notified obligated entity must quantify its greenhouse gas emissions and submit
              a third-party verified MRV report.
            </p>
            <p>
              If your facility's GEI exceeds the BEE benchmark, you must procure compliance credits to
              bridge the deficit — or face regulatory penalties of <span style={{ color: "hsl(var(--accent-glow))" }}>up to ₹11 crore</span>.
              If it falls below, the surplus is tradeable.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-ink-foreground pt-4">
              You're operating under regulatory exposure you haven't quantified.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline">
            {[
              { label: "Today", text: "Most facilities operate without a verified baseline" },
              { label: "+30 days", text: "Emissions data aggregation initiates" },
              { label: "+90 days", text: "MRV submissions mandated" },
              { label: "FY 26–27", text: "Non-compliance exposure activated" },
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

      {/* S02b — KEY STATS */}
      <section className="py-16 md:py-20 border-y hairline">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              { label: "India Carbon Market 2030", stat: "$35B", note: "15× projected growth — supply ready now" },
              { label: "Avg. SME Energy Waste", stat: "18%", note: "Invisible without measurement" },
              { label: "Gujarat Exporters Exposed to CBAM", stat: "9K+", note: "Less than 3% have MRV systems" },
              { label: "From Data to Report", stat: "7 days", note: "We move fast. Complexity stays with us." },
            ].map((d) => (
              <div key={d.label}>
                <div className="font-mono uppercase tracking-[0.18em] text-[0.65rem] text-muted-foreground mb-4">
                  {d.label}
                </div>
                <div className="font-serif text-4xl md:text-5xl tracking-tight mb-3">
                  {d.stat}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  — {d.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S03 — TWO HIDDEN OPPORTUNITIES */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">Two Paths to Impact</p>
            <h2 className="display-2">Whether you reduce or offset — every action counts.</h2>
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
              <h3 className="display-3 mb-6">The Green Reward</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>Carbon Positive<span className="text-2xl font-sans font-normal text-muted-foreground"> status</span></div>
              <p className="text-muted-foreground mb-6">Your operational efficiency may already yield verifiable emission reductions.</p>
              <p className="text-foreground leading-relaxed mb-8">
                If your emissions are <em className="not-italic font-medium">below</em> the BEE target,
                you hold surplus allowances — verified evidence that your operations outperform the sectoral benchmark.
              </p>
              <div className="mono-label">Right now: unknown · Unrecognised green effort</div>
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
              <h3 className="display-3 mb-6">The Reduction Opportunity</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>Tonnes of CO₂<span className="text-2xl font-sans font-normal text-muted-foreground"> avoidable</span></div>
              <p className="text-muted-foreground mb-6">Fugitive and process emissions addressable through targeted intervention.</p>
              <p className="text-foreground leading-relaxed mb-8">
                If your emissions are <em className="not-italic font-medium">above</em> the BEE target,
                there are fugitive losses — steam leaks, parasitic loads, vented thermal energy. Every remediation lowers your emission intensity.
              </p>
              <div className="mono-label">Right now: unknown · Avoidable emissions</div>
            </article>
          </div>
        </div>
      </section>

      {/* S04 — CORE MESSAGE */}
      <section className="py-28 md:py-36 bg-secondary">
        <div className="container-editorial">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="eyebrow mb-6">The Core Truth</p>
            <h2 className="display-2">Either way, the planet is paying.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { icon: Compass, title: "Unquantified", text: "Your emission baseline remains unestablished.", status: "Unaccounted GHG output persists unchecked." },
              { icon: AlertTriangle, title: "Uninformed", text: "CCTS compliance obligations commence in 90 days.", status: "The regulatory window for proactive action is closing." },
              { icon: Puzzle, title: "Unadvised", text: "No decarbonisation strategy in place.", status: "Forfeiting first-mover advantage in the net-zero transition." },
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
            Absence of MRV = thousands of tonnes of unverified CO₂e discharged annually.
          </p>
        </div>
      </section>

      {/* S05 — WHAT WE DO */}
      <section id="process" className="py-28 md:py-40">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">Our Methodology</p>
            <h2 className="display-2">We render your emission profile transparent.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-px bg-border">
            {[
              { n: "01", img: measureImg, title: "Quantify", body: "We conduct a comprehensive facility audit in 6 weeks — utility invoices, production throughput, MRV protocol, Scope 1+2 inventory.", out: "Verified baseline + GEI computation" },
              { n: "02", img: reportImg, title: "Disclose", body: "We present your verified position. Your GEI benchmarked against the BEE threshold. Data-driven, audit-grade, regulator-ready.", out: "Definitive compliance status: surplus or deficit" },
              { n: "03", img: adviseImg, title: "Strategise", body: "We architect your next move. Monetise surplus if below. Implement abatement measures to achieve compliance if above.", out: "Bespoke decarbonisation roadmap" },
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
          <p className="eyebrow-on-ink mb-6">Why engage specialists?</p>
          <h2 className="display-2 text-ink-foreground mb-20 max-w-2xl">
            Three imperatives that mandate domain expertise.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-hairline">
            {[
              { icon: Puzzle, title: "Regulatory Complexity", text: "ISO 14064-1, GHG Protocol, BEE emission factors — MRV demands deep technical fluency.", us: "We command the regulatory landscape. Your team stays focused on operations." },
              { icon: ShieldCheck, title: "Verification Rigour", text: "BEE-empanelled verifiers reject non-conformant submissions. Deficiencies trigger full reassessment.", us: "Our deliverables achieve first-pass verification — consistently." },
              { icon: Clock, title: "Time Criticality", text: "In-house attempts consume months of iterative rework. The compliance clock is already running.", us: "We deliver audit-grade MRV in 6 weeks. Non-compliance exposure activates in 90 days." },
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
            <p className="eyebrow mb-6">Sectoral Focus</p>
            <h2 className="display-2">Your sector. Your emission intensity profile.</h2>
            <p className="lead mt-6">Nine obligated sectors. One regulatory framework. Distinct abatement pathways.</p>
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
                    Explore sector <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
            <p className="eyebrow mb-6">Preliminary Assessment</p>
            <h2 className="display-2 mb-6">Let's establish your verified emission baseline.</h2>
            <p className="lead">
              30 minutes. No slides. We assess your facility profile, contextualise the
              regulatory exposure within your sector, and outline precisely what an MRV engagement would
              reveal.
            </p>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <a 
              href="https://wa.me/919274708978?text=Hello%20Bombay%20Carbon%20Exchange,%20%0A%0AI%E2%80%99d%20like%20to%20inquire%20about%20a%20preliminary%20assessment%20for%20my%20facility.%20Could%20you%20guide%20me%20on%20the%20next%20steps%20and%20how%20we%20can%20start%20identifying%20opportunities%20to%20reduce%20costs%20and%20improve%20efficiency?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary !px-10 !py-6 text-sm md:text-base w-full md:w-fit text-center"
            >
              Inquire Now
            </a>
            <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Typical response time: <span className="text-foreground font-medium">under 60 minutes</span>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
