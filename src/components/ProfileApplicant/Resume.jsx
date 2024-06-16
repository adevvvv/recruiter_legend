import styles from './ProfileApplicant.module.scss';
import { ButtonWithChain } from '../Common/buttons.jsx';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      // Здесь можно добавить логику для обработки файла
    }
  };

  const navigate = useNavigate();

  const goToAnketa = () => {
    navigate('/anketa');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles['containerResume']}>
        <h1>У вас еще нет резюме</h1>
        <div>
          <button onClick={goToAnketa} style={{ marginBottom: '20px' }}>
            Добавить
          </button>

          <div onClick={handleButtonClick}>
            <ButtonWithChain
              text={'Прикрепить'}
              color={'#5775CD'}
              background={'#FFF'}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <p style={{ fontSize: '10px' }}>
          {fileName && <p>Добавленный файл: {fileName}</p>}
        </p>
      </div>
    </div>
  );
};

export default Resume;
