const siteMetadata = {
    title: `steffie harner`,
    siteUrl: `http://www.steffieharner.com`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `FREELANCE MODEL | CREATIVE DEVELOPER`,
    description: `freelance model & creative developer in Tokyo, Japan`,
    author: `@steffieharner`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "home",
            url: "/"
        },
        {
            name: "about",
            url: "/about"
        },
        {
            name: "blog",
            url: "/blog"
        },
        {
            name: "portfolio",
            url: "/portfolio"
        },
        {
            name: "art",
            url: "/art"
        },
        {
            name: "contact",
            url: "/contact"
        }
    ],
    footerLinks: [],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/steffieharner"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com/steffieharner"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/steffieharner"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/steffieharner"
        },
        {
            name: "Tiktok",
            icon: "/images/Youtube.svg",
            url: "https://www.tiktok.com/@steffieharner"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `feel free to email me for my business rates and collaboration requests. \n \n よろしくお願いしす。`,
        mail: "hi@steffieharner.com",
        address: "NEO-TOKYO, JAPAN"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    }
];

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus
        }
    });
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
