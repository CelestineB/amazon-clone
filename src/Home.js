import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-02-Start--af484eea-e58d-4921-9dd6-ab26b7dd6152._CB428137687_QL85_V1_.jpg"
        alt=""
        className="home__image"
      />
      <div className="home__row">
        {/* product id, title, price, rating,image */}
        <Product
          id={1234}
          title="The best selling on the store"
          price={11.99}
          rating={4}
          image="https://k.nooncdn.com/t_desktop-pdp-v1/v1565108244/N28945149A_1.jpg"
        />
        <Product
          id={1235}
          title="The best selling on the store"
          price={11.99}
          rating={5}
          image="https://k.nooncdn.com/t_desktop-pdp-v1/v1565108244/N28945149A_1.jpg"
        />
      </div>
      <div className="home__row">
        {/* product id, title, price, rating,image */}
        <Product
          id={1236}
          title="The best selling on the store"
          price={11.99}
          rating={4}
          image="https://k.nooncdn.com/t_desktop-pdp-v1/v1565108244/N28945149A_1.jpg"
        />
        <Product
          id={1237}
          title="The best selling on the store"
          price={11.99}
          rating={5}
          image="https://k.nooncdn.com/t_desktop-pdp-v1/v1565108244/N28945149A_1.jpg"
        />
        <Product
          id={1238}
          title="The best selling on the store"
          price={11.99}
          rating={3}
          image="https://k.nooncdn.com/t_desktop-pdp-v1/v1565108244/N28945149A_1.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
