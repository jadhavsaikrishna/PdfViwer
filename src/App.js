import React from "react";
import PdfViewer from "./PdfViewer";

const App = () => {
  const apiKey = "db971619ef334d3bbc87d4367d9cf354";
  const pdfUrl =
    "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf";

  return <PdfViewer apiKey={apiKey} pdfUrl={pdfUrl} />;
};
export default App;
