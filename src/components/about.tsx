import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Row } from 'primereact/row';
import { Column } from 'primereact/column';

export const About = () => {
    var aboutData = require("../userData/about.json");

    return (
        <div className="pageDiv">
            <div className="aboutDiv">
                <Card className="cardStyle">About</Card>
            </div>
            <div className="grid" style={{ marginTop: '10vh'}}>
                <div className="col-12 md:col-6 lg:col-6">
                    <Card className="cardStyle"></Card>
                </div>
                <div className="col-12 md:col-6 lg:col-6 aboutText">
                    <Card className="cardStyle">{aboutData.about}</Card>
                </div>
            </div>
        </div>
    );
};

export default About;