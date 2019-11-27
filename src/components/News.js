import React from "react";
import { newsList } from "../data";

const News = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        {newsList.map(noticia => {
          return (
            <div class="col-md-6 col-sm-12 mt-3">
              <div class="card justify-content-center">
                <img src={noticia.img} class="card-img-top justify-content-center" alt="imagen"  style={{width: '100%'}} />
                <div class="card-body">
                  <h5 class="card-title">{noticia.title}</h5>
                  <p class="card-text">{noticia.contenido}</p>
                  <p class="card-text">
                    <small class="text-muted">{noticia.autor}</small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
