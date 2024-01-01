import { Card } from 'primereact/card';

export const SkillsCard = (props: any) => {
    const header = (
        <img alt="Card" src="/src/assets/images/c_sharp_logo.png" />
    );

    return (
        <div className="cardDiv">
            <Card title={props.title} header={header} className="skillsCard">
                <p className="m-0">
                    Years of Experience: {props.years} 
                </p>
            </Card>
        </div>
    );
}; 

export default SkillsCard;