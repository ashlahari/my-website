

export const SkillsCard = (props: any) => {
    return (
        <div className="cardDiv">
            <img 
                className="cardImgDiv"
                src={require(`../../assets/images/logos/${props.image}`)} 
                alt={props.title} 
            />
        </div>
    );
}; 

export default SkillsCard;