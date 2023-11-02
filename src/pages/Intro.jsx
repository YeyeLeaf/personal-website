
import meImg from "../assests/96363453_2633095043636487_5050062670221279232_o.jpg";
import meImg1 from "../assests/101659753_311876753144226_7036789540622696448_n.jpg";
import Tag from "../components/Tag.jsx";
import "../style/basis.css";
import "../style/intro.css";

function Intro(){
    const skills = ["HTML", "CSS", "Javascript", "Vue.js", "C#", "C++", "C", "Project Management", "Leadership"];
    const interests = ["Web Design", "Music", "APP Design", "Animation"];
    return (
        <>
            <div class="flex intro">
                <div>
                    <img src={meImg} alt="Leaf" width="300px" height="300px"/>
                    <h2>許晏綾<span>YeyeLeaf</span></h2>
                </div>
                    <div>
                    <h3>Self-Introduction</h3>
                    <p>大家好，這裡是葉子。</p>
                    <h3>Experience</h3>
                    <p>2022~2023 NCKU GDSC Web Design Team Member</p>
                    <p>2022~ NCKU FEED PM</p>
                    <p>2023~ NCKU GDSC Activities Department Core Member | Web Design Team Member</p>
                    <p>2023~ NCKU CCEPSA President</p>
                    <p>2023~ NCKU Bike Festival Team Member</p>
                    <h3>Skills</h3>
                    <div>
                        {skills.map((element, index) => (
                            <Tag key={index} text={element} />
                        ))}
                    </div>
                    <h3>Interests</h3>
                    <div>
                        {interests.map((element, index) => (
                            <Tag key={index} text={element} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;