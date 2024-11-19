import skillsData from '../../assets/api/skills'
import CarrerItem from './careerItem';
import SkillsList from './SkillsList';
import { CareerListContainer } from './styled';

const CareerList = () => {
    return (
        <>
            <CareerListContainer className='list-wrap'>
               {
                   skillsData.map(item => <CarrerItem key={item.id} {...item}/>)
                }
            </CareerListContainer>
            <SkillsList/>
        </>
    );
};

export default CareerList;