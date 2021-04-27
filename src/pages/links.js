import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function() {
    return (
        <Layout hideNav="true">
            <SEO lang="en" title="links" />
            <div style={{ minHeight: "600px", textAlign: "center" }}>
            <h3>SUPPORT ME</h3>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner"
                        onclick="window.location.href='https://ko-fi.com/steffieharner'"
                        className="btn links"
                    >
                       ☕️ KO-FI / MEMBERS ONLY CONTENT
                    </a>
                </div>
                <div>
                    <a
                        href="https://paypal.me/steffieharner"
                        className="btn links"
                    >
                        🤝 PAYPAL
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
                <h3>WORK WITH ME</h3>
               <div>
                    <a
                        href="mailto:hi@steffieharner.com"
                        className="btn links"
                    >
                        📩 BUSINESS INQUIRIES
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/steffieharner/commissions"
                        className="btn links"
                    >
                        🤝 MODELING/CONCEPT RATES
                    </a>
                </div>
                <h3>SOCIAL</h3>
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

<h4>SHOP + DISCOUNT CODES</h4>

<div>
                    <a
                        href="https://www.deliriothelabel.com/shop"
                        className="btn links"
                    >
                     💎 10% OFF DIAMOND MASKS W/ CODE "CYBERSTEFFIE"
                    </a>
                </div>
                <div>
                    <a
                        href="https://funkylama.jp/"
                        onclick="window.location.href='https://funkylama.jp/'"
                        className="btn links"
                    >
                     🌈 10% OFF FUNKYLLAMA W/ CODE "CYBERSTEFFIE"
                    </a>
                </div>
            </div>
        </Layout>)}
