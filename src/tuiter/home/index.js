import "./index.css";
import React from "react";
import postsArray from "./posts.json";
import PostItem from "./post-item";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const Home = () => (
  <>
    <h4>Home</h4>
    <WhatsHappening />
    <TuitsList />
  </>
);

export default Home;
