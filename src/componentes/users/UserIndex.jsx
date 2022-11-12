import Table from '../table/Table';
import getData from "../js/getData";
//import MainPage from '../table/MainPage';** Urgency enable with Main ** 

export default function UserIndex (props) {
    let datosTabla = getData("url",{},"get",{});
 console.log(datosTabla);
    return(
        <div className="table w-100 d-flex flex-column justify-content-center">
        <h3>Usuarios</h3>
        <p> Pagina de admin de usuarios</p>
     
        <Table data={datosTabla}
path={"/userAdmin"}
name={"Tabla usuarios"}
columns={["id", "firstName","email","username"]} 
columnsAlias={["ID","NOMBRE","CORREO","USUARIO"]}
    tools={["update", "delete"]}/>
      

     {/*}   <MainPage data={datosTabla}
        path={"/userAdmin"}
        name={"Tabla usuarios"}
        columns={["id", "firstName","email","username"]} 
        columnsAlias={["ID","NOMBRE","CORREO","USUARIO"]}
    tools={["update", "delete"]} />*/}
      {/*}  <MainPage data={datosTabla}
path={"/userAdmin"}
name={"Tabla usuarios"}
columns={["id", "firstName","email","username"]} 
columnsAlias={["ID","NOMBRE","CORREO","USUARIO"]}
    tools={["update", "delete"]}/>*/}
                      </div>
    );
}

