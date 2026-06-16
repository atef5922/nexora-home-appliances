import { CatalogExplorer } from "@/components/commerce/CatalogExplorer";
import { Container } from "@/components/layout/Container";
import { products } from "@/data/catalog";
import { applianceBrands } from "@/data/brands";

export const metadata = {
  title: "Shop All Products",
  description: "Browse premium home appliances with advanced filters, sorting, live search, and conversion-ready product cards."
};

export default async function ShopPage({ searchParams }: { searchParams?: Promise<{ brand?: string }> }) {
  const params = await searchParams;
  const activeBrandSlug = params?.brand ? decodeURIComponent(params.brand).toLowerCase() : "";
  const activeBrandMeta = applianceBrands.find((brand) => brand.slug === activeBrandSlug);
  const activeBrand = activeBrandMeta?.name ?? "";
  const visibleProducts = activeBrand
    ? products.filter((product) => product.brand.toLowerCase() === activeBrand.toLowerCase())
    : products;

  return (
    <Container className="py-8">
      <CatalogExplorer
        products={visibleProducts}
        title={activeBrand ? `${activeBrand} Appliances` : "All Products"}
        subtitle={
          activeBrand
            ? `Browse verified ${activeBrand} appliances with live search, sorting, EMI-ready filtering, and backend-ready catalog behavior.`
            : "Search, sort, and filter premium appliances with a production-ready shopping experience built for backend integration."
        }
        initialBrand={activeBrand}
      />
    </Container>
  );
}
