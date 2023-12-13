import { useState } from "react";
import Header from "./components/Header";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import Bookcard from "./components/Bookcard/Bookcard";
import Deletemodal from "./components/Deletemodal/Deletemodal";
import Editmodals from "./components/Editmodals/Editsmodals";

function App() {
  // yeni kitabın adının tutuldugu state
  const [bookName, setbookName] = useState("");

  const [books, setBooks] = useState([]);

  const [deleteId, setdeleteId] = useState(null);

  const [deletetitle, setdelettitle] = useState("");

  const [modaldelete, setmodalDelete] = useState(false);

  const [editmodal, seteditmodal] = useState(false);

  const [edititem, setedititem] = useState({});

  // tüm kitapların tutulduğu state
  // inputun içeriğini almak için fonksiyon
  // input her değiştiğinde çalışır
  const handleChange = (e) => {
    setbookName(e.target.value);
  };
  // console.log("ekrana kitabın adi yazildi "+ bookName)

  // kitap ekleem fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("çaliştii ");

    // eğer kitap ismi yoksa bize bir toast mesajı gönderdi
    if (!bookName) {
      toast.warn("Lütfen Kitap İsmi Giriniz", { autoClose: 2000 });
      //Fonksiyonun aşağı devam etmesini engelledik..

      return;
    }
    // kitaplari newbook adında bir fonksıyona attık ve objeleri olusturmuş olduk içinde
    const newbook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };
    // console.log("yeni kitap eklendi", newbook);
    // kitapların hepsini bir diziye atadık.
    setBooks([...books, newbook]);

    toast.success("Yeni Kitap Eklendi", { autoClose: 2000 });
    // Ardından kitap ismi yazıldıktan sonra setstate in boş gelmesını sağladık
    setbookName("");
  };

  //console.log("KİTAPLARIMIZ = ",books)

  const handleModal = (deletbookkID, deletebooktitle) => {
    setdelettitle(deletebooktitle);
    setdeleteId(deletbookkID);
    setmodalDelete(true);
  };

  const handledelete = () => {
    //console.log("delete Fonksiyonu")

    const filteredbooks = books.filter((book) => book.id !== deleteId);

    setBooks(filteredbooks);
    console.log(filteredbooks);
    setmodalDelete(false);

    toast.error("Kitap başarı ile silindi", { autoClose: 2000 });
  };
  const handeleditmodal = (editbook) => {
    // console.log("düzenleme fonksiyonu")

    setedititem(editbook);
    seteditmodal(true);
    console.log(editbook);
  };

  const handleeditbook = () => {
    const editindex = books.findIndex((book) => book.id === edititem.id);
    //console.log("kaydet")

    const clonebooks = [...books];

    clonebooks.splice(editindex,1,edititem);

    setBooks(clonebooks);
    seteditmodal(false);
    toast.success("Kitabınız başariyla güncellendi..",{autoClose:2000})
  };

// Kitabı okundu olarak işaretleme


const handleRead=(readbook)=>{


  //console.log(readbook)

//console.log("read fonksiyonu güncellendi")

//Objenin okundu değerini tam tersine çevirme 

const updatedbook={...readbook,isRead: !readbook.isRead};

//console.log(updatedbook)


const index =books.findIndex((book)=>book.id === readbook.id)


const clonebooks={...books}
clonebooks[index]=updatedbook;
setBooks(clonebooks)
}



  return (
    <div>
      <Header />

      <div className="container">
        <form className=" d-flex  gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            value={bookName}
            onChange={handleChange}
            placeholder="Kitap Adı Giriniz"
            className="form-control shadow"
            type="text"
          />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>

        {books.length === 0 ? (
          <h4> Henüz herhangi bir kitap eklenmedi</h4>
        ) : (
          // Kitap dizinde eleman varsa
          books.map((book) => (
            <Bookcard
              handeleditmodal={handeleditmodal}
              handleModal={handleModal}
              bookInfo={book}
              key={book.id}
              handleRead={handleRead}
            />
          ))
        )}
      </div>

      {modaldelete && (
        <Deletemodal
          booktitle={deletetitle}
          handledelete={handledelete}
          setmodalDelete={setmodalDelete}
        />
      )}

      {editmodal && (
        <Editmodals
          handleeditbook={handleeditbook}
          edititem={edititem}
          setedititem={setedititem}
          seteditmodal={seteditmodal}
        />
      )}
    </div>
  );
}

export default App;
