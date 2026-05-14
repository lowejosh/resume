import Resume from "./components/Resume";

export default function App() {
  return (
    <>
      <div className="toolbar" aria-hidden="true">
        <button
          className="download-btn"
          onClick={() => window.print()}
          aria-label="Download resume as PDF"
        >
          ↓ Download PDF
        </button>
      </div>
      <Resume />
    </>
  );
}
