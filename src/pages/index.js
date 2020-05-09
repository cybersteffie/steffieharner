import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import PortfolioList from "../components/list-portfolio";
import BlogList from "../components/list-blog";
import Contact from "../components/contact";
import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    // createSVGElement(n, v) {
    //     n = document.createElementNS("http://www.w3.org/2000/svg", n);
    //     for (var p in v) n.setAttributeNS(null, p, v[p]);
    //     return n;
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.setWindowHeight);
    // }

    // componentDidMount() {
    // this.setWindowHeight();

    // window.addEventListener("resize", this.setWindowHeight);

    // let sWidth = this.svg.clientWidth,
    //     tText = this.svg.querySelector("text"),
    //     tWidth = tText.getBoundingClientRect().width;

    //     if (tWidth > sWidth) {
    //         let tInnerText = tText.innerHTML;
    //         if (tInnerText.split(" ").length > 1) {
    //             tText.innerHTML = "";
    //             tInnerText.split(" ").forEach((e, i) => {
    //                 let tSpan = this.createSVGElement("tspan", {
    //                     dy: i === 0 ? "0em" : ".8em",
    //                     x: "50"
    //                 });
    //                 tSpan.innerHTML = e;
    //                 tText.appendChild(tSpan);
    //             });
    //             setTimeout(() => {
    //                 this.svg.style.height =
    //                     tText.getBoundingClientRect().height + 70;
    //                 this.svg.style.margin = "15px auto";
    //             }, 250);
    //         } else {
    //             while (tWidth > sWidth) {
    //                 let fontSize = parseInt(
    //                     window
    //                         .getComputedStyle(tText, null)
    //                         .getPropertyValue("font-size")
    //                 );
    //                 tText.style.fontSize = fontSize - 1 + "px";
    //                 tWidth = tText.getBoundingClientRect().width;
    //             }
    //         }
    //     }
    // }

    // setWindowHeight() {
    //     this.setState({
    //         winHeight: window.innerHeight
    //     });
    // }

    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="main-title text-primary">
                            hello, i'm{" "}
                            {this.props.data.site.siteMetadata
                                .capitalizeTitleOnHome
                                ? this.props.data.site.siteMetadata.title.toLowerCase()
                                : this.props.data.site.siteMetadata.title.toLowerCase()}
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>

                        <a href="#portfolio" className="btn">
                            SEE WORKS
                        </a>
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                <PortfolioList />
                {/* <BlogList /> */}
                <Contact />
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description
                social {
                    name
                    url
                    icon
                }
            }
        }
    }
`;
