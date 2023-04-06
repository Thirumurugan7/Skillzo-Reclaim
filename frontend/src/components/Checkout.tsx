import Main from "./Main";
import { Navbar } from "./Navbar";
import Toaster from "./Toaster";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Main />

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -z-10">
        <h3 className="text-xl text-white text-opacity-70 w-full whitespace-nowrap">
          Made with 💙 by Akatsuki
        </h3>
      </div>

      <Toaster />
    </>
  );
};

export default Checkout;
