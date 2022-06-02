import React, { useState } from "react";
import "../App.css";

const Dashboard = () => {
  //   const [inputAsal, setInputAsal] = useState("");
  const [pesanan, setPesanan] = useState([""]);
  const [inputName, setInputName] = useState("");
  const [inputJumlah, setInputJumlah] = useState("");

  //   const changeAsal = (event) => {
  //     let asal = event.target.value;
  //     setInputAsal(asal);
  //   };

  const changeName = (event) => {
    let name = event.target.value;
    setInputName(name);
  };

  const changeJumlah = (event) => {
    let jumlah = event.target.value;
    setInputJumlah(jumlah);
  };

  const handleSubmit = (event) => {
    if (inputName !== "") {
      event.preventDefault();
      setPesanan([...pesanan, inputName]);
      setInputName("");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-head">
          <h1 style={{ textAlign: "center" }}>Info Pemesanan</h1>
        </div>
        <div>
          <form method="post" action="" onSubmit={handleSubmit}>
            <div className="asal-pesanan">
              <label htmlFor="asal">Asal Pesanan</label>
              <br />
              <select
                // onChange={changeAsal}
                // value={inputAsal}
                name="asal"
                id="asal"
              >
                <option value="whatshaap">Whatshaap</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="nama">
              <label htmlFor="nama">Nama</label>
              <br />
              <input
                onChange={changeName}
                value={inputName}
                type="text"
                id="nama"
              />
            </div>
            <div className="nomor-telephone">
              <label htmlFor="telephone">Nomor Telephone</label>
              <br />
              <input type="number" id="telephone" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" />
            </div>
            <div className="jumlah-roti">
              <label htmlFor="jumlah">Jumlah Roti</label>
              <br />
              <input
                onChange={changeJumlah}
                value={inputJumlah}
                type="number"
                id="jumlah"
              />
            </div>
            <div className="keterangan">
              <label htmlFor="keterangan">Keterangan</label>
              <br />
              <textarea
                name="keterangan"
                id="keterangan"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input type="submit" className="btn-submit" />
          </form>
        </div>
      </div>
      <h1>Daftar Pesanan</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>Asal Pesanan</th>
            <th>Nama</th>
            <th>No Telephone</th>
            <th>Email</th>
            <th>Jumlah</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {pesanan.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
