const loadComemnts = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}

const displayComments = comments => {
    // console.log(comments);
    const commmentsContainer = document.getElementById('comment-container');
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comment');
        div.setAttribute('onclick', 'loadCommentDetail(' + comment.id + ')');
        div.innerHTML = `
            <h3>${comment.name}</h3>
            <p>Email: ${comment.email}</p>
            <p>Comment Body: ${comment.body}</p>
            <button onclick="loadCommentDetail(${comment.id})">Comment Details</button> 
        `;
        commmentsContainer.appendChild(div);
    });
}

const loadCommentDetail = commentId => {
    // console.log(commentId);
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentDetail(data));
}

const displayCommentDetail = comment => {
    console.log(comment);
    const commentDetailContainer = document.getElementById('comment-details');
    commentDetailContainer.textContent = '';
    const divDetail = document.createElement('div');
    divDetail.classList.add('comment-detail');
    divDetail.innerHTML = `
       <h3>Commnet Id: ${comment.id}</h3>
       <h4>Title: ${comment.name}</h4>
       <p>Email: ${comment.email}</p>
        <p><u>Comment Body:</u> ${comment.body}</p>
    `;
    commentDetailContainer.appendChild(divDetail);
}