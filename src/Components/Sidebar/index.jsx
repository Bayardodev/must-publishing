import React, { Component } from "react";
import "./sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div class="h-100 w-100">
          <div class="bg-image card shadow-1-strong shop-card-bg h-50">
            <div class="mask card-body">
              <h5 class="card-title">Дэлгүүр</h5>
              <p class="card-text">
                Та манай хэвлэлтээс гарсан ном болон бусад бүтээгдэхүүнүүдийн зарагдаж байгаа дэлгүүрийн мэдээллийг дэлгэрэнгүй авах боломжтой
              </p>
              <a href="#!" class="btn btn-primary">
                Дэлгэрэнгүй
              </a>
            </div>
          </div>
          <div class="bg-image card shadow-1-strong shop-card-bg h-50">
            <div class="mask card-body">
              <h5 class="card-title">Текст 2</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#!" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
