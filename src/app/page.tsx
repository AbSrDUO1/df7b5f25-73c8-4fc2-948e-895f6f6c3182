"use client"

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-interior-1760707404783-62d70cc9.jpg","alt":"pizzeria interior"},{"id":"feature-pizza","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/delicious-pizza-1760707409914-79ea8fda.jpg","alt":"delicious pizza"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-team-1760707412823-67155408.jpg","alt":"pizzeria team"},{"id":"contact-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-exterior-1760707415404-c27a2240.jpg","alt":"pizzeria exterior"}];

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
            { name: "Contact", id: "contact" },
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
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-interior-1760707404783-62d70cc9.jpg"
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
                icon: "Star"
              },
              {
                title: "Pepperoni",
                description: "Loaded with authentic Italian pepperoni.",
                icon: "Fire"
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
                name: "Margherita",
                price: "$12.99",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/delicious-pizza-1760707409914-79ea8fda.jpg"
              },
              {
                id: "2",
                name: "Pepperoni",
                price: "$14.99",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/delicious-pizza-1760707409914-79ea8fda.jpg"
              },
              {
                id: "3",
                name: "Veggie",
                price: "$13.99",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/delicious-pizza-1760707409914-79ea8fda.jpg"
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
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-exterior-1760707415404-c27a2240.jpg"
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