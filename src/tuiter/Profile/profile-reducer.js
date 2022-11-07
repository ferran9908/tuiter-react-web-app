import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "@jannunzi",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg",
  bannerPicture:
    "https://opengraph.githubassets.com/1d51d76c0a42a99627df3cf99b44b1a1f6001f34eb915b38d4c23df36d1a9e13/vmchale/polyglot",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "7/7/1968",
  dateJoined: "4/2009",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: currentUser,
});

export default profileSlice.reducer;
