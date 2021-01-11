import React from "react";

const DeveloperCard = ({ about, joining, name, tag }) => {
  return (
    <div class='col-md-6'>
      <div class='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
        <div class='col p-4 d-flex flex-column position-static'>
          <strong class='d-inline-block mb-2 text-primary'>{tag}</strong>
          <h3 class='mb-0'>{name}</h3>
          <div class='mb-1 text-muted'>{joining}</div>
          <p class='card-text mb-auto'>{about}</p>
          <nav class='blog-pagination'>
            <a class='btn btn-outline-primary' href='#/'>
              Delete
            </a>
          </nav>
        </div>
        <div class='col-auto d-none d-lg-block'>
          <svg
            class='bd-placeholder-img'
            width='200'
            height='250'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
            role='img'
            aria-label='Placeholder: Thumbnail'>
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#55595c' />
            <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
