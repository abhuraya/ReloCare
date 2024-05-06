const newPostButton = document.getElementById('new-post');

const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.getElementById('new-post-title').value.trim();
    const content = document.getElementById('new-post-content').value.trim();
    const state = document.getElementById('state-choice').value;
    const category = document.getElementById('category-choice').value;

    if (category === "Choose Category") {
        alert('failed to make post, must select a category');
        return;
    } else if (state === "Choose State") {
        alert('failed to make post, must select a state');
        return;
    }

    if (title && content && state && category) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content, state, category}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('failed to make post');
        }
    }
}

newPostButton.addEventListener('submit', newPostHandler);