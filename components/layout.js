import Head from "next/head";
import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/static/assets/perchlogo.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Build credit fast- all it takes is paying your rent. We'll handle the rest."
        />

        <script type="text/javascript" src="/static/js/inspectlet.js" />
      </Head>
      {children}

      <script src="/static/js/jquery-2.1.1.js"></script>
      <script src="/static/js/main.js"></script>
    </div>
  );
};

export default Layout;
