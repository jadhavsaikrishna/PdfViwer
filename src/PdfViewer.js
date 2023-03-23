import React, { useRef, useEffect } from "react";

const PdfViewer = ({ apiKey, pdfUrl }) => {
  const viewerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://documentservices.adobe.com/view-sdk/viewer.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.AdobeDC) {
        const adobeDCView = new window.AdobeDC.View({
          clientId: apiKey,
          divId: viewerRef.current.id
        });
        adobeDCView.previewFile({
          content: {
            location: {
              url: pdfUrl
            }
          },
          metaData: {
            fileName: "Sample.pdf"
          }
        },
        { embedMode: "FULL_WINDOW",
         defaultViewMode: "FIT_PAGE",
          showAnnotationTools: true, 
          showDownloadPDF: true },
          {
            enableLinearization: true,
          }
        );
      }
    };
    document.body.appendChild(script);
  }, [apiKey, pdfUrl]);

  return <div id="adobe-dc-view" style={{height: "550px", width: "1300px"}} ref={viewerRef}></div>;
};

export default PdfViewer;
