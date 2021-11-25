import React from "react"
import {Row, Col} from "react-bootstrap"
import style from "../../../../styles/contact.module.css"

import {Address} from "../../Components/Addresses/Components/data"

const Addresses = () => {

    return (
        <div className={style.adressContainer}>
            <Row className={style.adressContainerRow}>
                {Address.map((item) => (
                    <Col sm={6} md={6} lg={4} xl={4}  className={style.adressContainerRow}>
                        <div  key={item.id} className={style.adressContainerWrapper}>
                            {item.image}
                            <div >
                                <h3>{item.header}</h3>
                                <p>
                                    {item.address}
                                </p>
                                <p>
                                {item.phone}
                                </p>
                                <p>
                                    {item.email}
                                </p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Addresses
