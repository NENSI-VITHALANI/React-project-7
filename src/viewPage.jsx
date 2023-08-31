
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const View = () => {

    let all = localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : [];

    const [alldata, setAlldata] = useState(all);
    const [search, setsearch] = useState("")
    const [sortOrder, setSortOrder] = useState("asc");

    const deleteData = (id) => {
        let ans = alldata.filter((item) => {
            return item.id !== id;
        });
        setAlldata(ans);
        alert("Record successfully deleted");
    }

    // useEffect(() => {
    //     //     let data = JSON.parse(localStorage.getItem('crud'));
    //     //     if (data === null) {
    //     //         setAlldata([])
    //     //     } else {
    //     //         setAlldata(data);
    //     //     }
    //     // }, []);
    useEffect(() => {
        let namesearch = all.filter((item) => {
            return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });

        if (sortOrder === "asc") {
            namesearch.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            namesearch.sort((a, b) => b.name.localeCompare(a.name));
        }

        setAlldata(namesearch);
    }, [search, sortOrder]);

    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <body className="bg-dark text-white">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 pb-5">
                        <div className="div mt-3 d-flex "><h4 className="me-3">Product Name :</h4> <input className="rounded-2  ps-3 pe-5" type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Serach Your Product" /> <button className="ms-5  px-4 btn btn-secondary " ><Link to="/" style={{color:'white',textDecoration:'none'}}>Add</Link></button>
                        </div>
                       
                        <br></br>
                        <table  className="w-100 border border-light">
                            <thead >
                                <tr className="border-bottom border-light " >
                                    <th width="20%" className="text-center ">Id</th>
                                    <th width="30%" className="text-center">Product Name</th>
                                    <th width="30%" className="text-center">Description</th>
                                    <th width="30%" className="text-center">Action &nbsp; &nbsp;
                                        <select name="select" className="rounded-2  my-2 px-3" onChange={(e) => handleSort(e.target.value)}>
                                            <option value="select">select</option>
                                            <option value="asc">Ascending</option>
                                            <option value="dsc">Descending</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody border={1}>
                                {alldata.map((val) => {
                                    const { id, name, des } = val;
                                    return (
                                        <tr key={id} className="py-5 border-bottom border-light " >
                                            <td className="text-center">{id}</td>
                                            <td className="text-center">{name}</td>
                                            <td className="text-center">{des}</td>
                                            <td className="text-center">
                                                <button className="btn my-2 btn-danger" onClick={() => deleteData(id)}>Delete</button>   &nbsp;    &nbsp; ||   &nbsp;   &nbsp;
                                                <button className="btn my-2 btn-primary"><Link to={`/edit/${id}`} style={{ textDecoration: 'none',color:'white' }}>Edit</Link></button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
        </body>

    );
}

export default View;
