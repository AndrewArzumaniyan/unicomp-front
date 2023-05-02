import React from "react";
import images from "../../images/images.js";
import "../../styles/gidArticle.scss"

const GidArticle = ({ gidEl}) => {
  return (
    <section className="article">
      <div className="article-container">
        <div className="article-wrapper">
          <div className="article__common">
            <h3 className="article__common-title article-title">
              {gidEl["common_description"]["title"]}
            </h3>
            <div className="article__common-info">
              <div className="article__common-info-bg"
                style={{ backgroundImage: `url(${images[gidEl["img"]]})` }}
              ></div>
              <p>
                {gidEl["common_description"]["info"]}
              </p>
            </div>
          </div>

          {Object.keys(gidEl).filter((el) => el != 'common_description' && el != "_id" && el != "name" && el != "img").map((key) => (
            <div key={Math.random()} id={`${key}`} className="article__part">
              <h3 className="article__part-title article-title">
                {gidEl[key]["title"]}
              </h3>

              {Object.keys(gidEl[key]).filter((el) => el != "title").map((key_key) => (
                <div key={`${Math.random()}`} className="article__part-part">
                  <h4 className="article__part-subtitle">
                    {gidEl[key][key_key]["title"].toUpperCase()}
                  </h4>

                  <p className="article__part-part-info">
                    {gidEl[key][key_key]["info"]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GidArticle