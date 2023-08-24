const button = document.querySelector("#submit");
const allPosts = document.querySelector(".posts");
let postList = [];
let postCount = 0;

button.addEventListener("click", () => {
  const postContent = document.querySelector("#post-content").value;
  const userName = document.querySelector("#name").value;

  newPost(postContent, userName);
});

allPosts.addEventListener("click", (event) => {
  if (event.target.classList.contains("comment-section")) {
    alert("Ladies and gentlemen, we got him");
  }
});

const newPost = (postContent, userName) => {
  const post = {
    text: postContent,
    name: userName,
  };

  postList.push(post);

  // Populate new post div
  const postDiv = document.createElement("div");
  postDiv.setAttribute("id", `post-count-${postCount}`);
  const postText = document.createTextNode(post.text);

  postDiv.appendChild(postText);

  const lineBreak = document.createElement("br");

  postDiv.appendChild(lineBreak);

  const postedByText = document.createTextNode("Posted by: ");

  postDiv.appendChild(postedByText);
  
  const boldText = document.createElement("b");
  const name = document.createTextNode(post.name);

  boldText.appendChild(name);

  postDiv.appendChild(boldText);

  const hrDivider = document.createElement("hr");

  document.querySelector(".posts").append(postDiv);
  document.querySelector(".posts").append(hrDivider);

  //TODO: add delete button next to comment section button. Have warning pop up saying, "Are you sure you want to delete this post?"
  document.querySelector(`#post-count-${postCount}`).innerHTML += `<span class="icon-button"><i class="fa-solid fa-trash-can"></i><span class="icon-button">`;

  // Comments (num of comments)
  document.querySelector(`#post-count-${postCount}`).innerHTML += `<span class="icon-button"><i class="fa-solid fa-comments comment-section"></i></span>`;
  
  // Clear message box
  document.querySelector("#name").value = "";
  document.querySelector("#post-content").value = "";

  // Increment post count
  postCount++;
};
