import React, { Component } from "react";
import "./services.css";
export default class Services extends Component {
  render() {
    return (
      <>
        <div>
          <h2>Хэвлэлийн үйлчилгээнүүд</h2>
          <ul className="cards custom-cards">
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Ном, Сурах бичиг</h3>
                <div className="card-content">
                  <p>
                    Ном, сурах бичгийн хавтас нь хатуу болон зөөлөн гэсэн хоёр
                    төрөл байж болох бөгөөд Удаан хадгалах сайн чанарын номуудыг
                    гол төлөв хатуу хавтастайгаар хийдэг.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Сонин, Сэтгүүл</h3>
                <div className="card-content">
                  <p>
                    Бүх төрлийн сонин, сэтгүүлийг таны хүссэн загвар дизайнаар
                    захиалгаар үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Тайлан, Дипломын ажил</h3>
                <div className="card-content">
                  <p>
                    Бүх төрлийн тайлан, дипломын ажлыг таны хүссэн загвар
                    дизайнаар лак, матт, софт бүрэлт зэрэг орчин үеийн
                    технологоор захиалгаар үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Танилцуулга</h3>
                <div className="card-content">
                  <p>
                    Бүх төрлийн танилцуулга каталогийг таны брэндийн онцлогийг
                    тусган таны хүссэн загвар дизайнаар лак, матт, софт бүрэлт
                    зэрэг орчин үеийн технологоор захиалгаар үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Урилга мэндчилгээ</h3>
                <div className="card-content">
                  <p>
                    Нугалаатай, энгийн болон калькан дугтуйтай зэрэг бүх төрлийн
                    урилга мэндчилгээг таны хүссэн дизайн, шийдлээр захиалгаар
                    үйлдвэрлэнэ.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Албан бланк</h3>
                <div className="card-content">
                  <p>
                    Бүх төрлийн албан бланкыг таны хүссэн загвар, стандарт,
                    дизайнаар захиалгаар үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Нэрийн хуудас</h3>
                <div className="card-content">
                  <p>
                    Таны нэрийн хуудсыг таны хүссэн загвар шийдлээр саатай,
                    матт, софт бүрэлт зэрэг орчин үеийн технологоор захиалгаар
                    үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Карматай хавтас</h3>
                <div className="card-content">
                  <p>
                    Цаасан хавтсыг таны хүссэн хэлбэр хэмжээтэйгээр хийж
                    гүйцэтгэнэ.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
            <li className="card custom-service-card">
              <div>
                <h3 className="card-title">Тасалбар талон</h3>
                <div className="card-content">
                  <p>
                    Бүх төрлийн тасалбар талоныг таны хүссэн хэлбэр дүрсээр
                    захиалгаар үйлдвэрлэж байна.
                  </p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <a href="" className="card-link">
                  Дэлрэгэнгүй
                </a>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
