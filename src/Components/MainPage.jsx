import { useState } from "react";

const MainPage = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Congratulations! Converted to Upper Case.","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Congratulations! Converted to Lower Case.","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Congratulations! Text cleared.","success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
      let text = document.getElementById("Box");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Congratulations! Text copied to clipboard.","success");
  } 
  const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Congratulations! Extra space removed.","success");
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#021328'}}>
        <h5 className="my-3" >{props.heading}</h5>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="Box"
            rows="10"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#021328':'white',color: props.mode==='dark'?'white':'#021328'}}
            value={text}
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          className="btn btn-dark btn-sm my-1 mx-1"
          type="submit"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-dark btn-sm my-1 mx-1"
          type="submit"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-dark btn-sm my-1 mx-1"
          type="submit"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-dark btn-sm my-1 mx-1"
          type="submit"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-dark btn-sm my-1 mx-1"
          type="submit"
          onClick={handleExtraSpace}
        >
          Remove Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#021328'}}>
        <div className="card p-3" style={{border: props.mode==='dark'?'2px solid white':'1px solid #021328'}}>
          <h5>Text Summary</h5>
          <hr />
            <p>
              {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
            </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} =Taken Time For Read In Minutes</p>
        </div>
        <hr />
        <div className="card p-3" style={{border: props.mode==='dark'?'2px solid white':'1px solid #021328'}}>
          <h5>Preview</h5>
          <hr />
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
};
export default MainPage;
