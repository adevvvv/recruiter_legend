

const BlockInput = ({id, title, type, width, marginTop='0'}) => {

    return (
        <div style={{marginTop:marginTop}}>
            <label htmlFor={id}>{title}</label>
            <br/>
            <input style={{width: `${width}`}} id={id} type={type}/>
        </div>
    )
}

export default BlockInput;
