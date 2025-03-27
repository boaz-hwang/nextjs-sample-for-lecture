import { Suspense } from "react";

async function getCars() {
  console.log("[cars] fetch started at", Date.now());
  const res = await fetch(`https://freetestapi.com/api/v1/cars`);
  console.log("[cars] fetch ended at", Date.now());
  return res.json();
}

async function getProducts() {
  console.log("[products] fetch started at", Date.now());
  const res = await fetch(`https://freetestapi.com/api/v1/products`);
  console.log("[products] fetch ended at", Date.now());
  return res.json();
}

export default async function Page() {
  // const carsData = getCars();
  // const productsData = getProducts();

  // const [cars, products] = await Promise.all([carsData, productsData]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <h1>CARS</h1>
        <Suspense fallback={<div>Loading Cars...</div>}>
          <CarList />
        </Suspense>
      </div>

      <div className="flex flex-col gap-4">
        <h1>PRODUCTS</h1>
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}

async function CarList() {
  const cars = await getCars();

  return (
    <ul>
      {cars.map((car: any) => (
        <li key={car.id}>{car.model}</li>
      ))}
    </ul>
  );
}

async function ProductList() {
  const products = await getProducts();

  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
