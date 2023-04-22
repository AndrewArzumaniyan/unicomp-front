import React from "react";
import unImgs from "../../images/images.js"
import "../../styles/table.scss"

const DesktopTable = ({ universities, rows }) => {
  

  return (
    <section className="table">
      <div className="container table__container">
        <table>
          <thead>
            <tr>
              <th>Категории</th>
              {universities.map((university) => (
                <th key={university.id}>
                  <div 
                    className="table__bg" 
                    style={{height: `${100 * rows.length + 80}px`, background: `url(${university.img ? unImgs[university.img] : ''})`}}
                  ></div>
                  <span className="table__head-text">
                    {university.visibleName ? university.visibleName : university.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                {row.map((el) => (
                  <td>{el}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DesktopTable