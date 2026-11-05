import { Outlet } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors antialiased selection:bg-blue-100 dark:selection:bg-blue-900/40">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
