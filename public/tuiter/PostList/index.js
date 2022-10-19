import PostItem from "./PostItem.js";

const posts = [
  {
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    body: "Amazing show about @Inspiration4x mission!",
    image: "https://i.ytimg.com/vi/_nwSmOEiDls/maxresdefault.jpg",
    cardTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    cardDesc:
      "From training to launching to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    cardLink: "netflix.com",
    numberOfLikes: "100K",
    numberOfReposts: "5K",
    numberOfComments: "42.9K",
    avatarIcon:
      "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1665592117&w=929&h=523",
  },
  {
    userName: "New York Post",
    handle: "nypost",
    time: "2h",
    body: "Grimes seen reading Karl Marx split with world's richest man Elon Musk trib.al/nx2Gfaq",
    image: "https://pbs.twimg.com/media/FAuW2GlXIAIOBN7.jpg",
    cardTitle: "",
    cardDesc: "",
    cardLink: "",
    numberOfLikes: "234K",
    numberOfReposts: "23K",
    numberOfComments: "12.3K",
    avatarIcon:
      "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1665592117&w=929&h=523",
  },
];

const PostList = () => {
  return `
        <ul class="list-group wd-font-size">
            ${posts
              .map((post) => {
                return PostItem(post);
              })
              .join("")}
        </ul>
    `;
};
export default PostList;
