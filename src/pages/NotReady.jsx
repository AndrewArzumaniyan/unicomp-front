import React from "react";
import "../styles/error(404).scss";
import "../styles/global.scss"

const NotReady = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <section className="error">
          <div className="error__wrapper">
            <h2 className="error__mes">Упс...</h2>
            <h3 className="error__title">Данная страница находится на стадии разработки!)</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotReady