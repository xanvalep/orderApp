import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
export default function Item() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
  if (!list) return null;
  console.log(list);
  return (
    <div class="row">
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div className="row">
              <div className="col-sm-3">
                <img
                  className="prod-img bigph"
                  alt="prueba"
                  src="https://picsum.photos/100"
                />
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-sm-9">
                    <h1>
                      <b>{item.title}</b> <span className="price">$12.50</span>
                    </h1>
                    <p className="w3-text-grey">{item.body}</p>
                  </div>
                  <div className="col-sm-3">
                    <MyForm />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}


function MyForm() {
  return (
    <form className="">
      <div className="row">
        <div className="col">
          <select className="form-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Unidades"
          ></input>
        </div>
      </div>
    </form>
  );
}


