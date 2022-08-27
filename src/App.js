import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage,Buy,Product} from "./pages";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  delay: 200,duration: 400,
});
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
