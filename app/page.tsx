const chromeInstallUrl =
  "https://github.com/JackSarg/PrismPath#chrome";
const edgeInstallUrl =
  "https://github.com/JackSarg/PrismPath#microsoft-edge";
const githubUrl = "https://github.com/JackSarg/PrismPath";

const benefits = [
  {
    marker: "01",
    title: "Stronger selectors",
    copy: "Replace brittle structural paths with ranked XPath options built from stable IDs, labels, attributes, text, and relationships.",
  },
  {
    marker: "1×",
    title: "Verified as you work",
    copy: "Every candidate is checked against the live page and only shown when it resolves to the exact element once.",
  },
  {
    marker: "↻",
    title: "Regression-ready",
    copy: "Save the selectors that matter, organise them by website, then retest a page after your application changes.",
  },
  {
    marker: "⌁",
    title: "Private by design",
    copy: "No account, analytics, or network calls. Page data and saved selectors stay inside your local browser profile.",
  },
];

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
  store,
  label,
  primary = false,
}: {
  href: string;
  store: string;
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
        {store.slice(0, 1)}
      </span>
      <span>
        <small>Get PrismPath for</small>
        {label}
      </span>
      <span className="button-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
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

        <a className="header-github" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
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
              PrismPath turns one click into ranked, live-verified XPath alternatives—then
              helps you save and retest them as your application evolves.
            </p>

            <div className="hero-actions" aria-label="Download PrismPath">
              <StoreButton href={chromeInstallUrl} store="Chrome" label="Chrome" primary />
              <StoreButton href={edgeInstallUrl} store="Edge" label="Microsoft Edge" />
              <a className="github-button" href={githubUrl} target="_blank" rel="noreferrer">
                <span className="code-mark" aria-hidden="true">&lt;/&gt;</span>
                <span>
                  <small>View the source on</small>
                  GitHub
                </span>
                <span className="button-arrow" aria-hidden="true">↗</span>
              </a>
            </div>

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
              PrismPath stays open beside the page, so rankings, validation, highlighting,
              and saved regression checks are always in reach.
            </p>
          </div>

          <div className="screenshot-grid">
            <figure className="screenshot-card screenshot-card-wide">
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

            <figure className="screenshot-card screenshot-card-wide">
              <div className="screenshot-topline">
                <span><i /> Selector library</span>
                <span>SAVED VIEW</span>
              </div>
              <div className="screenshot-frame">
                <img
                  src="/screenshots/saved.png"
                  alt="PrismPath saved selector library with page-level retest controls"
                  width="1280"
                  height="800"
                />
              </div>
              <figcaption>
                <strong>Keep selectors healthy.</strong>
                <span>Organise selectors by site, rename them clearly, then retest one element or the entire active page.</span>
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
                <span className="benefit-marker">{benefit.marker}</span>
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
          <div className="cta-actions">
            <a href={chromeInstallUrl} target="_blank" rel="noreferrer">Get PrismPath <span aria-hidden="true">↗</span></a>
            <a href={githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
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
          <a href="https://www.linkedin.com/in/jacksarg/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
