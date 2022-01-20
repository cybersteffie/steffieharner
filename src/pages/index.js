import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import PortfolioList from "../components/list-portfolio";
import SectionTitle from "../components/sectiontitle";
import Contact from "../components/contact";
import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

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
                            <div className="headshot text-center">
                                <img
                                    src={
                                        this.props.data.site.siteMetadata
                                            .headshot
                                    }
                                    alt="Steffie Harner @cybersteffie - Cyberpunk Model in Tokyo - Software Developer"
                                />
                            </div>
                            <div className="section-title">
                                <SectionTitle title="i'm steffie harner ☆ " />
                            </div>
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>
                        <a href="#portfolio" className="btn">
                            SEE PORTRAITS
                        </a>
                    </div>
                    <div className="social-buttons">
                            <SocialLinks />
                        </div>                </div>
                <PortfolioList />
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
                headshot
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
