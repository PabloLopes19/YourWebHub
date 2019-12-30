var btnClick = document.querySelector('#btnClick');
var title = document.querySelector('#entTitle');
var link = document.querySelector('#entLink');
var posts = document.querySelector('.posts');

criaPost = () => {
    var postDiv = document.createElement('div');
    var postTitle = document.createElement('h1');
    var btnLink = document.createElement('a');

    var txtTitle = document.createTextNode(title.value);
    var btnLinkText = document.createTextNode('Acessar');
    postDiv.appendChild(txtTitle);
    postDiv.appendChild(btnLink);
    btnLink.appendChild(btnLinkText);

    postDiv.setAttribute('class', 'postDiv');
    postTitle.setAttribute('class', 'postTitle');
    btnLink.setAttribute('class', 'btnLink');
    btnLink.setAttribute('href', link.value);
    btnLink.setAttribute('target', '_blank');

    posts.appendChild(postDiv);
    postDiv.appendChild(postTitle);

    console.log(title.value);

    title.value = '';
    link.value = '';
}

btnClick.addEventListener('click', () => {
    if(title.value === '' || link.value === ''){
        alert('Por favor, insira algo nas caixas de texto');
    }else{
        criaPost();
    }
});