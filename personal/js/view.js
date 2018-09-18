const links = [
    {
        url: 'https://github.com',
        name: 'Github',
        image: '/personal/img/links/github.com.png'
    },
    {
        url: 'https://bitbucket.org',
        name: 'Github',
        image: '/personal/img/links/bitbucket.org.png'
    },
    {
        url: 'https://deezer.com',
        name: 'Github',
        image: '/personal/img/links/deezer.com.png'
    },
    {
        url: 'https://upwork.com',
        name: 'Github',
        image: '/personal/img/links/upwork.com.png'
    },
];

window.onload = e => {
    console.log(e)
};

window.buildLink = ({url, name, image}) => {
    const linksContainer = document.querySelector('.links-container .links');
    linksContainer.innerHTML += (`<div class="link"><span><a href="${url}"><img src="${image}" alt="${name}"></a></span></div>`);
};

for (const link of links) {
    buildLink(link);
}