import { Link } from "react-router-dom";
import { industries } from "@/data/industries";
import logo from "@/assets/IMG_5946.png";

const SiteFooter = () => {
  const whatsappUrl = "https://wa.me/919429508978?text=Hello%20Bombay%20Carbon%20Exchange,%20%0A%0AI%E2%80%99d%20like%20to%20inquire%20about%20a%20preliminary%20assessment%20for%20my%20facility.%20Could%20you%20guide%20me%20on%20the%20next%20steps%20and%20how%20we%20can%20start%20identifying%20opportunities%20to%20reduce%20costs%20and%20improve%20efficiency?";

  return (
    <footer className="section-ink border-t hairline-ink">
      <div className="container-wide py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mb-8">
              <img src={logo} alt="Bombay Carbon Exchange" className="h-10 md:h-12 w-auto" />
            </div>
            <h3 className="display-3 text-ink-foreground mb-6 max-w-md">
              MRV audits, CCTS compliance strategy and carbon credit advisory for Indian industrial facilities.
            </h3>
            <p className="text-ink-muted leading-relaxed max-w-md">
              We measure what your factory actually emits — then show you the path to
              reducing your carbon footprint. Either way, you stop being blind.
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-underline">WhatsApp</a>
              </li>
              <li>
                <a href="mailto:Inquiry.bombaycarbonexchange@gmail.com" className="link-underline">Email</a>
              </li>
              <li>
                <a href="https://www.instagram.com/bombaycarbonx?igsh=MXJ2dzhzcmliNDZsNA==" target="_blank" rel="noopener noreferrer" className="link-underline">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t hairline-ink flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="font-mono uppercase tracking-[0.18em] text-[0.7rem] text-ink-muted">
            BEE-aligned · ISO 14064-1 · Verra VCS · GHG Protocol
          </div>
          <div className="font-mono uppercase tracking-[0.18em] text-[0.7rem] text-ink-muted text-balance">
            © {new Date().getFullYear()} Bombay Carbon Exchange · NDA on every engagement
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
