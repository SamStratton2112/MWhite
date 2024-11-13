import { SkillContainer } from "./SkillContainer";
import mike from '../../data'
import Footer from '../Footer';

/** Displays all skills with coresponding details. */

const Skills = ()=>{
    const skills = mike.skills;
    const allSkills = [];

    for(let skill in skills){
        allSkills.push(<SkillContainer allVideos={skills[skill].videos} name={skills[skill].name} allImages={skills[skill].images}/>)
    }
    
    return(<>
        {allSkills}
        <Footer/>
    </>)
}

export default Skills;