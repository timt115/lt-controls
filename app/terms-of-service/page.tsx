export default function TermsOfService() {
  return (
    <>
      <head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and Conditions for using our service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Terms and Conditions for using our service."
        />
        <meta name="keywords" content="terms, conditions, service" />
        <meta name="author" content="LT-Controls" />
        <meta name="robots" content="index, follow" />
      </head>
      <div className="pdf-container" style={{ height: "100vh", width: "100%" }}>
        <iframe
          src="/Terms and Conditions.pdf"
          title="PDF Viewer"
          style={{ height: "100%", width: "100%", border: "none" }}
        ></iframe>
      </div>
    </>
  );
}
