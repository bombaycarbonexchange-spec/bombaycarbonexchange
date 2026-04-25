import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, X, Clock, Flame, AlertTriangle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { getIndustry, industries } from "@/data/industries";
import measureImg from "@/assets/process-measure.jpg";
import reportImg from "@/assets/process-report.jpg";
import adviseImg from "@/assets/process-advise.jpg";

const IndustryPage = () => {
  const { slug = "" } = useParams();
  const ind = getIndustry(slug);
  if (!ind) return <Navigate to="/" replace />;

  const others = industries.filter((i) => i.slug !== ind.slug);
  const cs = ind.caseStudy;
  const isBelow = cs.status === "below";

  const processSteps = [
    { n: "01", week: "Week 1–2", title: "Data Collection", body: "12 months of bills, production data, equipment specs.", img: reportImg },
    { n: "02", week: "Week 2–3", title: "Scope 1+2 Quantification", body: `Calculate your GEI in ${ind.unit}, the way BEE expects it.`, img: measureImg },
    { n: "03", week: "Week 3–4", title: "Site Audit", body: "On-site visit. Photographs, thermography, leak survey.", img: measureImg },
    { n: "04", week: "Week 4–5", title: "Energy Benchmarking", body: "Your facility vs BEE target and best-in-class peers.", img: reportImg },
    { n: "05", week: "Week 5–6", title: "CCTS Modelling", body: "Above target? Liability + reduction roadmap. Below? Credit revenue model.", img: adviseImg },
    { n: "06", week: "Week 6", title: "Final Report", body: "Audit-grade MRV report ready for BEE submission or strategic action.", img: reportImg },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* S01 — HERO */}
      <section className="relative h-[90svh] min-h-[620px] w-full overflow-hidden">
        <img
          src={ind.image}
          alt={`${ind.name} factory interior`}
          width={1600}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover img-editorial"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/90" />
        <div className="relative z-10 h-full container-editorial flex flex-col justify-center text-ink-foreground pt-20">
          <Link to="/" className="inline-flex items-center gap-2 eyebrow-on-ink mb-8 fade-up">
            <ArrowLeft className="w-3.5 h-3.5" /> All sectors
          </Link>
          <p className="eyebrow-on-ink mb-6 fade-up">Sector — {ind.name}</p>
          <h1 className="display-1 max-w-4xl fade-up" style={{ animationDelay: "0.1s" }}>
            Your {ind.name.toLowerCase()} factory is either earning <em className="not-italic" style={{ color: "hsl(var(--accent-glow))" }}>{ind.earningValue}</em> — or losing <em className="not-italic" style={{ color: "hsl(var(--accent-glow))" }}>{ind.savingValue}</em>.
          </h1>
          <p className="lead lead-on-ink mt-8 max-w-2xl fade-up" style={{ animationDelay: "0.2s" }}>
            You don't know which one. Yet.
          </p>
          <div className="mt-12 fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="btn-primary">
              Discover your {ind.name.toLowerCase()} opportunity <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* S02 — TWO OPPORTUNITIES */}
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">The two outcomes</p>
            <h2 className="display-2">Above the line. Or below it.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <article className="bg-background p-8 md:p-12">
              <div className="mono-label mb-4">If you're efficient</div>
              <h3 className="display-3 mb-6">{ind.earningHeadline}</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>{ind.earningValue}</div>
              <p className="text-foreground leading-relaxed mb-8">{ind.earningDescription}</p>
              <div className="mono-label">Right now: unknown · Losing this</div>
            </article>
            <article className="bg-background p-8 md:p-12">
              <div className="mono-label mb-4">If you're not</div>
              <h3 className="display-3 mb-6">The Saving Opportunity</h3>
              <div className="stat-number mb-4" style={{ color: "hsl(var(--accent))" }}>{ind.savingValue}</div>
              <p className="text-foreground leading-relaxed mb-8">{ind.savingDescription}</p>
              <div className="mono-label">Right now: unknown · Burning this</div>
            </article>
          </div>
        </div>
      </section>

      {/* S03 — WHERE YOU LOSE MONEY */}
      <section className="section-ink py-24 md:py-36">
        <div className="container-wide">
          <div className="mb-20 max-w-2xl">
            <p className="eyebrow-on-ink mb-6">The blind spots</p>
            <h2 className="display-2 text-ink-foreground">
              Where {ind.name.toLowerCase()} factories lose money — and don't know it.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
            {ind.losses.map((l, i) => (
              <div key={l.title} className="bg-ink p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs tracking-[0.2em] text-ink-muted">
                    LOSS {String(i + 1).padStart(2, "0")}
                  </span>
                  <Flame className="w-5 h-5 text-accent-glow" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-ink-foreground">{l.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-6 text-sm">{l.detail}</p>
                <p className="font-mono uppercase tracking-[0.16em] text-[0.75rem] text-accent-glow">
                  {l.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S04 — PROCESS TIMELINE */}
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">The process</p>
            <h2 className="display-2">Our 6-week measurement.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {processSteps.map((s) => (
              <div key={s.n} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "hsl(var(--accent))" }}>
                    STEP {s.n}
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    {s.week}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S05 — WHAT THE REPORT SHOWS */}
      <section className="py-24 md:py-36 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-6">The report</p>
            <h2 className="display-2">Two scenarios. One clear answer.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {/* Below */}
            <article className="bg-background p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center bg-accent text-accent-foreground">
                  <Check className="w-4 h-4" strokeWidth={2} />
                </div>
                <span className="mono-label">Scenario A · Below target</span>
              </div>
              <h3 className="display-3 mb-8">"You're efficient."</h3>
              <dl className="space-y-5 text-sm border-t hairline pt-8">
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Your GEI</dt><dd className="font-mono">6.8 {ind.unit.split(" / ")[1] ? "" : ""}</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">BEE Target</dt><dd className="font-mono">7.06</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Status</dt><dd className="font-medium" style={{ color: "hsl(var(--accent))" }}>✓ Below target</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Opportunity</dt><dd className="font-medium">{ind.earningValue} in credits</dd></div>
              </dl>
              <p className="mt-8 text-sm text-muted-foreground">
                <span className="text-foreground">Next step:</span> we show you exactly how to monetise the surplus on Indian and voluntary markets.
              </p>
            </article>

            {/* Above */}
            <article className="bg-background p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center bg-foreground text-background">
                  <X className="w-4 h-4" strokeWidth={2} />
                </div>
                <span className="mono-label">Scenario B · Above target</span>
              </div>
              <h3 className="display-3 mb-8">"Room to improve."</h3>
              <dl className="space-y-5 text-sm border-t hairline pt-8">
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Your GEI</dt><dd className="font-mono">8.2</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">BEE Target</dt><dd className="font-mono">7.06</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Status</dt><dd className="font-medium text-foreground">✗ Above target — risk zone</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-muted-foreground">Opportunity</dt><dd className="font-medium">{ind.savingValue} in savings</dd></div>
              </dl>
              <p className="mt-8 text-sm text-muted-foreground">
                <span className="text-foreground">Next step:</span> a sequenced energy roadmap that drops your GEI below target and cuts your bill.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* S06 — CASE STUDY */}
      <section className="py-24 md:py-36">
        <div className="container-editorial">
          <p className="eyebrow mb-6">A real engagement</p>
          <h2 className="display-2 mb-12 max-w-3xl">
            What we found inside a real {ind.name.toLowerCase()} factory.
          </h2>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-medium">{cs.name}</span>, {cs.location}.
                {" "}{cs.scale}. When we walked in, they had no idea where they stood
                on emissions.
              </p>
              <p className="text-muted-foreground">What we found:</p>
              <ul className="space-y-3 text-base">
                {cs.findings.map((f) => (
                  <li key={f} className="flex gap-4">
                    <span className="font-mono text-xs mt-2" style={{ color: "hsl(var(--accent))" }}>—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-4">
                The report showed a GEI of <span className="font-mono">{cs.geiActual}</span> against the BEE target of <span className="font-mono">{cs.geiTarget}</span> — {isBelow ? "below" : "above"} target.
              </p>
              <p className="text-muted-foreground italic">{cs.summary}</p>
            </div>

            <aside className="md:col-span-5 border hairline p-8 md:p-10 bg-secondary">
              <div className="mono-label mb-4">Year 1 opportunity</div>
              <div className="stat-number mb-8" style={{ color: "hsl(var(--accent))" }}>{cs.yearOneOpportunity}</div>
              <div className="space-y-5 border-t hairline pt-6 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">GEI (actual)</span><span className="font-mono">{cs.geiActual}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">GEI (BEE target)</span><span className="font-mono">{cs.geiTarget}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-medium">{isBelow ? "Below" : "Above"} target</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Scale</span><span>{cs.scale}</span></div>
              </div>

              <div className="grid grid-cols-2 gap-px mt-8 bg-border">
                <div className="bg-background p-5">
                  <div className="mono-label mb-2">Before</div>
                  <p className="font-serif text-base">Blind</p>
                </div>
                <div className="bg-background p-5">
                  <div className="mono-label mb-2">After</div>
                  <p className="font-serif text-base">Clear</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* S07 — WHY IT MATTERS */}
      <section className="section-ink py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow-on-ink mb-6">The cost of not measuring</p>
          <h2 className="display-2 text-ink-foreground mb-16 max-w-2xl">
            Three ways inaction quietly costs you.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-hairline">
            {[
              { icon: Flame, title: "Lost earning", text: `If you're efficient, you don't know it. ${ind.earningValue} in unrealised credit revenue, every year.` },
              { icon: AlertTriangle, title: "Lost saving", text: `If you have waste, you can't see it. ${ind.savingValue} burning in your boilers, compressors and exhausts.` },
              { icon: Clock, title: "Lost time", text: "Compliance hits in 90 days. Acting now is strategic. Acting later is forced." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-ink p-8 md:p-10">
                <Icon className="w-7 h-7 mb-6 text-accent-glow" strokeWidth={1.25} />
                <div className="eyebrow-on-ink mb-3">{title}</div>
                <p className="text-ink-foreground/85 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S08 — CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-secondary">
        <div className="container-editorial grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Discovery call</p>
            <h2 className="display-2 mb-6">Let's find out what your {ind.name.toLowerCase()} factory is losing.</h2>
            <p className="lead">
              30 minutes, by WhatsApp or phone. We'll map out exactly what an MRV
              would uncover for your facility.
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactForm sector={ind.name} />
          </div>
        </div>
      </section>

      {/* Other sectors */}
      <section className="py-24 md:py-28">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h3 className="display-3">Other sectors</h3>
            <Link to="/" className="font-mono uppercase tracking-[0.18em] text-xs link-underline">
              All nine sectors →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {others.slice(0, 4).map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="group relative aspect-[4/5] overflow-hidden bg-ink card-hover block">
                <img src={o.image} alt={o.name} width={1600} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover img-editorial transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-ink-foreground">
                  <h4 className="font-serif text-2xl mb-2">{o.name}</h4>
                  <p className="text-ink-foreground/70 text-xs">{o.hook}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default IndustryPage;
