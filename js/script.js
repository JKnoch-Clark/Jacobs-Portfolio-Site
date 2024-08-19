document.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector('main');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    const portfolioArray = [{
        title: '1709 Records (Divi Builder/Wordpress)',
        img: 'images/1709_records.png',
        alt: '1709 Records Homepage',
        description: 'Records Shop Website for 1709 Records.',
        link: 'https://1709records.com/',
        linkable: true
    },
    {
        title: 'New York Times Api (Javascript)',
        img: 'images/nyt_api.PNG',
        alt: 'New York Times Api Displaying News Articles',
        description: 'The New York Times API website provides access to a variety of news and article data.',
        link: '/nyt/nyt.html',
        linkable: false
    },
    {
        title: 'Blog (PHP)',
        img: 'images/Blog.PNG',
        alt: 'Jacobs smorgasbord Blog front page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/blog/blog.php',
        linkable: false
    },
    {
        title: 'Open Weather Api (Javascript)',
        img: 'images/weather_api.PNG',
        alt: 'Weather Api Displaying Weather Information',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/weather/weather.html',
        linkable: false
    },
    {
        title: 'Gallery App (PHP)',
        img: 'images/Gallery.PNG',
        alt: 'Gallery of Pixel Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/gallery/gallery.php',
        linkable: false
    },
    {
        title: 'Form Validation (PHP)',
        img: 'images/form_validate.PNG',
        alt: 'Form Validation Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/form_validate/project_2.html',
        linkable: false
    }
    ];

    // display portfolio
    function displayPortfolio() {
        let portfolio = document.querySelector('.portfolio');
        let portfolioItems = '';

        portfolioArray.forEach(function (item) {
            portfolioItems += `
            <div class="card">
                <div class="container">`;
            if (item.linkable) {
                portfolioItems += `<h3><b><a href="${item.link}">${item.title}</a></b></h3>`;
            } else {
                portfolioItems += `<h3><b>${item.title}</b></h3>`;
            }
            portfolioItems += `
                    <img src="https://jknoch-clark.github.io/Jacobs-Portfolio-Site/${item.img}" alt="${item.alt}">
                </div>
            </div>
            `;
        });
        // <p>${item.description}</p>
        portfolio.innerHTML = portfolioItems;
    }

    // dark mode
    function darkMode() {
        main.classList.toggle('dark');
        header.classList.toggle('dark');
        footer.classList.toggle('dark');
    }
    displayPortfolio();
});