"use client";

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="/assets/logo.png"
          logoAlt="Pizzeria Logo"
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pizzeria"
            description="Experience the finest pizzas in town."
            imageSrc="asset://hero-image"
            buttons={[
              { text: "See Our Menu", href: "menu" },
              { text: "About Us", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our pizzeria has been serving delicious pizzas since 1990.",
              "We use the freshest ingredients for the best taste."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Specialties"
            features={[
              {
                title: "Margherita",
                description: "Classic pizza with fresh basil and mozzarella.",
                icon: Star
              },
              {
                title: "Pepperoni",
                description: "Loaded with authentic Italian pepperoni.",
                icon: Star
              }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Popular Pizzas"
            products={[
              {
                id: "1",
                name: "wefwefewf",
                price: "$12.99",
                imageSrc: "asset://feature-pizza"
              },
              {
                id: "2",
                name: "Pepperoni",
                price: "$14.99",
                imageSrc: "asset://feature-pizza"
              },
              {
                id: "3",
                name: "Veggie",
                price: "$13.99",
                imageSrc: "asset://feature-pizza"
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="We'd love to hear from you! Visit us or send a message."
            imageSrc="asset://contact-image"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                items: [{ label: "Home", href: "home" }, { label: "Menu", href: "menu" }],
              },
              {
                items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }],
              }
            ]}
            logoText="Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}