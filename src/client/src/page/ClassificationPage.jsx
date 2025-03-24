import Navbar from "../components/Navbar/Navbar";
import InputFile from "../components/InputFile";
import Footer from "../components/Footer/Footer";

function ClassificationPage() {
  return (
    <>
      <Navbar />
      <div className="pt-40 min-h-screen bg-gradient-to-br from-primary/10 to-primary/30">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6">Classification Page</h2>
          <InputFile />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClassificationPage;
