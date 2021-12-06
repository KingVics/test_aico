import { useState } from "react";
import { Document, pdfjs, Page } from "react-pdf"
//PDFjs worker from an external cdn
    const url = 
    "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"



const Pdf = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js`;
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

    
    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
    
    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    
    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    
    function previousPage() {
        changePage(-1);
    }
    
    function nextPage() {
        changePage(1);
    }

    return (
        <>
        <div className="main">
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <div className="pagec">
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </div>
                <div className="buttonc">
                <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                className="Pre"
                    
                >
                Previous
                </button>
                <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                
                >
                Next
                </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Pdf
