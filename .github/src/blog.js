var blogs = [
    {
        title: "My Coding Journey",
        date: "10/16/24",
        description: "My coding journey so far has been challenging but a very eye opening experienced.  Prior to my first classes at Cal Poly, I had no experience whatsoever of programming, and I felt rather overwhelmed jumping into code on my first day of school.  From learning the basics like HTML, CSS, and Javascript to diving deeper into code like Data Structures and Algorithms, its easy to say that learning wasn't easy.  There have been many moments where I faced doubt, asking myself 'Am I Built For This', but I have also experienced major satisfaction from solving hard problems, and finally getting my code to work.   As I continue to grow and learn more about code, I hope to be the best developer I can be! ",
        image: "giphy.gif",
        imageAlt: "Gif of Dog ",
        slug: "Coding-Journey",
    },
    {
        title: "About Me",
        date: "10/16/24",
        description: " I am a 2nd year Computer Engineering major, but I am hoping to switch to Computer Science this quarter. I am local as I am from Santa Maria, which is only about a 30-minute drive from Cal Poly. In my free time, I like to play video games, watch anime (Favorite: One Piece), go to the gym, and do some occasional fishing!",
        image: "gif.gif",
        imageAlt: "Random Gif",
        slug: "About Me",
    }
];
function displayBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        //Create A Div For Each Blog Post
        var blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');
        //Create H1
        var H1Element = document.createElement('h1');
        H1Element.textContent = blog.title;
        //Create Images
        var ImageElement = document.createElement('img');
        ImageElement.src = blog.image;
        ImageElement.alt = blog.title;
        //Create P Tags for Blog Description
        var PElement = document.createElement('p');
        PElement.textContent = blog.description;
        // Append Everything to BlogDiv
        blogDiv.appendChild(H1Element);
        blogDiv.appendChild(ImageElement);
        blogDiv.appendChild(PElement);
        //Append Entire BlogDiv to blogContainer
        blogContainer.appendChild(blogDiv);
    });
}
displayBlogs(blogs);
