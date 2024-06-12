


const BlockSelect = ({ id, date, width, title, marginTop='0'}) => {

    return (
        <div style={{marginTop:marginTop}}>
            <label>{title}</label>
            <br/>
            <select style={{width: `${width}`}} id={id}>
                {
                    date.map((el, i) =>
                        <option key={i} value={el}>{el}</option>
                    )
                }
            </select>
        </div>
    )
}

export default BlockSelect;
