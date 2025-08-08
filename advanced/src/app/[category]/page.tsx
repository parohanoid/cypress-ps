'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: { category: string };
}

export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

export default function CategoryPage({ params }: Props) {
  const { category } = use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const { getProductsByCategory } = await import('@/lib/data');
        const productList = getProductsByCategory(category);
        setProducts(productList);
      } catch (e: any) {
        setError(e.message || 'Failed to load products');
        console.error("Error loading products:", e);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category]); // Re-run effect when the category changes

  if (loading) {
    return <div>Loading products...</div>; // Or a loading spinner
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products || products.length === 0) {
    return notFound();
  }

  return (
    <div style={{ paddingLeft: '171px', paddingRight: '171px', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <Link href={`/${category}/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ maxWidth: '80%', maxHeight: '150px', height: 'auto', marginBottom: '10px' }} // Adjusted image styles
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}