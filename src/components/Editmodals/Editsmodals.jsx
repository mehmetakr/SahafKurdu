import React from "react";

const Editmodals = ({
  seteditmodal = () => {},
  edititem = {},
  setedititem = () => {},
  handleeditbook=()=>{}
}) => {


console.log(edititem)
  return (
    <div className="dişedit">
      <div className="içedit">
        <h5>Kitap ismini Düzenle</h5>

        <input
          onChange={(e)=>setedititem({...edititem, title: e.target.value})}
          type="text"
          className="form-control"
          value={edititem.title}
          placeholder="Kitap Adı "
        />

        <button onClick={() => seteditmodal(false)} className="btn btn-warning">
          Vazgeç
        </button>
        <button  onClick={()=>handleeditbook()} className="btn btn-success">Kaydet</button>
      </div>
    </div>
  );
};

export default Editmodals;
