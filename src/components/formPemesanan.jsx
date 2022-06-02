// import React, { useState } from "react";

// const FormPemesanan = () => {
//   const [inputName, setInputName] = useState["Bolu"];

//   const handleChange = (event) => {
//     // console.log(event.target.value)
//     let input = event.target.value;
//     setInputName(input);
//   };

//   return (
//     <div className="container">
//       <div className="form-head">
//         <h1>Info Pemesanan</h1>
//       </div>
//       <div>
//         <form method="post" action="" className="form-container">
//           <div className="asal-pesanan">
//             <label htmlFor="asal">Asal Pesanan</label>
//             <br />
//             <select name="asal" id="asal">
//               <option value="whatshaap">Whatshaap</option>
//               <option value="call">Call</option>
//               <option value="email">Email</option>
//             </select>
//           </div>
//           <div className="nama">
//             <label htmlFor="nama">Nama</label>
//             <br />
//             <input
//               type="text"
//               id="nama"
//               onChange={handleChange}
//               value={inputName}
//             />
//           </div>
//           <div className="nomor-telephone">
//             <label htmlFor="telephone">Nomor Telephone</label>
//             <br />
//             <input type="number" id="telephone" />
//           </div>
//           <div className="email">
//             <label htmlFor="email">Email</label>
//             <br />
//             <input type="email" id="email" />
//           </div>
//           <div className="jumlah-roti">
//             <label htmlFor="jumlah">Jumlah Roti</label>
//             <br />
//             <input type="number" id="jumlah" />
//           </div>
//           <div className="keterangan">
//             <label htmlFor="keterangan">Keterangan</label>
//             <br />
//             <textarea
//               name="keterangan"
//               id="keterangan"
//               cols="30"
//               rows="10"
//             ></textarea>
//           </div>
//           <input type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPemesanan;
