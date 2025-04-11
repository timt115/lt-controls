export default function TermsOfService() {
    return (
      <div className="pdf-container" style={{ height: "100vh", width: "100%" }}>
        <iframe
          src="/Terms and Conditions.pdf"
          title="PDF Viewer"
          style={{ height: "100%", width: "100%", border: "none" }}
        ></iframe>
      </div>
    );
  }