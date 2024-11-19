import { useEffect, useState } from 'react';
import careerData from '../../../src/assets/api/career';
import Tooltip from '../../components/Tooltip';
import SkillItem from './SkillItem';
import { SkillListContainer } from './styled';

const SkillsList = () => {
  const [tooltip, setTooltip] = useState(true);

  const mouseoverEvent = () => {
    setTooltip(false);
  };

  useEffect(() => {
    setTooltip(true);
  }, []); 

  return (
    <SkillListContainer className='list-wrap'>
      {careerData.map((item) => (
        <SkillItem
          key={item.id}
          {...item} 
          mouseoverEvent={mouseoverEvent} 
        />
      ))}
      
      {tooltip && (
        <Tooltip content={'마우스를 호버하여 자세한 내용을 확인하세요'} />
      )}
    </SkillListContainer>
  );
};

export default SkillsList;
