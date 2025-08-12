import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Pookie.css"

const Booknow = () => {

  const navigate = useNavigate();
  const [namew, setname] = useState("")
  const [phone, setphone] = useState("")
  const [cnic, setcnic] = useState("")
  const [cat, setcat] = useState("")
  const [next, setnext] = useState(true)
  const [cros, setcros] = useState(true)


  const ding = (e) => {
    setname(e.target.value)
    if (e.target.value === "Room") {
      console.log("rip")
    }
  }
  const ding2 =()=>{
  // useEffect(() => {
    if (namew === "" || phone === "" || cnic === "" || cat === "") {
      navigate("/booknow")
      setnext("enter values")
    }
    else{
      navigate("/booknow/select")
    }
    setnext(false)
}
 
return (
  <>
    <section>
      <div className="forme">
        <h3 className="title">Book Now</h3>
        <div className='inpute'>
          <div className='flexe'>
            <div className="stare">
              <input type="text" placeholder="Name" value={namew} onChange={ding} />
              <i class="fa-solid fa-star-of-life"></i>
            </div>
            <div className="stare">
              <input type="number" placeholder="Phone" value={phone} onChange={(e) => setphone(e.target.value)} />
              <i class="fa-solid fa-star-of-life"></i>
            </div>
            <div className="stare">
              <input type="number" placeholder="CNIC" value={cnic} onChange={(e) => setcnic(e.target.value)} />
              <i class="fa-solid fa-star-of-life"></i>
            </div>
          </div>
          <div className='flexe'>
            <div className="stare" style={{ marginLeft: "10px" }}>
              <input id='Categary' list='Categaries' placeholder='Categary' value={cat} onChange={(e) => setcat(e.target.value)} />
              <i class="fa-solid fa-star-of-life"></i>
            </div>
            <datalist id='Categaries'>
              <option value="Room">Room</option>
              <option value="Apartment">Apartment</option>
              <option value="Rooftop Dinner">Rooftop Dinner</option>
              <option value="Spa">Spa</option>
              <option value="Gym">Gym</option>
              <option value="Pool">Pool</option>
              <option value="BreakFast">BreakFast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Party">Party</option>
            </datalist>
            <div className="stare" style={{ marginLeft: "10px" }}>
              <input type='date' placeholder='Date' required />
            </div>
            {/* <NavLink to={'/booknow/select'}> */}
              <button
              onClick={ding2}
              class="submite cp">Next <span><i class="fa-solid fa-arrow-right"></i></span></button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </section>
      {!next && (<div className='alert-message'>
        Enter all the fields
      <i onClick={()=>setnext(true)}class="fa-solid fa-xmark"></i>

      </div>)}
  </>
)
}
export default Booknow
