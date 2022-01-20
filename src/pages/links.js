import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function() {
    return (
        <Layout hideNav="true">
            <SEO lang="en" title="links" />
            <div style={{ minHeight: "600px", textAlign: "center" }}>
                <h4>SUPPORT ME</h4>
                <div>
                    <a
                        href="https://foundation.app/steffieharner"
                        className="btn links"
                    >
                        ▲●■ FOUNDATION
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/cybersteffie"
                        onclick="window.location.href='https://ko-fi.com/cybersteffie'"
                        className="btn links"
                    >
                        <span role="img">☕️</span> KO-FI
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.amazon.jp/hz/wishlist/ls/247CCNYPN5OYW?ref_=wl_share"
                        className="btn links"
                    >
                        <span role="img">✨</span> AMAZON WISH LIST
                    </a>
                </div>
                <h4>WORK WITH ME</h4>
                <div>
                    <a href="mailto:hi@steffieharner.com" className="btn links">
                        <span role="img">📩</span> BUSINESS INQUIRIES
                    </a>
                </div>
                <div>
                    <a
                        href="https://ko-fi.com/cybersteffie/commissions"
                        className="btn links"
                    >
                        <span role="img">🤝</span> MODELING RATES
                    </a>
                </div>
                <h4>SOCIAL</h4>
                <div>
                    <a
                        href="https://www.youtube.com/cybersteffie?sub_confirmation=1"
                        className="btn links"
                    >
                        <span role="img">📺</span> YOUTUBE
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/cybersteffie"
                        className="btn links"
                    >
                        <span role="img">📱</span> INSTAGRAM
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.twitter.com/cybersteffie"
                        className="btn links"
                    >
                        <span role="img">💬</span> TWITTER
                    </a>
                </div>
                <h4>SHOP + "CYBERSTEFFIE" DISCOUNT CODE</h4>
                <div>
                    <a
                        href="https://www.deliriothelabel.com/shop"
                        className="btn links"
                    >
                        <span role="img">💎</span> 10% OFF DIAMOND MASKS
                    </a>
                </div>
                <div>
                    <a
                        href="https://funkylama.jp/"
                        onclick="window.location.href='https://funkylama.jp/'"
                        className="btn links"
                    >
                        <span role="img">🌈</span> 10% OFF FUNKYLLAMA
                    </a>
                </div>
            </div>
        </Layout>
    );
}
