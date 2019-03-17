import {BaseReactComponent} from "../base-react-component";
import React from "react";

import CharityCard from '../charity-card';
import Button from '@material-ui/core/Button';
import './style.css';

export class CharityList extends BaseReactComponent {
    filterState() {
        return {};
    }

    render() {
        return (
            <ul className="charity-list__list">
                <li className="charity-list__item">
                    <CharityCard
                        title="Aga Khan Foundation Canada"
                        blurb="The Aka Khan Foundation is a private, not-for-profit international development agency, which was
                        founded in 1967 by Prince Shah Al Hussaini, Aga Khan IV."
                        image="/images/Mad.jpg"
                        cdLink="https://www.charitydata.ca/charity/aga-khan-foundation-canada--fondation-aga-khan-canada/100072586RR0001/"
                    />
                    <section className="charity-list__details">
                        <div className="charity-list__detail-block">
                            <h2>Programs</h2>
                            <p>
                                AKFC's work covers two core lines of activity:
                                programming related to international development,
                                and the acquisition and development of properties
                                used for charitable purposes. Both of these
                                areas are supported by separate funding streams.
                                It also offers an International Fellowship
                                Program for Young Canadians and other programs
                                enabling Canadians to serve in the developming
                                world, and a robust public engagement and professional
                                learning program to raise awareness and
                                encourage discussion about Canada's role in an
                                interdependent world.

                            </p>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Charity Data</h2>
                            <img alt="" src="/images/AKFC.png" className="graph"/>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Projects</h2>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/integrated-newborn-care-kit-inck/">Integrated New Born Care Kit</a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="hard"/>
                            </div>
                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/improving-access-maternal-newborn-health-mwanza-tanzania-impact/">Improving Access to Maternal and Newborn Health in Mwanza, Tanzania </a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="medium"/>
                            </div>

                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/enhancing-employability-leadership-youth-eely/">Enhancing Employability And Leadership For Youth </a>
                            </span>
                            <div className="bar">
                                <div className="easy"/>
                            </div>
                            <div className="donate-button">
                                <Button variant="contained">Donate to a Project</Button>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="charity-list__item">
                    <CharityCard
                        title="Rimoka Housing Foundation"
                        blurb="Retirement home in Ponoka, Alberta"
                        image="http://www.rimokahousing.ca/images/banners/golden-pic.png"
                        cdLink="https://www.charitydata.ca/charity/rimoka-housing-foundation/132866971RR0001/"
                    />
                    <section className="charity-list__details">
                        <div className="charity-list__detail-block">
                            <h2>Programs</h2>
                            <p>
                                PROVIDING LODGE SERVICES FOR SENIORS IN OUR SERVICE AREA
                            </p>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Charity Data</h2>
                            <img alt="" src="/images/rimoka.png" className="graph"/>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Projects</h2>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/integrated-newborn-care-kit-inck/">Integrated New Born Care Kit</a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="hard"/>
                            </div>
                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/improving-access-maternal-newborn-health-mwanza-tanzania-impact/">Improving Access to Maternal and Newborn Health in Mwanza, Tanzania </a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="medium"/>
                            </div>

                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/enhancing-employability-leadership-youth-eely/">Enhancing Employability And Leadership For Youth </a>
                            </span>
                            <div className="bar">
                                <div className="easy"/>
                            </div>
                            <div className="donate-button">
                                <Button variant="contained">Donate to a Project</Button>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="charity-list__item">
                    <CharityCard
                        title="Inner City Youth Alive"
                        blurb="ICYA provides a safe, active and nurturing environment for children and youth, many of whom experience poverty, abuse and neglect."
                        image="/images/icya.jpg"
                        cdLink="https://www.charitydata.ca/charity/inner-city-youth-alive-inc/132799495RR0001/"
                    />
                    <section className="charity-list__details">
                        <div className="charity-list__detail-block">
                            <h2>Programs</h2>
                            <p>
                                The Bridge Drop-in Centre-Staff and volunteers role model and interact with inner city youth.
                                Camp Program-Staff and volunteers accompany inner city youth to a remote camp to learn skills
                                and have fun. Community Ministry Program-Staff and volunteers minister to community member and
                                their families.
                            </p>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Charity Data</h2>
                            <img alt="" src="/images/IYCA.png" className="graph"/>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Projects</h2>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/integrated-newborn-care-kit-inck/">Integrated New Born Care Kit</a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="hard"/>
                            </div>
                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/improving-access-maternal-newborn-health-mwanza-tanzania-impact/">Improving Access to Maternal and Newborn Health in Mwanza, Tanzania </a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="medium"/>
                            </div>

                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/enhancing-employability-leadership-youth-eely/">Enhancing Employability And Leadership For Youth </a>
                            </span>
                            <div className="bar">
                                <div className="easy"/>
                            </div>
                            <div className="donate-button">
                                <Button variant="contained">Donate to a Project</Button>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="charity-list__item">
                    <CharityCard
                        title="Thunder Bay Literacy Group"
                        blurb="The Thunder Bay Literacy Group, formed in 1983, is a non-profit community-based organization
                        which is governed by a volunteer Board of Directors."
                        image="https://www.tblg.org/application/files/5314/8233/0275/scrabble.jpg"
                        cdLink="https://www.charitydata.ca/charity/thunder-bay-literacy-group/131689143RR0001/"
                    />
                    <section className="charity-list__details">
                        <div className="charity-list__detail-block">
                            <h2>Programs</h2>
                            <p>
                                One on one literacy/numeracy training for adults. Small group literacy classes for adults and
                                computer training for adults.
                            </p>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Charity Data</h2>
                            <img alt="" src="/images/thunderBay.png" className="graph"/>
                        </div>
                        <div className="charity-list__detail-block">
                            <h2>Projects</h2>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/integrated-newborn-care-kit-inck/">Integrated New Born Care Kit</a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="hard"/>
                            </div>
                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/improving-access-maternal-newborn-health-mwanza-tanzania-impact/">Improving Access to Maternal and Newborn Health in Mwanza, Tanzania </a>
                            </span>
                            <br/>
                            <div className="bar">
                                <div className="medium"/>
                            </div>

                            <br/>
                            <span className="head">
                                <a href="https://www.akfc.ca/our-work/enhancing-employability-leadership-youth-eely/">Enhancing Employability And Leadership For Youth </a>
                            </span>
                            <div className="bar">
                                <div className="easy"/>
                            </div>
                            <div className="donate-button">
                                <Button variant="contained">Donate to a Project</Button>
                            </div>
                        </div>
                    </section>
                </li>
            </ul>
        );
    }
}
