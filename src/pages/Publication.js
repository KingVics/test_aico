import React from 'react'
import { useParams } from "react-router-dom"
import styled from "styled-components/macro"
import "../../src/App.css"



const Section = styled.section `
    background: #fff;
`
const Wrapper  =  styled.div `
`



const Publication = () => {
    const { id } = useParams()
    
    return (
        <Section>
            <Wrapper>
                <div style={{marginTop: '-85px'}}>
                    <iframe title="doc" src={id === '1' ? "https://docs.google.com/document/d/1GSE8z9ryrm-MWVtsRbFW12Fh9ztfP0qZ/edit?usp=sharing&ouid=117980361442768312016&rtpof=true&sd=true" : id === "2" ? "https://docs.google.com/document/d/11mWAmqViwRH4PQZiJTq2w5dIn9Z0zwmI/edit?usp=sharing&ouid=117980361442768312016&rtpof=true&sd=true" : id === "3" ? "https://docs.google.com/document/d/1zlVLsHhA3heqkeZ-QnLuoFq3sQWoF29o/edit?usp=sharing&ouid=117980361442768312016&rtpof=true&sd=true" : "https://docs.google.com/document/d/1ubUy13PcbNlndiXpAnNfP6KRHZ3_h2vc/edit?usp=sharing&ouid=117980361442768312016&rtpof=true&sd=true"} style={{width: '100%', height: '100vh'}}></iframe>
                </div>
            </Wrapper>
        </Section>
    )
}

export default Publication;
