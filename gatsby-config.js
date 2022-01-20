const siteMetadata = {
    title: `CYBER STEFFIE | Tokyo-based cyberpunk-obsessed, freelance creator & ux engineer`,
    siteUrl: `https://cybersteffie.io`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo-new.png`,
    icon: `/images/icon.png`,
    headshot: `/images/cybersteffie.jpg`,
    titleImage: `/images/wall.jpg`,
    introTag: `tokyo-based creator | ux engineer | streamer`,
    description: `Tokyo-based cyberpunk-obsessed, freelance creator & ux engineer. \n\n よろしくお願いします。`,
    author: `@cybersteffie`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
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
            name: "bookings",
            url: "https://ko-fi.com/cybersteffie/commissions"
        },
        {
            name: "support",
            url: "https://ko-fi.com/cybersteffie"
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
            name: "Twitch",
            icon: "/images/Twitch.svg",
            url: "https://twitch.tv/cybersteffie"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/cybersteffie"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com/cybersteffie"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/cybersteffie"
        },
        {
            name: "Github",
            icon: "/images/Github.svg",
            url: "https://www.github.com/steffieharner"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `for business inquiries, collaboration requests ー by email please! `,
        mail: "hi@steffieharner.com"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
            useMozJpeg: false,
            stripMetadata: true,
            defaultQuality: 75,
            duotone: true
        }
    },
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
                        linkImagesToOriginal: false,
                        maxWidth: 1280,
                        tracedSVG: {
                            color: "#f36fda",
                            turnPolicy: "TURNPOLICY_MAJORITY"
                        }
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
