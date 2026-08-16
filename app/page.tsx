/* eslint-disable @next/next/no-img-element */
// Marketing assets are served directly; the Worker exposes no image proxy.

const chromeInstallUrl =
  "https://chromewebstore.google.com/detail/prismpath-xpath-assistant/lenbdbogeijpchncpofliobfpchajebi";
const edgeInstallUrl =
  "https://microsoftedge.microsoft.com/addons/detail/prismpath-xpath-assistant/oelbgmjhfanihghhpillngkceblpckia";
const githubUrl = "https://github.com/JackSarg/PrismPath";

const benefits = [
  {
    icon: "path",
    title: "Stronger selectors",
    copy: "Replace brittle structural paths with ranked XPath options built from stable IDs, labels, attributes, text, and relationships.",
  },
  {
    icon: "verify",
    title: "Verified as you work",
    copy: "Every candidate is checked against the live page and only shown when it resolves to the exact element once.",
  },
  {
    icon: "retest",
    title: "Regression-ready",
    copy: "Save the selectors that matter, organise them by website, then retest a page after your application changes.",
  },
  {
    icon: "private",
    title: "Private by design",
    copy: "No account, analytics, or network calls. Page data and saved selectors stay inside your local browser profile.",
  },
];

function BenefitIcon({ name }: { name: string }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  if (name === "path") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...shared} d="M5 5h5v5M19 19h-5v-5M5 19l5-5M14 10l5-5" /><circle cx="5" cy="5" r="2" {...shared} /><circle cx="19" cy="19" r="2" {...shared} /></svg>;
  }
  if (name === "verify") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...shared} d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /><circle cx="12" cy="12" r="5.5" {...shared} /><path {...shared} d="m9.5 12 1.7 1.7 3.6-3.6" /></svg>;
  }
  if (name === "retest") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...shared} d="M19 8a7.5 7.5 0 0 0-13-2L4 8m1-3v3h3M5 16a7.5 7.5 0 0 0 13 2l2-2m-1 3v-3h-3" /><path {...shared} d="m9.5 12 1.7 1.7 3.6-3.6" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2" {...shared} /><path {...shared} d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v2" /></svg>;
}

const steps = [
  {
    number: "01",
    title: "Spy the element",
    copy: "Use Browser mode in Blue Prism Application Modeller and remove attributes that are blank, volatile, or non-unique.",
  },
  {
    number: "02",
    title: "Identify it in PrismPath",
    copy: "Open the side panel, select Identify element, then click the same element on the live page.",
  },
  {
    number: "03",
    title: "Choose with evidence",
    copy: "Review the ranked alternatives and use Highlight for a fresh, exactly-one-match visual check.",
  },
  {
    number: "04",
    title: "Copy, save, retest",
    copy: "Copy the XPath into Blue Prism, save important selectors, and rerun the checks whenever the page changes.",
  },
];

function StoreButton({
  href,
  icon,
  label,
  primary = false,
}: {
  href: string;
  icon: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      className={`store-button${primary ? " store-button-primary" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="store-mark" aria-hidden="true">
        <img src={icon} alt="" width="24" height="24" />
      </span>
      <span>
        <small>Get PrismPath for</small>
        {label}
      </span>
    </a>
  );
}

function GithubButton() {
  return (
    <a className="github-button" href={githubUrl} target="_blank" rel="noreferrer">
      <span className="store-mark github-mark" aria-hidden="true">
        <img src="/icons/github.svg" alt="" width="24" height="24" />
      </span>
      <span>
        <small>View the source on</small>
        GitHub
      </span>
    </a>
  );
}

function DownloadButtons({ className }: { className: string }) {
  return (
    <div className={`download-actions ${className}`} aria-label="Download PrismPath">
      <StoreButton href={chromeInstallUrl} icon="/icons/chrome.png" label="Chrome" primary />
      <StoreButton href={edgeInstallUrl} icon="/icons/edge.svg" label="Microsoft Edge" />
      <GithubButton />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top" aria-label="PrismPath home">
            <img src="/prismpath-icon.png" alt="" width="44" height="44" />
            <span>
              <strong>PrismPath</strong>
              <small>XPath Assistant</small>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#screenshots">Product</a>
            <a href="#benefits">Benefits</a>
            <a href="#usage">How it works</a>
          </nav>

          <a className="header-support" href="https://buymeacoffee.com/jacksarg" target="_blank" rel="noreferrer">
            <span aria-hidden="true">☕</span>
            Buy me a coffee
          </a>
        </div>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Built for Blue Prism browser automation
            </div>
            <h1>
              Take a stronger path to <span>stable selectors.</span>
            </h1>
            <p className="hero-description">
              PrismPath enables more consistent xPath identification with one click allowing
              your Blue Prism browser automations to be more stable!
            </p>

            <DownloadButtons className="hero-actions" />

            <div className="hero-proof" aria-label="PrismPath highlights">
              <span><strong>100%</strong> local</span>
              <span><strong>1×</strong> match validation</span>
              <span><strong>MV3</strong> Chrome &amp; Edge</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="PrismPath extension preview">
            <div className="visual-glow" />
            <div className="extension-window">
              <div className="window-bar">
                <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
                <span>PrismPath — Side panel</span>
                <span className="secure-pill">Local</span>
              </div>
              <div className="window-content">
                <img
                  src="/screenshots/sidepanel-generated.png"
                  alt="PrismPath side panel showing ranked XPath candidates"
                  width="420"
                  height="800"
                />
              </div>
            </div>

            <div className="floating-selector" aria-hidden="true">
              <span className="floating-kicker">Recommended selector</span>
              <code>{`//*[@id='customer-email']`}</code>
              <div><span>Exactly 1 match</span><strong>99</strong></div>
            </div>
          </div>
        </section>

        <section className="confidence-strip" aria-label="Product qualities">
          <span>Generate</span><i />
          <span>Verify</span><i />
          <span>Save</span><i />
          <span>Retest</span>
        </section>

        <section className="screenshots section-shell" id="screenshots">
          <div className="section-heading">
            <div>
              <span className="section-number">01 / PRODUCT</span>
              <h2>See the evidence, not just the selector.</h2>
            </div>
            <p>
              PrismPath stays open beside the page, so rankings, live validation, clear
              explanations, and highlighting are always in reach.
            </p>
          </div>

          <div className="screenshot-grid">
            <figure className="screenshot-card">
              <div className="screenshot-topline">
                <span><i /> Ranked alternatives</span>
                <span>GENERATED VIEW</span>
              </div>
              <div className="screenshot-frame">
                <img
                  src="/screenshots/generated.png"
                  alt="PrismPath generating ranked and verified XPath alternatives beside a browser test page"
                  width="1280"
                  height="800"
                />
              </div>
              <figcaption>
                <strong>Rank with confidence.</strong>
                <span>Compare stability scores, match status, explanation, and Blue Prism compatibility before you copy.</span>
              </figcaption>
            </figure>

          </div>
        </section>

        <section className="benefits section-shell" id="benefits">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-number">02 / BENEFITS</span>
              <h2>Less selector guesswork. More automation resilience.</h2>
            </div>
            <p>
              Built around the practical checks Blue Prism developers need before an XPath
              becomes part of an application model.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-marker"><BenefitIcon name={benefit.icon} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
                <span className="card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="usage section-shell" id="usage">
          <div className="usage-intro">
            <span className="section-number">03 / HOW IT WORKS</span>
            <h2>From spied element to tested XPath in four steps.</h2>
            <p>
              PrismPath complements Application Modeller with a quick, evidence-led workflow
              for finding better browser paths.
            </p>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              Read the full workflow <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                {index < steps.length - 1 && <span className="step-rail" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </section>

        <section className="final-cta section-shell">
          <div className="cta-prism" aria-hidden="true">
            <img src="/prismpath-icon.png" alt="" width="128" height="128" />
          </div>
          <div>
            <span className="section-number">FREE &amp; OPEN SOURCE</span>
            <h2>Give your automations a more reliable path.</h2>
            <p>Generate, verify, save, and retest stable XPath selectors—entirely on your machine.</p>
          </div>
          <DownloadButtons className="cta-actions" />
        </section>
      </div>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <img src="/prismpath-icon.png" alt="" width="38" height="38" />
          <span><strong>PrismPath</strong><small>XPath Assistant</small></span>
        </a>
        <p>Independent developer tool. Not affiliated with or endorsed by SS&amp;C Blue Prism.</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/JackSarg/PrismPath/blob/main/PRIVACY.md" target="_blank" rel="noreferrer">Privacy</a>
          <a href="https://jacksarg.com/" target="_blank" rel="noreferrer">JackSarg.com</a>
          <a href="https://www.linkedin.com/in/jacksarg/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://buymeacoffee.com/jacksarg" target="_blank" rel="noreferrer">Buy me a coffee</a>
        </div>
      </footer>
    </main>
  );
}
