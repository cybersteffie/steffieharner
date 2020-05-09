const siteMetadata = {
    title: `Steffiie Harner`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `freelance model | software engineer`,
    description: `Tokyo-based cyberpunk-obsessed, freelance model & software engineer. よろしくお願いします。`,
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
        // {
        //     name: "blog",
        //     url: "/blog"
        // },
        {
            name: "portfolio",
            url: "/portfolio"
        },
        {
            name: "contact",
            url: "/contact"
        }
    ],
    footerLinks: [
        // {
        //     name: "PRIVACY POLICY",
        //     url: "/privacy-policy"
        // }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://wwww.facebook.com/steffieharner"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://wwww.twitter.com/steffieharner"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://wwww.instagram.com/steffieharner"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://wwww.youtube.com/steffieharner"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@steffieharner.com",
        phone: "000-000-0000",
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
