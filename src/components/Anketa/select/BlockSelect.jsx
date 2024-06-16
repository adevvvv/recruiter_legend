const BlockSelect = ({
  id,
  date,
  width,
  title,
  marginTop = '0',
  handleChange,
}) => {
  return (
    <div style={{ marginTop: marginTop }}>
      <label>{title}</label>
      <br />
      <select
        name={id}
        onBlur={handleChange}
        style={{ width: `${width}` }}
        id={id}
      >
        {date.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BlockSelect;
