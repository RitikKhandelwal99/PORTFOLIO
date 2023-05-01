import React,{useState,useEffect} from 'react'

const ContactUs = () =>{
  const[num,setNum] = useState({
    name: "",
    email:"",
    address: "",
    phonenumber: ""
  });
  const[todo,setTodo] = useState([]);

  const pre = (event) => {
    const{name,value} = event.target;

    setNum((prev) => {
      return{...prev, [name]: value}
    
      
    });
    setNum("");

  };

  const onSubmit = () => {
    setTodo([...todo].concat(num));
    
    
  }
  

  
  return (
    <>
    <div className="fix">
    <p> Contact Us</p>
    </div>
    <div className="teny">
    <label htmlFor="toy">Name:</label>
    <input type="text" id="toy" name="name" onChange={pre} value={num.name}/>
    <br/><br/>
    <label htmlFor='tree'>Email:</label>
    <input type="text" id="tree"  name= "email" onChange={pre} value={num.email} />
    <br/><br/>
    <label htmlFor='topper'>Address:</label>
    <input type="text" id="topper" name="address" onChange={pre} value={num.address}/>
    <br/><br/>
    <label htmlFor='chopper'>Phone Number:</label>
    <input type="text" id="chopper"  name="phonenumber" onChange={pre} value={num.phonenumber} />
    <br/><br/>
    <div className="btn">
    <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </div>
    
    </div>
      
    
    </>
  )
}

export default ContactUs
