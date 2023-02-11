import React, { useState } from 'react';

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = pageNumber => {
    setActivePage(pageNumber);
  };

  return (
    <ul class="pagination pagination-md">
      <li class={`page-item ${activePage === 1 ? 'active' : ''}`}>
        <a class="page-link" href="#icon" onClick={() => handleClick(1)}>1</a>
      </li>
      <li class={`page-item ${activePage === 2 ? 'active' : ''}`}>
        <a class="page-link" href="#skill" onClick={() => handleClick(2)}>2</a>
      </li>
      <li class={`page-item ${activePage === 3 ? 'active' : ''}`}>
        <a class="page-link" href="#qualification" onClick={() => handleClick(3)}>3</a>
      </li>
    </ul>
  );
};

export default Pagination;