

const BlockInput = ({id, title, type, width, marginTop='0', handleChange}) => {

    return (
        <div style={{marginTop:marginTop}}>
            <label htmlFor={id}>{title}</label>
            <br/>
            <input onBlur={handleChange} style={{width: `${width}`}} name={id} id={id} type={type}/>
        </div>
    )
}

export default BlockInput;
