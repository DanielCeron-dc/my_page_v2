import React from 'react';
import { Document, pdfjs, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer: React.FC = () => {

    return <div style={{
        position: "absolute",
        justifySelf: "center",
    }}>
        <Document file={"./cv.pdf"}   >
            <Page pageIndex={0} width={1000} />
        </Document>;
    </div>


}
export default PdfViewer;