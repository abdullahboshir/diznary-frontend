"use client"
import { Hero } from "@/components/home/Hero";
import React from "react";
import offerImg1 from "../../../public/images/banner/Brown and White Elegant New Arrivals Fashion Email Header_4.jpg";
import offerImg2 from "../../../public/images/banner/Brown and White Elegant New Arrivals Fashion Email Header_3.jpg";
import cardImg2 from "../../../public/images/card/Pemimium Jackat(2).jpg";
import cardImg1 from "../../../public/images/card/Pemimium Jackat(1).jpg";
import cardImg3 from "../../../public/images/card/Pemimium Jackat(3).jpg";
import cardImg4 from "../../../public/images/card/Men T-Shirt (1).jpg";
import cardImg5 from "../../../public/images/card/Men T-Shirt (2).jpg";
import cardImg6 from "../../../public/images/card/Men T-Shirt (3).jpg";
import { OfferCard } from "@/components/cards/OfferCard";
import ProductCard from "@/components/cards/ProductCard";
import Footer from "@/components/layout/Footer";

const products = [
  {
    imageSrc: cardImg2, // Pass the entire image object, not just .src
    name: "Premium Jacket",
    description: "High-quality premium jacket for all seasons with comfortable fit.",
    price: "৳ 1500",
  },
  {
    imageSrc: cardImg1,
    name: "Winter Jacket", 
    description: "Warm and stylish winter jacket with premium insulation.",
    price: "৳ 999",
  },
  {
    imageSrc: cardImg3,
    name: "Designer Jacket",
    description: "Elegant designer jacket for formal occasions.",
    price: "৳ 1250",
  },
  {
    imageSrc: cardImg4,
    name: "Men's T-Shirt",
    description: "Comfortable cotton t-shirt for daily wear.",
    price: "৳ 500",
  },
  {
    imageSrc: cardImg5,
    name: "Casual T-Shirt",
    description: "Trendy casual t-shirt with modern design.",
    price: "৳ 750",
  },
  {
    imageSrc: cardImg6,
    name: "Sports T-Shirt",
    description: "Breathable sports t-shirt for active lifestyle.",
    price: "৳ 800",
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Footer/>
    </div>
  );
};

export default HomePage;