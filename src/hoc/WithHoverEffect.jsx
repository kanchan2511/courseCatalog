import React, { useState } from "react";

const WithHoverEffect = (WrappedComponent) => {
  return (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
    
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  };
};

export default WithHoverEffect;