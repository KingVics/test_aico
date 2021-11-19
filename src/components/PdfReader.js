import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={{ url: 'http://example.com/sample.pdf', httpHeaders: { 'X-CustomHeader': '40359820958024350238508234', 'Access-Control-Allow-Origin': "*" }, withCredentials: true }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
        <p>Page {pageNumber} of {numPages}</p>
    </div>
    )
}

export default Pdf;