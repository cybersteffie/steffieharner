import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function() {
    return (
        <Layout hideNav="true">
            <SEO lang="en" title="links" />
            <div style={{ minHeight: "600px", textAlign: "center" }}>
                <div style={{ paddingBottom: "1rem" }}>
                    <a
                        href="https://www.youtube.com/watch?v=EySpvZgyQvs"
                        onclick="window.location.href='https://www.youtube.com/watch?v=lzCbobanpl4'"
                        className="btn links video"
                    >
                        NEW VID 👉 PHOTOSHOOT BTS
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner"
                        onclick="window.location.href='https://ko-fi.com/steffieharner'"
                        className="btn links"
                    >
                        ☕️ SUPPORT MY WORK
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner/commissions"
                        className="btn links"
                    >
                        💃 MODELING RATES
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.amazon.jp/hz/wishlist/ls/247CCNYPN5OYW?ref_=wl_share"
                        className="btn links"
                    >
                        ✨ AMAZON WISH LIST
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.youtube.com/steffieharner?sub_confirmation=1"
                        className="btn links"
                    >
                        📺 YOUTUBE
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/steffieharner"
                        className="btn links"
                    >
                        📱 INSTAGRAM
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.twitter.com/steffieharner"
                        className="btn links"
                    >
                        💬 TWITTER
                    </a>
                </div>
                {/* <div>
                    <a
                        href="https://www.tiktok.com/@steffieharner"
                        className="btn"
                    >
                        TIKTOK
                    </a>
                </div> */}
                {/* <div>
                    <a
                        href="https://www.facebook.com/steffieharnerofficial"
                        className="btn"
                    >
                        FACEBOOK
                    </a>
                </div> */}
            </div>
        </Layout>
    );
}
