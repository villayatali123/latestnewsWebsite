// console.log("Project Title - News Api");

// ba5376ad46c74f7f8bee8854ab39ae9b    API KEY
// R2BBmPZTAjFbg2oL9lVP93dg3zY58pKmlaO7ij6la8iTszRx4LKiJgKqhDZA  API KEY 2
// newsDiv = document.getElementById('newsDiv');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=ba5376ad46c74f7f8bee8854ab39ae9b', true);

let newsDiv = document.getElementById("newsDiv");

xhr.onload = function () {
    if (this.status === 200) {
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let html = "";
        articles.forEach(element => {
            html += `<div class=" newsBlock jumbotron" >
            <img src="${element['urlToImage']}" class="card-img-top" height="300px" alt="...">
            <h5 class="display-6" id="newsHeading">${element["title"]}</h5>
                <p class="lead" id="newsContent">${element["content"]}.</p>
                <br>
                <a class="btn btn-primary btn-sm" href="${element['url']}" role="button" 
                target="_blank">Read More</a>
                </div> `;
            // html+=news;
        });
        newsDiv.innerHTML = html;
    }
    else {
        console.log("Error Occured");
    }
}

xhr.send();