import React from "react";
import "./index.css";

function Home() {
    return (
        <section className="hero is-black block py-6 custom-font" id="intro">
            <div className="hero-body">
                <div className="column is-4 mx-auto">
                    <div className="title-underline" />
                </div>
                <div className="column is-5 m-auto p-6 ">
                    <p data-aos="fade-up">
                    </p><h1 className="title is-3 ml-6 has-text-white">HI, I'm SHAN </h1>
                    <h2 className="title is-1 ml-6 has-text-white">I'M A WEB</h2>
                    <h2 className="title is-1 ml-6 has-text-white">DESIGNER</h2>
                    <br /><br /><br />
                    <h2 className="is-4">
                        Web developer with almost 4 years
                        experience in designing developing
                        interface,testing,debugging and proven
                        ability in optimization of web functions</h2>
                    <p />
                    <br /><br />
                    <div className="buttons">
                        <button className="button is-white is-outlined">
                            <strong>VIEW MY PROJECTS</strong>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
