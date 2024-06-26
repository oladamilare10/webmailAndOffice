import React from 'react'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import TestPdf from '../assets/ReworkEng.PDF'

const PDFView = () => {
  return (
    <div className="App">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            
        </Worker>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div id="pdfviewer" style={{ height: '100vh' }}>
                <Viewer fileUrl={TestPdf} />
            </div>
        </Worker>
    </div>  
  )
}

export default PDFView
