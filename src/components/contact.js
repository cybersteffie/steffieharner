import React from "react";
import SectionTitle from "./sectiontitle";
import { StaticQuery, graphql } from "gatsby";
import { PaperPlane, Mapmarker, Envelope, Loading } from "./icons";
import SocialLinks from "./sociallinks";
import "../style/contact.less";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitDisabled: false
        };

        this.textAreaInput = this.textAreaInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.showContactForm = true;

        if (this.props.contact.api_url === "") {
            this.showContactForm = false;
        }
    }

    textAreaInput(event) {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.submitDisabled) {
            this.setState({
                submitDisabled: true
            });

            console.log(event);

            let name = encodeURI(this.dataName.value),
                email = encodeURI(this.dataEmail.value),
                message = encodeURI(this.dataMessage.value),
                body = `name=${name}&email=${email}&message=${message}&_replyto=${email}`;

            fetch(this.props.contact.api_url, {
                method: "post",
                encType: "multipart/form-data",
                body: body
            })
                .then(function(res) {
                    console.log("hello :3");
                    return res.json();
                })
                .then(
                    result => {
                        this.setState({
                            submitDisabled: false
                        });
                        this.resMessage.style.opacity = 1;
                        if (result.response === "error") {
                            this.resMessage.innerHTML =
                                "oops, there was an error in sending the message";
                            this.resMessage.classList.add("color-error");
                        } else {
                            this.resMessage.innerHTML =
                                "success! you sent me a message";
                            this.resMessage.classList.remove("color-error");
                        }
                        this.dataName.value = "";
                        this.dataEmail.value = "";
                        this.dataMessage.value = "";
                        let _this = this;
                        setTimeout(function() {
                            _this.resMessage.style.opacity = 0;
                        }, 5000);
                    },
                    error => {
                        this.resMessage.innerHTML =
                            "success! you sent me a message";
                        this.resMessage.classList.remove("color-error");
                        this.setState({
                            submitDisabled: false
                        });
                        let _this = this;
                        setTimeout(function() {
                            _this.resMessage.style.opacity = 0;
                        }, 5000);
                    }
                );
        }
    }

    componentDidMount() {
        if (this.showContactForm) {
            let color = window
                .getComputedStyle(this.btn, null)
                .getPropertyValue("color");
            this.btn.querySelector("path").setAttribute("fill", color);
        }

        let li = this.contactArea.querySelectorAll(".item");

        li.forEach(function(e, i) {
            let p = e.querySelector("path");
            if (p)
                p.setAttribute(
                    "fill",
                    window.getComputedStyle(e, null).getPropertyValue("color")
                );
        });
    }

    render() {
        return (
            <section id="contact" className="container">
                <div className="section-title">
                    <SectionTitle title="contact" />
                </div>
                <div
                    className={"row" + (this.showContactForm ? "" : " no-form")}
                    ref={c => (this.contactArea = c)}
                >
                    {this.showContactForm && (
                        <div className="col s12 m6">
                            <form>
                                <div className="field">
                                    <label for="name">
                                        <div className="input-border">
                                            <input
                                                placeholder="your name"
                                                type="text"
                                                ref={c => (this.dataName = c)}
                                                className="field-box"
                                                name="name"
                                                id="name"
                                                required
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="field">
                                    <label for="email">
                                        <div className="input-border">
                                            <input
                                                placeholder="your email"
                                                type="email"
                                                ref={c => (this.dataEmail = c)}
                                                className="field-box"
                                                name="email"
                                                id="email"
                                                required
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="field">
                                    <label for="message">
                                        <div className="input-border">
                                            <textarea
                                                placeholder="your inquiry"
                                                style={{ overflowY: "hidden" }}
                                                ref={c =>
                                                    (this.dataMessage = c)
                                                }
                                                className="field-box"
                                                onChange={this.textAreaInput}
                                                name="message"
                                                id="message"
                                                required
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="field">
                                    <label for="submit" className="ib">
                                        <button
                                            className={
                                                "btn" +
                                                (this.state.submitDisabled
                                                    ? " disabled"
                                                    : "")
                                            }
                                            onClick={this.handleSubmit}
                                            id="submit"
                                            ref={c => (this.btn = c)}
                                        >
                                            SEND{" "}
                                            <span
                                                className="icon paper-plane"
                                                style={{
                                                    display: this.state
                                                        .submitDisabled
                                                        ? "none"
                                                        : "inline-block"
                                                }}
                                            >
                                                <PaperPlane />
                                            </span>
                                            <span
                                                className="icon loading"
                                                style={{
                                                    display: !this.state
                                                        .submitDisabled
                                                        ? "none"
                                                        : "inline-block"
                                                }}
                                            >
                                                <Loading />
                                            </span>
                                        </button>
                                    </label>
                                    <p
                                        className="res-message"
                                        ref={c => (this.resMessage = c)}
                                    ></p>
                                </div>
                            </form>
                        </div>
                    )}
                    <div
                        className={
                            this.showContactForm
                                ? "col s12 m6 details"
                                : "col s12 details"
                        }
                    >
                        {this.props.contact.description && (
                            <p className="text-tertiary">
                                {this.props.contact.description}
                            </p>
                        )}
                        <ul>
                            {this.props.contact.mail && (
                                <li className="text-secondary item">
                                    <span className="icon">
                                        <Envelope />
                                    </span>
                                    <a
                                        href={
                                            "mailto:" + this.props.contact.mail
                                        }
                                    >
                                        {this.props.contact.mail}
                                    </a>
                                </li>
                            )}
                            {/* {this.props.contact.phone && (
                                <li className="text-secondary item">
                                    <span className="icon">
                                        <Mobile />
                                    </span>
                                    <a href={"tel:" + this.props.contact.phone}>
                                        {this.props.contact.phone}
                                    </a>
                                </li>
                            )} */}
                            {this.props.contact.address && (
                                <li
                                    className="text-tertiary item"
                                    style={{ whiteSpace: "pre" }}
                                >
                                    <span className="icon">
                                        <Mapmarker />
                                    </span>
                                    {this.props.contact.address}
                                </li>
                            )}
                            <li>
                                <SocialLinks />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            api_url
                            description
                            mail
                        }
                    }
                }
            }
        `}
        render={data => <Contact contact={data.site.siteMetadata.contact} />}
    />
);
