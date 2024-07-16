import React from "react";
import picture1 from "../../../assets/picture1.jpg";

function HomePage() {
  return (
    <div>
      <div className="flex flex-row justify-between align-center h-15 px-5 py-2">
        <div>
          <p className="text-3xl font-bold">LaptopShop</p>
        </div>
        <div className="flex flex-row justify-around gap-4">
          <p className="text-2xl font-bold">Sign out</p>
          <p className="text-2xl font-bold">Sign up</p>
        </div>
      </div>
      <hr></hr>

      <div className="m-6 flex gap-3">
        <div className="col-md-6 justify-center align-center m-auto">
          <p className="text-4xl font-semibold">
            Laptopshop is a diverse array of laptops,shop your laptop now
          </p>
        </div>
        <div className="col-md-6 w-96 h-96 m-auto">
          <img src={picture1} alt="Home Image" className="w-100 h-100" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-center align-center p-4">
          <p className="text-2xl font-medium">Manage your store</p>
        </div>
        <div className="flex flex-row justify-center align-center gap-12 p-3">
          <div className="card w-72">
            <div className="card-body">
              <h5 className="card-title">Categories</h5>

              <a href="#" className="btn btn-primary">
                Add category
              </a>
            </div>
          </div>
          <div className="card w-72">
            <div className="card-body">
              <h5 className="card-title">Product</h5>

              <a href="#" className="btn btn-primary">
                Add product
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
