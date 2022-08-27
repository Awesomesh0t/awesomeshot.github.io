import "../style/home.css";
import "../style/variables.css";

import React from "react";
import Layout from "@theme/Layout";
import BannerHome from "../components/Home/banner.home";
import FeatureHome from "../components/Home/features.home";

export default function Home() {
  return (
    <Layout description="A command-line screenshot tool written in bash 5.1.16+">
      <main className="homepage">
        <BannerHome />
      </main>
    </Layout>
  );
}
