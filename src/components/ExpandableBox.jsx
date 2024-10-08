import '../styles/expandable_box.css'

function ExpandableBox(props) {
    return (
        <div id="expandable-box">
            <input type="checkbox" id="toggle"></input>
            <label htmlFor="toggle" id="box-header">
                <h3 id="main-paragraph-title">
                    {props.title}<span id={props.span_color}>{props.span_text}</span>
                </h3>
              <span id="arrow">&#9658;</span>
            </label>
            <div id="box-content">
                <div id="main-paragraph-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default ExpandableBox