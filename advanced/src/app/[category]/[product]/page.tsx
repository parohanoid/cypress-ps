'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link'; // Import Link for navigation
import { addToCart } from '@/lib/cartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';

interface Props {
  params: { category: string; product: string };
}

export default function ProductPage({ params }: Props) {
  const { category, product: productId } = use(params);
  const [product, setProduct] = useState<any | null>(null); // Use 'any' or a proper type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState<string>("Buy")
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const { getProductById } = await import('@/lib/data');
        const productData = getProductById(category, productId);
        setProduct(productData);
      } catch (e: any) {
        setError(e.message || 'Failed to load product');
        console.error("Error loading product:", e);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [category, productId]); // Re-run effect when category or productId changes

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return notFound();
  }

  function handleClick() {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      amount: 1
    }))
    setButtonText("Added to cart")
  }

  return (
    <div style={{ paddingLeft: '171px', paddingRight: '171px', paddingTop: '40px', paddingBottom: '40px' }}>
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '5px' }}>
            <Link href={`/${encodeURIComponent(category)}`} style={{ textDecoration: 'none' }}>
              {category.toUpperCase()}
            </Link>
          </li>
          <li style={{ margin: '0 5px' }}>></li>
          <li>{product.name}</li>
        </ol>
      </nav>

      <div style={{ display: 'flex' }}>
        {/* Image Column */}
        <div style={{ width: '40%', paddingRight: '20px' }}>
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        {/* Text Column */}
        <div style={{ width: '60%' }}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button data-testid="buyButton" onClick={() => handleClick()}>{buttonText}</button>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
}