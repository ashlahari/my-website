import React, { useState, useEffect, useRef } from 'react';
import { useMenu } from './menuContext';
import { Button } from 'primereact/button';
import { Intro } from '../introComponents/intro';
import { About } from '../aboutComponents/about';

export const StickyMenu = () => {
    const { isMenuVisible } = useMenu();
    const introRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const scrollToIntro = () => {
        if (introRef.current) {
          introRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToAbout = () => {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="stickyMenuDiv">
                <div className={`sticky-menu ${isMenuVisible ? 'visible' : 'hidden'}`}>
                    <nav style={{ height: '100%', width: '100%' }}>
                        <ul>
                            <li>
                                <Button 
                                    icon="pi pi-home" 
                                    className="buttonStyle" 
                                    tooltip="Home"
                                    style={{
                                        height: '35px',
                                        width: '35px'
                                    }}
                                    tooltipOptions={{
                                        className:'toolTipOptions'
                                    }}
                                    onClick={() => scrollToIntro()}
                                >
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon="pi pi-question" 
                                    className="buttonStyle" 
                                    tooltip="About"
                                    style={{
                                        height: '35px',
                                        width: '35px'
                                    }}
                                    tooltipOptions={{
                                        className:'toolTipOptions'
                                    }}
                                    onClick={() => scrollToAbout()}
                                >
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon="pi pi-building" 
                                    className="buttonStyle" 
                                    tooltip="Education"
                                    style={{
                                        height: '35px',
                                        width: '35px'
                                    }}
                                    tooltipOptions={{
                                        className:'toolTipOptions'
                                    }}
                                >
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon="pi pi-cog" 
                                    className="buttonStyle" 
                                    tooltip="Skills"
                                    style={{
                                        height: '35px',
                                        width: '35px'
                                    }}
                                    tooltipOptions={{
                                        className:'toolTipOptions'
                                    }}
                                >
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    icon="pi pi-id-card" 
                                    className="buttonStyle" 
                                    tooltip="Resume"
                                    style={{
                                        height: '35px',
                                        width: '35px'
                                    }}
                                    tooltipOptions={{
                                        className:'toolTipOptions'
                                    }}
                                >
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div ref={introRef}>
                <div><Intro /></div>
            </div>

            <div ref={aboutRef}>
                <div><About /></div>
            </div>
        </div>
    );
};

export default StickyMenu;