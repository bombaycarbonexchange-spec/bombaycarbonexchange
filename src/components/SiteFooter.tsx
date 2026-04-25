import { Link } from "react-router-dom";
import { industries } from "@/data/industries";

const SiteFooter = () => {
  return (
    <footer className="section-ink border-t hairline-ink">
      <div className="container-wide py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow-on-ink mb-4">Bombay Carbon Exchange</div>
            <h3 className="display-3 text-ink-foreground mb-6 max-w-md">
              MRV audits, CCTS strategy and carbon credit advisory for Indian factories.
            </h3>
            <p className="text-ink-muted leading-relaxed max-w-md">
              We measure what your factory actually emits — then tell you whether you're
              earning credits or burning energy. Either way, you stop being blind.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="mono-label !text-ink-muted mb-5">Sectors</div>
            <ul className="space-y-3">
              {industries.slice(0, 5).map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/${i.slug}`}
                    className="text-ink-foreground/85 hover:text-ink-foreground link-underline"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label !text-ink-muted mb-5">&nbsp;</div>
            <ul className="space-y-3">
              {industries.slice(5).map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/${i.slug}`}
                    className="text-ink-foreground/85 hover:text-ink-foreground link-underline"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label !text-ink-muted mb-5">Contact</div>
            <ul className="space-y-3 text-ink-foreground/85 text-sm">
              <li>
                <a href="https://wa.me/919999999999" className="link-underline">WhatsApp</a>
              </li>
              <li>
                <a href="mailto:hello@bombaycarbon.exchange" className="link-underline">Email</a>
              </li>
              <li>
                <a href="https://instagram.com" className="link-underline">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t hairline-ink flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="font-mono uppercase tracking-[0.18em] text-[0.7rem] text-ink-muted">
            BEE-aligned · ISO 14064-1 · Verra VCS · GHG Protocol
          </div>
          <div className="font-mono uppercase tracking-[0.18em] text-[0.7rem] text-ink-muted">
            © {new Date().getFullYear()} Bombay Carbon Exchange · NDA on every engagement
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
