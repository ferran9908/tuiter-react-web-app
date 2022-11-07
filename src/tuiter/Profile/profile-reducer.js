import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "@jannunzi",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg",
  bannerPicture: "https://www.cs.cmu.edu/~aldrich/courses/17-396/protobg.jpg",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "1968-07-07",
  dateJoined: "4/2009",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: currentUser,
  reducers: {
    updateProfile(state, action) {
      const { name, bio, website, location, dateOfBirth } = action.payload;
      state.firstName = name.split(" ")[0] || "";
      state.lastName = name.split(" ")[1] || "";
      state.bio = bio;
      state.website = website;
      state.location = location;
      state.dateOfBirth = dateOfBirth;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
