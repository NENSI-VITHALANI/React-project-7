import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const getrecord = () => {
    let all = JSON.parse(localStorage.getItem('crud'));
    if (all === null) {
      return []
    }
    else {
      return all
    }

  }
  const [record, setRecord] = useState(getrecord);
  const [input, setInput] = useState({
    name: '',
   des:''
  })
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput({
      ...input, [name]: value
    })
  }
  const handleSubmit = () => {
    let name = input.name;
    let des = input.des;
    let ans = record.map((item)=> {
      if (item.id == parseInt(id)) {
        return {
          ...item,
          name: name,
          des:des
        }
      }
      return item;
    })
    setRecord(ans);
    localStorage.setItem('crud', JSON.stringify(ans));
    alert('Record successfully  Update..');
    navigate('/viewdata');
    setInput({
      name: '',
      des:''
    })

  }
  useEffect(() => {
    let ans = record.filter((item) => {
      return item.id == id;
    })
    setInput(ans[0])
  }, [])


  return (
    <body className="bg-dark text-white">

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 pb-5">
          <h1 className="py-3 text-start">Todo Application</h1>
          <table className=" border w-100 d-flex justify-content-start">
           <tr className="p-1">
             <td ><input   value={input.name} className="my-2 mx-3 py-2  ps-3 pe-5 rounded-2" type="text" placeholder="Todo Title" onChange={handleChange} name="name" /></td>
              <td><input   value={input.des} className="my-2 mx-3 py-2 pe-5 ps-3 rounded-2" type="text" placeholder="Description" onChange={handleChange} name="des" /></td>
              <td><input type="button" className=" m-2 px-4 btn btn-primary" onClick={() => handleSubmit()} value="Edit" /></td>
               <td> <button className="mx-3 my-2 px-4 btn btn-secondary " ><Link to="/viewdata" style={{color:'white',textDecoration:'none'}}>View</Link></button></td>
            </tr>
          </table>
         
        </div>
      </div>

    
    </div>
  </body>
    // <center>
    //   <h1>Edit Record</h1>
    //   <table border={1}>
    //     <tbody>
    //       <tr>
    //         <td>Name :- </td>
    //         <td><input type="text" name="name" onChange={handleChange} value={input.name} /></td>
    //       </tr>
  
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="button" onClick={() => handleSubmit()} value="Edit" />
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <Link to="/viewdata">View</Link>
    // </center>
  )
}
export default Edit;