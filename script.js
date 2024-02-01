document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have an array of post content
    const postsData = [
        "Sample Post Content 1",
        "Sample Post Content 2",
        // Add more post content as needed
    ];

    const postsContainer = document.getElementById('posts');
    const createPostForm = document.getElementById('create-post-form');
    const postContentInput = document.getElementById('post-content');

    // Function to create a new post element
    function createPostElement(content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<p>${content}</p>`;
        return postElement;
    }

    // Function to handle form submission and add a new post
    function handlePostSubmission(event) {
        event.preventDefault();
        const newPostContent = postContentInput.value;
        if (newPostContent.trim() !== '') {
            const newPostElement = createPostElement(newPostContent);
            postsContainer.appendChild(newPostElement);
            postContentInput.value = '';
        }
    }

    // Attach event listener for form submission
    createPostForm.addEventListener('submit', handlePostSubmission);

    // Loop through the postsData array and create initial post elements
    postsData.forEach(function (content) {
        const postElement = createPostElement(content);
        postsContainer.appendChild(postElement);
    });
});
