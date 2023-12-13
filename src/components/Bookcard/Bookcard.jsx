import React from "react";

const Bookcard = ({ bookInfo, handleModal, handeleditmodal, handleRead }) => {
  const { title, date, isRead, id } = bookInfo;

  return (
    <div className="mt-5 d-flex justify-content-between p-3 border shadow align-items-center rounded ">
      <div className="">
        <h5 style={{ textDecoration: isRead ? "line-through" : "none" }}>
          {title}
        </h5>
        <p>{date}</p>

      </div>

      <div className="btn-group shadow">
        <button
          onClick={() => handleModal(id, title)}
          className="btn btn-danger"
        >
          Sil
        </button>
        <button
          onClick={() => handeleditmodal(bookInfo)}
          className="btn btn-primary"
        >
          Düzenle
        </button>
        <button
          onClick={() => handleRead(bookInfo)}
          className="btn btn-success"
        >
          {isRead === true ? "Okundu" : "Okunmadı"}
        </button>
      </div>
    </div>
  );
};
export default Bookcard;
