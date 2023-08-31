
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    des:''
  })
  const [alldata, setAlldata] = useState([])
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input, [name]: value
    })
  }

  const handleSubmit = () => {
    let { name, des} = input
    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      des :des,
    }
    let data = [...alldata, obj]
    localStorage.setItem('crud', JSON.stringify(data));
    setAlldata(data);
    setInput({
      name: '',
      des:''
    });
    alert("Record successfully insert");
    navigate('/viewdata')
  }
  useEffect(() => {
    let record = JSON.parse(localStorage.getItem('crud'));
    if (record == null) {
      setAlldata([])
    }
    else {
      setAlldata(record)
    }
  }, []);

  return (
    <>
      <body className="bg-dark text-white">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 pb-5">
              <h1 className="py-3 text-start">Todo Application</h1>
              <table className=" border w-100 d-flex justify-content-start">
               <tr className="p-1">
                 <td ><input className="my-2 mx-3 py-2  ps-3 pe-5 rounded-2" type="text" placeholder="Todo Title" onChange={handleChange} name="name" /></td>
                  <td><input className="my-2 mx-3 py-2 pe-5 ps-3 rounded-2" type="text" placeholder="Description" onChange={handleChange} name="des" /></td>
                  <td><input type="button" className=" m-2 px-4 btn btn-primary" onClick={() => handleSubmit()} value="Create ToDo" /></td>
                   <td> <button className="mx-3 my-2 px-4 btn btn-secondary " ><Link to="/viewdata" style={{color:'white',textDecoration:'none'}}>View</Link></button></td>
                </tr>
              </table>
             
            </div>
          </div>

        
        </div>
      </body>
    </>
  )
}

export default Home;