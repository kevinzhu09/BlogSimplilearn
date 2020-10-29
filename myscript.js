function addBlog() {

    var titleValue = document.getElementById('myTitle').value;
    var titleText = document.createTextNode('Title: ' + titleValue);
    var dateValue = document.getElementById('myDate').value;
    var dateText = document.createTextNode('Date: ' + dateValue);
    var authorValue = document.getElementById('myAuthor').value;
    var authorText = document.createTextNode('Author: ' + authorValue);
    var descriptionValue = document.getElementById('myDescription').value;
    var descriptionText = document.createTextNode('Contents: ' + descriptionValue);

    if (titleValue === '' || dateValue === '' || authorValue === '' || descriptionValue === '') {
        alert('You must type something into all four fields.')
    } else {
        var blog = document.createElement('li');
        var blogList = document.createElement('ul');     
        var titleElement = document.createElement('li');
        titleElement.appendChild(titleText);
        var dateElement = document.createElement('li');
        dateElement.appendChild(dateText);
        var authorElement = document.createElement('li');
        authorElement.appendChild(authorText);
        var descriptionElement = document.createElement('li');
        descriptionElement.appendChild(descriptionText);
        blog.appendChild(blogList)
        blogList.appendChild(titleElement);
        blogList.appendChild(dateElement);
        blogList.appendChild(authorElement);
        blogList.appendChild(descriptionElement);

        blogList.className += ' list-group';
        titleElement.className += ' list-group-item';
        dateElement.className += ' list-group-item';
        authorElement.className += ' list-group-item';
        descriptionElement.className += ' list-group-item';
        
        document.getElementById('myList').appendChild(blog);
        document.getElementById('myTitle').value = '';
        document.getElementById('myDate').value = '';
        document.getElementById('myAuthor').value = '';
        document.getElementById('myDescription').value = '';
        return false;
    }

}