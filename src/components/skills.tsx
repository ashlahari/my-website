import { Carousel } from 'primereact/carousel';
import { SkillsCard } from '../components/skillsCard';
        
export const Skills = () => {

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const mySkills = [
        {
            title: 'C#',
            cardImg: '/assets/images/c_sharp_logo.png',
            years: 3,
        },
        {
            title: 'ASP .NET',
            cardImg: '/assets/images/asp.net-logo.png',
            years: 3,
        },
        {
            title: 'MS SQL Server',
            cardImg: '/assets/images/microsoft-sql-server-logo.png',
            years: 3,
        },
        {
            title: 'React',
            cardImg: '/assets/images/react-logo.png',
            years: 1,
        },
        {
            title: 'React',
            cardImg: '/assets/images/react-logo.png',
            years: 1,
        },
    ]

    const carouselTemplate = (skill: any) => {
        return(
            <SkillsCard
                title={skill.title}
                cardImg={skill.cardImg}
                years={skill.years}
            />
        );
    }
    return (
        <div className="pageDiv">
            <div className="skills">Skills</div>
            <div className="skillsCarousel">
                <Carousel value={mySkills} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={carouselTemplate} /> 
            </div>
        </div>
    );
};

export default Skills;