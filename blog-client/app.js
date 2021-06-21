// 1. Sa afisam lista de posturi de la server
// url: http://localhost:3000/posts


function createPostHTML(title, text, author) {
  const authorH2 = document.createElement('span');
  const topSection = document.createElement('div');
  topSection.classList.add('article-top-section')
  authorH2.innerText = author;
  authorH2.classList.add('author-name')
  const titleH1 = document.createElement('span');
  titleH1.innerText = title;
  titleH1.classList.add('title-name')

  const textP = document.createElement('p');

  textP.innerText = text;
  // if (text.length > 200) {
  //   textP.innerText = text.substring(0, 90) + " " + "Read more...";
  // }
  textP.classList.add('comment-text')
  const article = document.createElement('article');
  article.classList.add('article-box')
  topSection.appendChild(authorH2);
  topSection.appendChild(titleH1)
  article.appendChild(topSection);
  article.appendChild(textP);
  return article;
}


async function createPost() {
  let error = document.getElementById('error');
  let commentTitle = document.getElementById('title');
  let commentText = document.getElementById('comment')
  let commentAuthor = document.getElementById('author')
  commentText = commentText.value;
  commentTitle = commentTitle.value;
  commentAuthor = commentAuthor.value;
  const post = { title: commentTitle, text: commentText, user: commentAuthor }
  if (!isEmpty(commentTitle) && !isEmpty(commentText) && !isEmpty(commentAuthor)) {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(() => {
        displayPosts();
      })

  }
  else {
    error.innerText = 'Please fill the inputs';
    // throw "Cannot send request with empty required parameters";
  }
}

let submitBtn = document.getElementById('submitButton');
function displayPosts() {
  fetch('http://localhost:3000/posts', { method: 'GET' })
    .then((response) => {
      return response.json();
    })
    .then(posts => {
      const postListHTML = document.getElementById('post-list')
      postListHTML.innerHTML = '';
      for (let index = 0; index < posts.length; index++) {
        const currentPost = posts[index];
        const postHTML = createPostHTML(currentPost.title, currentPost.text, currentPost.user);
        postListHTML.appendChild(postHTML)
      }
    })
}

submitBtn.addEventListener('click', function () {
  createPost();
});

window.addEventListener('load', function () {
  displayPosts();
})

function isEmpty(str) {
  return (!str || str.length === 0);
}