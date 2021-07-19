import React from 'react'
import {Row, Col, Tab, Nav} from "react-bootstrap"
import styles from "../../styles/profile.module.css"




export default function Profile(props) {

    const data = JSON.parse(localStorage.getItem('profile'))

    return (
        <section className={styles.profileSection}>
            <div className={styles.profileHeader}>
                <div>
                    <img src={data[0]?.picture} alt="" />
                </div>
                <div className={styles.profileAddress}>
                    <div>
                        <h2>{data[0]?.name}</h2>
                        <p>{data[0]?.role}</p>
                        <p>
                            Email: {data[0]?.email}
                        </p>
                        <p>Phone: {data[0]?.phone_no}</p>
                        <p>Locations: {data[0]?.office_location}</p>
                    </div>
                    <div>
                        socials
                    </div>
                </div>
            </div>
            <div className={styles.profileBio}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Biography</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Practice Areas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Admissions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Publications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        <p>
                                            {data[0]?.biography}
                                        </p>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    )
}
