import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export const Intro = () => {
    return (
        <div className="intro">
            <div className="p-grid">
                <div className="p-col-6 introName">
                    Hi, I'm Aishwarya
                </div>
                <div className="p-col-6 introDev">
                    I'm a Web Developer
                </div>
            </div>
        </div>
    )
};

export default Intro;