const linksSocialMedia = {
  github: 'rafavirginio',
  youtube: 'channel/UCoBEQHHeIgphjsdka3VoHzw',
  instagram: 'rafavirgiinio',
  facebook: '100001573343039',
  linkedin: 'in/rafael-virgínio-da-silva-288a8468'
}

function changeSocialMediaLinks() {
  //Por padrão o js busca por uma id pela DOM quando não for utilizado "getElementby..."
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //  fetch armazena um dado mas não sabe que é um JSON
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //textContent troca todo o conteudo da tag
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
