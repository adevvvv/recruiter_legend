const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="nameCompany">Название компании </label>
          <input
            onBlur={handleChange}
            style={{ width: '296px' }}
            name={'nameCompany'}
            type="text"
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="startDate">Устроился </label>
            <input onChange={handleChange} name={'startDate'} type="date" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="endDate">Уволился </label>
            <input onChange={handleChange} name={'endDate'} type="date" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <input
              onChange={handleChange}
              name={'currentlyWorking'}
              type="checkbox"
            />
            <label htmlFor="currentlyWorking">Настоящее время</label>
          </div>
        </div>
      </div>

      <div
        style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}
      >
        <label htmlFor="post">Должность </label>
        <input
          onBlur={handleChange}
          style={{ width: '773px', height: '31px' }}
          name={'post'}
          type="text"
        />

        <label htmlFor="responsibilities">Обязанности </label>
        <input
          onBlur={handleChange}
          style={{ width: '773px', height: '67px' }}
          name={'responsibilities'}
          type="text"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
