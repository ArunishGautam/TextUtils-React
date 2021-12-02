import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //   console.log("Upparcase was Clicked");
          let newText=text.toUpperCase()
          settext(newText);
          props.showalert("Converted to Uppercase","success")
    }
    const handleDownClick = () => {
        // console.log("Lowercase was Clicked");
        let newText=text.toLowerCase()
        settext(newText);
       props.showalert("Converted to LowerCase","success");
  }
  const handleClearClick = (event) => {
    let newText=""
    settext(newText);
    props.showalert("Clear","success")
}
    const handleOnChange = (event) => {
        // console.log("On Changed");
        settext(event.target.value);
  }
  const handleCopy = (event) => {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied","success")
}
 const handleExtraSpace = (event) => {
     let newtext = text.split(/[ ]+/);
     settext(newtext.join(" "));
     props.showalert("Extra Space Removed","success")
 }
    const [text, settext] = useState("")
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="12" placeholder="Enter The Text Here"></textarea>
            </div>
            <button className="btn btn-primary mx-3 " style={{padding:"10px" }} onClick={handleUpClick}>Convert Upparcase</button>
            <button className="btn btn-primary mx-3" style={{padding:"10px" }} onClick={handleDownClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-3" style={{padding:"10px" }} onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-3" style={{padding:"10px" }} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" style={{padding:"10px" }} onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-4" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the TextBox to Preview it Here"}</p>
        </div>
        </>
    )
}
