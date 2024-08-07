document.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector('main');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    const portfolioArray = [{
        title: '1709 Records',
        img: 'images/1709_records.png',
        alt: '1709 Records Homepage',
        description: 'Records Shop Website for 1709 Records.',
        link: 'https://1709records.com/'
    },
    {
        title: 'New York Times Api',
        img: 'images/nyt_api.png',
        alt: 'New York Times Api Displaying News Articles',
        description: 'The New York Times API website provides access to a variety of news and article data.',
        link: '/nyt/nyt.html'
    },
    {
        title: 'Blog',
        img: 'images/Blog.png',
        alt: 'Jacobs smorgasbord Blog front page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/blog/blog.php'
    },
    {
        title: 'Weather Api',
        img: 'images/weather_api.png',
        alt: 'Weather Api Displaying Weather Information',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/weather/weather.html'
    },
    {
        title: 'Gallery',
        img: 'images/gallery.png',
        alt: 'Gallery of Pixel Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/gallery/gallery.php'
    },
    {
        title: 'Form Validation',
        img: 'images/form_validate.png',
        alt: 'Form Validation Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        link: '/form_validate/project_2.html'
    }
    ];

    // display portfolio
    function displayPortfolio() {
        let portfolio = document.querySelector('.portfolio');
        let portfolioItems = '';

        portfolioArray.forEach(function (item) {
            portfolioItems += `
            <div class="card">
                <div class="container">
                    <h3><b><a href='${item.link}'>${item.title}</a></b></h3>
                    <p>${item.description}</p>
                </div>
                <img src="${item.img}" alt="${item.alt}">
            </div>
            `;
        });

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