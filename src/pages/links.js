import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

export default function() {
    return (
        <Layout>
            <SEO lang="en" title="links" />
            <div style={{ minHeight: "600px", textAlign: "center" }}>
                <div>
                    <a href="/" className="btn">
                        WWW
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.twitter.com/steffieharner"
                        className="btn"
                    >
                        TWITTER
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.youtube.com/steffieharner"
                        className="btn"
                    >
                        YOUTUBE
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.tiktok.com/@steffieharner"
                        className="btn"
                    >
                        TIKTOK
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.facebook.com/steffieharner"
                        className="btn"
                    >
                        FACEBOOK
                    </a>
                </div>
            </div>
        </Layout>
    );
}
