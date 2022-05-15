var list = document.querySelector('.listofmovies');

var numMovies = Number(prompt('Enter a number how many movies you wanna watch!', 8)) - 1;

function render (smth, length = movies.length) {
    for(let i = 0; i <= length; i++) {
        
        var elLi = document.createElement('div');
        elLi.className = 'card itemmovie m-3';
        list.append(elLi);

        var elIframe = document.createElement('iframe');
        var linkId = movies[i].trailer.split("=");
        elIframe.src = `https://www.youtube.com/embed/${linkId[1]}`;
        elIframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        elIframe.allowFullscreen = true;
        elLi.appendChild(elIframe);
        
        var elDiv = document.createElement('div');
        elDiv.className = 'card-body';
        elLi.append(elDiv);

        var elH5 = document.createElement('h5');
        elH5.className = 'card-title movie-title';
        elH5.append(smth[i].title);
        elDiv.append(elH5);
        
        var elSummary = document.createElement('p');
        elSummary.className = 'card-text abcd';
        elSummary.append(smth[i].summary);
        elDiv.append(elSummary);
        
        var elListofinfo = document.createElement('ul');
        elListofinfo.className = 'list-group list-group-flush';
        elLi.append(elListofinfo);
        
        var elListLi = document.createElement('li');
        elListLi.className = 'list-group-item';
        elListLi.append(`IMDB: ${smth[i].imdbRating}⭐️`);
        elListofinfo.append(elListLi);
        
        var elListLi = document.createElement('li');
        elListLi.className = 'list-group-item';
        elListLi.append(`Runtime: ${smth[i].runtime}🕔`);
        elListofinfo.append(elListLi);
        
        var elListLi = document.createElement('li');
        elListLi.className = 'list-group-item';
        elListLi.append(`Lang: ${smth[i].language}`);
        elListofinfo.append(elListLi);
        
        var elListLi = document.createElement('li');
        elListLi.className = 'list-group-item';
        elListLi.append(`Year: ${smth[i].year}`);
        elListofinfo.append(elListLi);
        
        var elDiv2 = document.createElement('div');
        elDiv2.className = 'card-body';
        elLi.append(elDiv2);

        var elLink = document.createElement('a');
        elLink.className = 'card-link';
        elLink.textContent = 'BigPoster';
        elLink.target = 'blank';
        elLink.href = smth[i].bigPoster;
        elDiv2.append(elLink);
    }
}

render(movies, numMovies, 7);
