const usernameInput = document.querySelector('#username');
const postInput = document.querySelector('#post');
const postList = document.querySelector('#news-list');
const postForm = document.querySelector('#post-form');

postForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = usernameInput.value;
    const post = postInput.value;

    const postLi = document.createElement('li')
    const postAuth = document.createElement('p')

    postAuth.append(username);
    postLi.append(postAuth)
    postLi.append(`- ${post}`)
    postList.append(postLi)

    usernameInput.value = '';
    postInput.value = '';
})

