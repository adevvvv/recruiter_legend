

const BlockInput = ({id, title, type, width}) => {

    return (
        <div >
            <label htmlFor={id}>{title}</label>
            <br/>
            <input style={{width: `${width}`}} id={id} type={type}/>
        </div>
    )
}

export default BlockInput;
