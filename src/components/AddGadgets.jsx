import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddGadgets = () => {
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  let URL = "http://https://my-json-server.typicode.com/abolarin100/gadgetDb/blogs"
     const handleSubmit = (e) => {
       e.preventDefault();

       const newGadget = {name, model, year, description}
          // console.log(newGadget);
          setIsLoading(true)
          fetch("https://my-json-server.typicode.com/abolarin100/gadgetDb/blogs", {
            method: 'POST',
          headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newGadget)
          }).then(()=>{
              setIsLoading(false)
              navigate('/blog')
          })
             
          }
  return (
    <div className='container'>
      <h1>Add Gadgets</h1>

                   <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                       <label  className="form-label">Name</label>
                       <input type="text" className="form-control"  placeholder="gadget name" value={name} onChange={(e)=> setName(e.target.value)}/>
                       </div>
                     <div className="mb-3">
                       <label  className="form-label">Model</label>
                       <input type="text" className="form-control"  placeholder="gedget model" value={model} onChange={(e)=> setModel(e.target.value)}></input>
                       </div>
                     <div className="mb-3">
                       <label  className="form-label">Year</label>
                       <input type="text" className="form-control"  placeholder="" value={year}  onChange={(e)=> setYear(e.target.value)} ></input>
                       </div>
                       <div class="mb-3">
                       <label className="form-label">Description</label>
                       <textarea className="form-control"  rows="6" value={description}  onChange={(e)=> setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='d-grid gap-2'>
                       {!isLoading && <button className='btn btn-secondary' type='submit'>Submit</button>}
                       {isLoading && <button className='btn btn-secondry' type='submit'>Adding Gadget..........</button>}

                    </div>
                   </form>
    </div>
  );
}

export default AddGadgets;


