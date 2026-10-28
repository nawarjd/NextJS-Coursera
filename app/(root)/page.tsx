import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { connection } from "next/server";

export const instant = false
const HomePage = async () => {
  await connection();

  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals"  />
    </>
  );
};

export default HomePage;
