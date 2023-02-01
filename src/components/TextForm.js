import React, { useState } from "react";
import './TextForm.css'

export default function TextForm(props) {
  const clicke = () => {
    console.log("UC was clicked");
    let t = text.toUpperCase();
    setText(t);
    props.showAlert("Converted to upper-case","Success");
  };
  const clicku = () => {
    if(text.length>0){
    console.log("UC was clicked");
    let t = text.toLowerCase();
    setText(t);
    props.showAlert("Converted to lower-case","Success");
    }
    else{
      props.showAlert("Write something on the board first","Success");
    }
  };
  const clickerase = () => {
    console.log("erase was clicked");
    props.showAlert("Erased everything from text-box","Success");
    //  let t = text.reverse();
    setText("");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Done speaking","Success");
  }

  

  const clpbrd = () => {
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","Success");
  }

  const onch = (event) => {
    console.log("OC");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("WRITE NOW< JUST START!");
  return (
    <>
    <div className="container my-3" style={{color:props.mode ==='light'?'grey':'white'  }}>
      <h1 className="h1-light">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={onch}
          value={text}
          rows="7"
          style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='light'?'grey':'white'  }}
        ></textarea>
      </div>
      <button className="btn btn-primary my-2" onClick={clicke} disabled={text.length===0}>
        convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={clicku} disabled={text.length===0}>
        convert to lowercase
      </button>
      <button className="btn btn-primary my-2" onClick={clickerase} disabled={text.length===0}>
        Clear Text
      </button>
      <button
      disabled={text.length===0}
        type="submit"
        onClick={speak}
        className="btn btn-primary mx-2 my-2">
        Speak
      </button>
      <button
        type="submit"
        onClick={clpbrd}
        className="btn btn-primary my-2" disabled={text.length===0}>
        copy
      </button>
      <div className="container my-3">
        <h2>Summary of my text</h2>
        <p>
          Words: {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length}, characters: {text.length}
        </p>
        <p>Doc Readable in Min: {0.008 * (text.split(" ").filter((element)=>{ return element.length!==0}).length)}</p>
      </div>
      </div> 
    </>
  );
}
