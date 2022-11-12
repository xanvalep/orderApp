import Table from "../table/Table";
export default function MainPage (props) {
    return (
        <div>
            conextion
            <h2>I am a { props.brand }!</h2>;
           
                
<Table data={props.datosTabla}
path={props.path}
name={props.name }
columns={props.columns} 
columnsAlias={props.columnsAlias}
tools={props.tools}/>
   
        </div>
  /*}  <Table data={datosTabla}
path={"/userAdmin"}
name={"Tabla usuarios"}
columns={["id", "firstName","email","username"]} 
columnsAlias={["ID","NOMBRE","CORREO","USUARIO"]}
    tools={["update", "delete"]}/>*/
    )
    
}


