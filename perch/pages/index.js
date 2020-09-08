import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Perch</title>
        <link rel="stylesheet" href="/static/styles/reset.css" />
        <link rel="stylesheet" href="/static/styles/style.css" />
        <link rel="stylesheet" href="/static/styles/mobile-style.css" />
        <link rel="icon" href="/static/assets/perchlogo.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Build credit fast- all it takes is paying your rent. We'll handle the rest."
        />

        <script type="text/javascript" src="/static/js/inspectlet.js" />
      </Head>
      <div id="container">
        <img id="logo" src="/static/assets/perchlogo.svg" />

        <div id="text">
          <div id="title">
            <section className="cd-intro">
              <h1 className="cd-headline push">
                <span className="cd-text">Build credit</span>
                <br />
                <span className="cd-words-wrapper">
                  <b className="is-visible">with rent payments</b>
                  <b>with subscriptions</b>
                  <b>in thirty seconds</b>
                </span>
              </h1>
            </section>
          </div>

          <div id="subtitle">
            <p>
              Perch allows you to use recurring expenses as credit history to
              instantly boost your credit score.
            </p>
          </div>

          <div id="cta">
            <a
              className="typeform-share link"
              href="https://form.typeform.com/to/rkH7jDUt"
              data-mode="popup"
              target="_blank"
            >
              <p className="cta-text">Join the waitlist</p>
              <img id="arrow" src="/static/assets/arrow.png" />
            </a>
            <script type="text/javascript" src="/static/js/form.js"></script>
          </div>
        </div>

        <div id="images">
          <img id="landing" src="/static/assets/landing-mockup.png" />
          <img id="month" src="/static/assets/months-reported.png" />
          <img id="transactions" src="/static/assets/transactions.png" />
        </div>
      </div>

      <script src="/static/js/jquery-2.1.1.js"></script>
      <script src="/static/js/main.js"></script>
    </div>
  );
}
