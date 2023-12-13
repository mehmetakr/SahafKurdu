import React from "react"


const Deletemodal =({setmodalDelete,handledelete,booktitle})=>{


return(
<div className="deletemodal ">

<div className="modalinner">

<h5>{booktitle} , Kitabini Silmek İstiyormusunuz ?</h5>

<button onClick={()=>setmodalDelete(false)}  className="btn btn-warning">Vazgeç</button>
<button onClick={()=>handledelete()} className="btn btn-danger">Onayla</button>

</div>


</div>


)

}

export default Deletemodal