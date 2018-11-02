import React,{Component} from 'react';
import '../components/SkillCard.css';


class SkillCard extends Component{
        render(){
            const {skill}=this.props
        return(
            <div className="card" style={{display:'flex', justifyContent:'center',
            alignItems:' center',backgroundColor:this.props.bgColorCard}}>
                  <div className="image-wrapper" style={{width:"60%"}}>
                    <img src={skill.content.image} alt={skill.content.alt} />
                  </div>
                  <div className="skill-title-wrappr" style={{textAlign:"center"}}>
                    <h4>{skill.content.title}</h4>
                  </div>
                </div>
        )
    }
}
export default SkillCard