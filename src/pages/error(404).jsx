import React from "react";
import "../styles/error(404).scss";
import "../styles/global.scss"

const Error404 = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <section className="error">
          <div className="error__wrapper">
            <h2 className="error__mes">404</h2>
            <h3 className="error__title">Страница не найдена!</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Error404