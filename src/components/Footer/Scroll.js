import React from 'react';

function Scroll() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i> {/* Icon mũi tên lên */}
    </div>
  );
}

export default Scroll;
