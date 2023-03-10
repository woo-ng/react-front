import React, { useState } from 'react';
import './Category.scss';
import categories from './Category.json';

class Category extends React.Component {
  componentDidMount() {
    const mainListItems = document.querySelectorAll('.main > li, .sub > li');

    const superSubListItems = document.querySelectorAll('.superSub > li');

    mainListItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const subList = item.querySelector('.sub, .superSub');
        subList.style.display = 'none';
        subList[0].style.display = 'block';
      });

      item.addEventListener('mouseleave', () => {
        const subList = item.querySelector('.sub, .superSub');

        if (item.index < 14) {
          subList[0].style.display = 'none';
        }
      });

      item.addEventListener('click', () => {
        if (item.classList.contains('open')) {
          this.close(item);
        } else {
          this.open(item);
        }
      });
    });

    superSubListItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }

  open(item) {
    item.classList.add('open');
    item.querySelector('> ul').style.display = 'block';
    item.removeEventListener('click', this.open);
    item.addEventListener('click', () => {
      this.close(item);
    });
  }

  close(item) {
    item.classList.remove('open');
    item.querySelector('> ul').style.display = 'none';
    item.removeEventListener('click', this.close);
    item.addEventListener('click', () => {
      this.open(item);
    });
  }

  render() {
    return (
      <nav id="category">
        <div id="nav">
          <ul className="main">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                title={category.title}
                subCategories={category.subCategories}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

function CategoryItem({ title, subCategories }) {
  const [showSub, setShowSub] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  console.log({ title, subCategories });
  const handleCategoryClick = () => {
    setShowSub(!showSub);
  };

  const handleSubCategoryClick = (index) => {
    console.log({ index });
    if (openSubCategory === index) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(index);
    }
  };

  return (
    <li>
      <a href="#" className="firstList" onClick={handleCategoryClick}>
        {title}
      </a>
      {showSub && (
        <ul className="sub">
          {subCategories.map((subCategory, index) => (
            <li key={index}>
              <a href="#" onClick={() => handleSubCategoryClick(index)}>
                {subCategory.title}
              </a>
              {openSubCategory === index && (
                <ul className="superSub">
                  {subCategory.superSubCategories.map(
                    (superSubCategory, index) => (
                      <li key={index}>
                        <a href="#">{superSubCategory.title}</a>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Category;
