import { Blog, Footer, Header, Services } from "./components";

function App() {
  return (
    <>
      <main className="overflow-x-hidden relative flex flex-col items-center">
        {/* header */}
        <Header />

        {/* services */}
        <Services />

        {/* blog */}
        <Blog />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;
