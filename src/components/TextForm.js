import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const chageToUP = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Changed to Uppercase', 'success')
    }
    const chageToLow = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Changed to Lowercase', 'success')
    }
    const chageClear = () => {
        let newText = ''
        setText(newText)
        props.showAlert('Text cleared', 'success')
    }
    const copyAll = () => {
        let copyText = document.getElementById('myform')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert('Text copied to clipboard', 'success')
    }
    const extraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Removed extra spaces', 'success')
    }

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="myform" className="form-label">{props.heading}</label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myform" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={chageToUP}>Change To UpperCase</button>
                        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={chageToLow}>Change To LowerCase</button>
                        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={chageClear}>Clear Texts</button>
                        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={copyAll}>Copy Texts</button>
                        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={extraSpaces}>Remove Extra Spaces</button>
                    </div>
                </div>
                <h2>Text Summery</h2>
                <table className={`table table-${props.mode}`}>
                    <thead>
                        <tr>
                            <th scope="col">Number of Words</th>
                            <th scope="col">Number of Charachers</th>
                            <th scope="col">Number of Sentances</th>
                            <th scope="col">Number of Charachers per Word</th>
                            <th scope="col">Number of Words per Sentence</th>
                            <th scope="col">Number of Paragraphs</th>
                            <th scope="col">Number of Sentances per Paragraph</th>
                            <th scope="col">How much Time to read (in minumtes)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{text.split(' ').filter((i)=>{return i.length !== 0}).length}</td>
                            <td>{text.length}</td>
                            <td>{text.split('.').length - 1}</td>
                            <td>{(text.length) / (text.split(' ').length)}</td>
                            <td>{(text.split(' ').length) / (text.split('.').length - 1)}</td>
                            <td>{text.replace(/\n$/gm, '').split(/\n/).filter((i)=>{return i.length !== 0}).length}</td>
                            <td>{(text.split('.').length - 1) / (text.replace(/\n$/gm, '').split(/\n/).length)}</td>
                            <td>{0.008 * text.split(' ').filter((i)=>{return i.length !== 0}).length}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Perview</h2>
                <p>{text.length > 0 ? text : 'Nothing to perview'}</p>
            </div>
        </>
    )
}