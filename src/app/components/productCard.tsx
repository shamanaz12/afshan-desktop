import Image from "next/image";
import Link from "next/link";

// ProductProps interface defines the shape of the props for ProductCard
interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Component for rendering individual product card
const ProductCard: React.FC<ProductProps> = ({ id, title, description, price, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* Displaying product image */}
      <Image src={image} alt={title} width={200} height={150} className="rounded-md" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-orange-500 font-bold">${price}</p>

      <div className="flex gap-2 mt-4">
        {/* View Product Button */}
        <Link href={`/product/${id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">View Product</button>
        </Link>
        {/* Order Now Button */}
        <Link href={`/order/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

// Assuming products is fetched or statically provided
const products = [
  {
    id: "1",
    title: "Product 1",
    description: "This is a description of Product 1.",
    price: 19.99,
    image: "/images/product1.jpg"
  },
  {
    id: "2",
    title: "Product 2",
    description: "This is a description of Product 2.",
    price: 29.99,
    image: "/images/product2.jpg"
  },
  // Add more products as needed
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 &&
        products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
    </div>
  );
}
