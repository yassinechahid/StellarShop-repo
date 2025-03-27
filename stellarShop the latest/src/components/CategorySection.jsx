import React from "react";
import { Link } from "react-router-dom";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import kids from "../assets/images/kids.jpg";
import '../categorysection.css'
const CategorySection = () => {
  const Categories = [
    {
      title: "men",
      imageUrl: men,
    },
    {
      title: "women",
      imageUrl: women,
    },
    {
      title: "kids",
      imageUrl: kids,
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {Categories.map((category, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 "
          >
            <div className="category-card card position-relative">
              <img
                src={category.imageUrl}
                alt={category.title}
                className=" rounded-lg shadow-lg"
                
              />
              <div className="category-info position-absolute " >
                <p id="aboveunderline">{category.title}</p>
                <Link to={`/CategoryFilterPage/${category.title}`} id="punderline">
                View All
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
