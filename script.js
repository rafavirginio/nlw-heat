const linksSocialMedia = {
  github: 'rafavirginio',
  youtube: 'channel/UCoBEQHHeIgphjsdka3VoHzw',
  instagram: 'rafavirgiinio',
  facebook: '100001573343039',
  linkedin: 'in/rafael-virgínio-da-silva-288a8468'
}

function changeSocialMediaLinks() {
  //Por padrão o js busca por uma id quando não for utilizado "getElementby..."
  // userName.textContent = 'Rafa'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()
