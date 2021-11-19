import {Row, Col, Container} from "react-bootstrap"
import "./comingsoon.css"

const ComingSoon = () => {
    return (
        <Container fluid style={{height: '100vh'}}>
            <Row style={{height: '100%'}}>
                <Col md={12} style={{padding: '0', height: '100%'}}>
                    <div className="comingsoon-img" 
                        style={{
                            backgroundColor: '#101010', 
                            color: '#fff',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <h1 id="comingsoon" className="glow">Coming Soon</h1>
                        <h3 className="sub_glow">We are working hard to bring you the best experience. Please stay tune</h3>
                    
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ComingSoon
