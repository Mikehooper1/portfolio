import React, {useState} from 'react';


export default function ContactForm(props){

  const changeValue = ()=> {
    console.log("You clicked send To change value")
    let newText = text.toUpperCase();
    setText(newText)
  }

const handleOnChange = (event)=> {
 console.log("on change")
 setText(event.target.value)
}


const [text, setText] = useState("Enter Your Message here");


    return(

<>

<h1>{props.heading}</h1>
<div className="mb-3">
  <label form="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label form="exampleFormControlTextarea1" className="form-label">Your Message</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<div>
    <button className="btn btn-primary" onClick={changeValue}>Send</button>
</div>
<div className="container my-3">

    <h1>Your Text Summery</h1>
    <p>{text.split(" ").length } Words and {text.length}words</p>

    </div>
</>

)

}