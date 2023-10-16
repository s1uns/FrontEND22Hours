import ParallaxOne from "./components/ParallaxOne";
import ParallaxTwo from "./components/ParallaxTwo";
import ParallaxThree from "./components/ParallaxThree";
import TextBox from "./components/TextBox";

function App() {
    return (
        <div>
            <ParallaxOne />
            <TextBox />
            <ParallaxTwo />
            <TextBox />
            <ParallaxThree />
        </div>
    );
}

export default App;
