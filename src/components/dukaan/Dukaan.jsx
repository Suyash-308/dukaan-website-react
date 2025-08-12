import React from 'react'
import './dukaan.css'
import DukaanCard from './DukaanCard'


function Dukaan() {
  const cards = [
    {
      imgUrl:
        "https://mydukaan.io/_next/static/images/launch-fast-6349265d2de0cf16e61e160f85bd681d.svg",
      flexD: "row",
      heading: "Launch Fast",
      paragraphs: [
        "Fully responsive e-commerce website & mobile app.",
        "Loads 6X faster than existing solutions.",
        "Upload/import products and inventory in bulk.",
        "Integrate payment gateways.",
        "Easily customizable themes.",
      ],
      iconImg:
        "https://mydukaan.io/_next/static/media/star-purple.3a0f99650c0ab639cf633cf46e9a29ae.svg",
    },
    {
      imgUrl:
        "https://mydukaan.io/_next/static/images/scale-faster-615089c61891323e0c2e2f0a4d498d53.svg",
      flexD: "row-reverse",
      heading: "Scale Faster",
      paragraphs: [
        "Guaranteed 99.5% uptime for your store - We keep you open for business.",
        "60+ third party plugins.",
        "Marketing tools and discounts to drive repeat orders.",
        "Add staff accounts, assign different roles.",
        "Unlimited transactions, minimal transaction fees.",
      ],
      iconImg:
        "https://mydukaan.io/_next/static/media/star-blue.f616f6970481413e436c6ec2ad621545.svg",
    },
    {
      imgUrl:
        "https://mydukaan.io/_next/static/images/manage-better-5f03835fb0602b9fa6a4b3fc98bc9c7c.svg",
      flexD: "row",
      heading: "Manage Better",
      paragraphs: [
        "Order tracking, invoicing and order reports.",
        "Bulk edit product prices, variants, inventory.",
        "Manage global deliveries.",
        "In-depth business analytics.",
        "Automate all tax calculations.",
      ],
      iconImg:
        "https://mydukaan.io/_next/static/media/star-gray.1f0c906d374a9e78df3310d226fb00d9.svg",
    },
  ];

  return (
    <section className="dukaan">
      <h2>
        Whether you’re a startup or an established business, here’s why Dukaan is your best choice
      </h2>

      {cards.map((card) => {
        return (
          <DukaanCard
            key={card.heading}
            flexD={card.flexD}
            imgUrl={card.imgUrl}
            heading={card.heading}
            paragraphs={card.paragraphs}
            iconImg={card.iconImg}
          />
        );
      })}
    </section>
  );
}


export default Dukaan