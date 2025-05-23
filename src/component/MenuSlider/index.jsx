import React, { useState } from 'react';
import './MenuSlider.css';

const MenuSlider = ({ items, visibleCount = 3 }) => {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) =>
      Math.min(prev + 1, items.length - visibleCount)
    );
  };

  // Responsive: show 1 card on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return visibleCount;
  };

  const [currentVisible, setCurrentVisible] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => {
      setCurrentVisible(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = items.slice(startIdx, startIdx + currentVisible);

  return (
    <div className="menu-slider-wrapper">
      <div className="menu-slider-header">
        <span className="menu-slider-title">Our Menu</span>
        <div className="menu-slider-arrows">
          <button onClick={handlePrev} disabled={startIdx === 0} className="slider-arrow">
            &#8592;
          </button>
          <button onClick={handleNext} disabled={startIdx + currentVisible >= items.length} className="slider-arrow">
            &#8594;
          </button>
        </div>
      </div>
      <div className="menu-slider-track">
        {visibleItems.map((item, idx) => (
          <div className="menu-card" key={startIdx + idx}>
            <div className="menu-card-img-wrapper">
              <img src={item.image} alt={item.title} className="menu-card-img" />
            </div>
            <div className="menu-card-title">{item.title}</div>
            <div className="menu-card-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider; 