import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function() {
    return (
        <Layout hideNav="true">
            <SEO lang="en" title="links" />
            <div style={{ minHeight: "600px", textAlign: "center" }}>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner"
                        onclick="window.location.href='https://ko-fi.com/steffieharner'"
                        className="btn"
                    >
                        BUY ME ☕
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner/commissions"
                        className="btn"
                    >
                        BOOK ME
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
                        href="https://www.facebook.com/steffieharnerofficial"
                        className="btn"
                    >
                        FACEBOOK
                    </a>
                </div>
            </div>
        </Layout>
    );
}
