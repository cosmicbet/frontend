import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>cosmic.bet</h1>
      <p>
        Just a Cosmos based blockchain that aims at providing a fair and
        transparent place where users are able to gamble whatever tokens they
        possess.
      </p>
      <p>Try our Games!</p>
      <ul>
        <li>
          <Link to={"/lottery"}>Lottery</Link>
        </li>
        <li>Quiz (Coming soon)</li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
