// console.log("Project Title - News Api");

// ba5376ad46c74f7f8bee8854ab39ae9b    API KEY
// R2BBmPZTAjFbg2oL9lVP93dg3zY58pKmlaO7ij6la8iTszRx4LKiJgKqhDZA  API KEY 2
// newsDiv = document.getElementById('newsDiv');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&apiKey=ba5376ad46c74f7f8bee8854ab39ae9b', true);

let newsDiv2=document.getElementById("newsDiv2");

xhr.onload = function () {
    if (this.status === 200) {
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        let html = "";
        articles.forEach(element => {
            let news = `<div class="jumbotron newsBlock2" >
            <img src="${element['urlToImage']}" class="card-img-top" height="300px" alt="...">
            <h5 class="display-6" id="newsHeading">${element["title"]}</h5>
                <p class="lead" id="newsContent">${element["content"]}.</p>
                <br>
                <a class="btn btn-primary btn-sm" href="${element['url']}" role="button" target="_blank">Read More</a>
                </div>  `;
            html+=news;
        });
        newsDiv2.innerHTML=html;
    }
    else {
        console.log("Error Occured");
    }
}

xhr.send();


// // search news for world news
// let searchTxtworld = document.getElementById("searchTextworld");

// searchTxtworld.addEventListener("input", function () {

//     let inpVal2 = searchTxtworld.Value;

//     let newsBlock2 = document.getElementsByClassName("newsBlock2");
//     // console.log(newsBlock2);
//     // let x=1;
//     Array.from(newsBlock2).forEach(function (element) {

//         let title = element.getElementsByTagName("h5")[0].innerText;
//         let content = element.getElementsByTagName("p")[0].innerText;
//         // console.log(element);
//         if (title.includes(inpVal2) || content.includes(inpVal2)) {

//             console.log('input fired!');
//             element.style.display = "";
//         }
//         else {
//             console.log('input fired Also!');
//             element.style.display = "none";
//         }
//         // if(x>1){
//         //     break;
//         // }
//         // x++;
//     })
// })

