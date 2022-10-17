function PostSummaryItem(item) {
  return `
  <div class="d-flex p-2">
  <div class="wd-flex-2">
  ${item.topic ? `<span class="d-block wd-gray-text">${item.topic}</span>` : ""}
    <span class="d-block">
      <span class="wd-bold text-white">${item.userName}</span>
      <span class="wd-gray-text">- ${item.time}</span>
    </span>
    <span class="wd-bold text-white">
    ${item.title}
    </span>
    ${
      "tweets" in item && item.tweets != ""
        ? `<span class="wd-gray-text d-block">${item.tweets} Tweets</span>`
        : ""
    }

  </div>
  <div class="wd-flex-1">
    <img class="wd-suggestion-img rounded" 
      src=${item.image} />
  </div>
</div>
      `;
}

export default PostSummaryItem;

$(PostSummaryItem);
