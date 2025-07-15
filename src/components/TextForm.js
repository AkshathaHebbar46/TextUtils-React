import React,{useState} from 'react'
import './TextForm.css';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
   const handleItalicClick = () => {
    setIsItalic(!isItalic);
    props.showAlert("Converted to Italic","success");
  }
  const handleClearClick = () => {
    let newText = ("");
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed","success");
  }
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  }
  
    const [text, setText] = useState('');
    const [isItalic, setIsItalic] = useState(false);
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea
            className={`form-control ${isItalic ? 'italic-textarea' : ''}`}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:(props.mode==='dark'||props.mode2==='danger')?'#8a8a81ff':'white',
                    color:(props.mode==='dark'||props.mode2==='danger')?'white':'black'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleItalicClick}>Convert to Italic</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
        
        <div className="container my-3">
        <h2> Your text summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0?text: "Enter something in the textbox above to preview it here"} {isItalic ? <em>{text}</em> : text}</p>
    </div>
    </div>
    
    </>
  )
}
