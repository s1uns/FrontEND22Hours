import logo from "./logo.svg";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./assets/pizzas.json";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">
                        {pizzas.map((item) => {
                            return (
                                <PizzaBlock
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    types = {item.types}
                                    sizes={item.sizes}
                                ></PizzaBlock>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
