import Typewriter from 'typewriter-effect';

const ProjectLeftbar = () => {

    return (
        <div className="Main_sidebar">
            {/* <span>PORTFOLIO</span> */}
            <Typewriter options={{
                strings : ['PROTFOLIO' , 'GYU_RI'],
                autoStart: true,
                loop: true,
            }}/>
            <div className="me"></div>
        </div>
    );
};

export default ProjectLeftbar;