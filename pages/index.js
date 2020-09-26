import Layout from "../components/layout";
import indexStyles from "../styles/index.module.css";

const index = () => {
  return (
    <Layout title="Perch">
      <div className={indexStyles.container}>
        <img className="logo" src="/static/assets/perchlogo.svg" />
        <div className="text">
          <div className="title">
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

          <div className="subtitle">
            <p>
              Perch allows you to use recurring expenses as credit history to
              instantly boost your credit score.
            </p>
          </div>

          <div className="cta">
            <a
              className="typeform-share link"
              href="https://form.typeform.com/to/rkH7jDUt"
              data-mode="popup"
              target="_blank"
            >
              <p className={indexStyles.ctaText}>Join the waitlist</p>
              <img className="arrow" src="/static/assets/arrow.png" />
            </a>
            <script type="text/javascript" src="/static/js/form.js"></script>
          </div>
        </div>
      </div>

      <div className="images">
        <img className="landing" src="/static/assets/landing-mockup.png" />
        <img className="month" src="/static/assets/months-reported.png" />
        <img className="transactions" src="/static/assets/transactions.png" />
      </div>
    </Layout>
  );
};

export default index;
