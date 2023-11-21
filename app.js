const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);


document.getElementById("buscar-github").addEventListener("click", function() {
    const username = document.getElementById("usuario-github").value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar usuário");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("nome-usuario").textContent = data.name || data.login;
            document.getElementById("bio-usuario").textContent = data.bio || 'Bio não disponível';
            document.getElementById("img-redonda").style.backgroundImage=`url(${data.avatar_url})`;
            document.getElementById("imagem-usuario").src = data.avatar_url;
            document.getElementById("imagem-usuario").alt = `Imagem de ${data.login}`;
            document.getElementById("seguindo").textContent = data.following;
            document.getElementById("seguidores").textContent = data.followers;
            document.getElementById("postagens").textContent = data.public_repos;
            document.getElementById("location").textContent = data.location;
            document.getElementById("github-usuario").href = data.html_url;
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Usuário não encontrado!')
        });
});
