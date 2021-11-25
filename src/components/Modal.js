import React, { Modal } from "react-bootstrap"
import  "../styles/modal.css"

const ModalComponent = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} fullscreen={true} scrollable={true} size='xl'>
            <Modal.Header closeButton>
                <Modal.Title>Alhaji Abdullahi Ibrahim Bio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Alhaji Abdullahi Ibrahim, CON, SAN was called to the English Bar in 1963. He practiced in chambers in England before returning to Nigeria where he was called to the Nigerian Bar in 1964. He served at various times as Legal Adviser and Senior State Counsel in the defunct Northern Region of Nigeria. He entered private practice in 1973 as Managing Partner of Abdullahi Ibrahim and Company. 
                </p>
                <p>
                    Alhaji Ibrahim was a Legal Adviser and later Chairman of New Nigeria Development Company Limited (NNDC). Over the years, he brought his wealth of experience and knowledge to bear as he held various board appointments in public and private bodies, as well as serving on several tribunals and panels of inquiry. 
                </p>
                <p>
                    In 1982 he was admitted to the Inner Bar as a Senior Advocate of Nigeria and became the first Senior Advocate of Nigeria from the Northern Nigeria. He was a life bencher and Chairman of the Body of Benchers from 1999-2001. He was a Notary Public, a Fellow of the Chartered Institute of Arbitrators, a member of the Permanent Court of Arbitration at The Hague and Chairman of the Nigerian Bar Association - Legal Practitioners Disciplinary Committee. 
                </p>
                <p>
                    Alhaji Ibrahim served the nation and at various times he held cabinet positions as Federal Minister of Education, Federal Minister of Science and Technology and Federal Minister for Transport and Aviation. He also served as the nation’s Chief Law Officer – Attorney General of the Federation and the Minister of Justice of Nigeria from 1997 – May 1999.  
                </p>
                <p>
                    He was appointed a Commissioner for International - National Boundary Commission, and was a member of the Nigerian team that negotiated the Maritime Boundary Treaty between Nigeria and the Republic of Equatorial Guinea and the Unitization Agreement of the Zafiro/Ekanga Oil Fields.  
                </p>
                <p>
                    He was the agent and later co-agent in the dispute between the Federal Republic of Nigeria and the Republic of Cameroon at the International Court of Justice at The Hague, and a member of the Permanent Court of Arbitration at The Hague.
                </p>
                <p>
                    He was conferred with La Medalla de Gran Cruz de la Orden de la Independencia de Guinea Equatorial for his service to Nigeria and the Republic of Equatorial Guinea. Again, in acknowledgment for his service to the nation, he was conferred with the national honours of Officer of the Federal Republic of Nigeria (OFR) and Commander of the Niger (CON).   
                </p>
                <p>
                    Alhaji Abdullahi Ibrahim CON, SAN was an accomplished legal practitioner, arbitrator and administrator until his passing on 24th January 2021 at the age of 82 years.  
                </p>
            </Modal.Body>
        </Modal>
    
    )
}

export default ModalComponent
