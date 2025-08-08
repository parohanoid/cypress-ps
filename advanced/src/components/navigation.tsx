'use client';

import Account from "./account";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShoppingCart from "./shoppingcart";

interface Category {
  name: string;
}

export default function Navigation() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const { getAllCategories } = await import('@/lib/data'); // Dynamic import
        const categoryList = await getAllCategories();
        // Transform the array of strings into an array of objects
        const categoryObjects: Category[] = categoryList.map(name => ({ name }));
        setCategories(categoryObjects);
      } catch (error) {
        console.error("Error loading categories:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    loadCategories();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <nav className="navbar navbar-expand flex-column flex-md-row header-nav--nav">
        <div className="container">
          <div className="d-md-flex justify-content-between">
            <div className="navbar-brand d-flex justify-content-between align-items-center">
              <a href="/"><img alt="Carved Rock Fitness" src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/logos/carved-rock-logo.png" /></a>
              <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggle" data-target="#navbarNav" data-toggle="collapse" type="button"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
            </div>
            <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
              <div className="header-nav--main">
                <form className="form-inline form-inline d-none d-sm-none d-md-block">
                  <input aria-label="Search" className="form-control" placeholder="What can we help you find?" type="search" />
                  <button className="btn btn-default" type="submit">SEARCH</button>
                </form>
                <ul className="navbar-nav">
                  {categories.map((category) => (
                    <li className="nav-item" key={category.name}>
                      <Link className="nav-link" href={`/${category.name}`}>
                        {category.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Account />
              <ShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}