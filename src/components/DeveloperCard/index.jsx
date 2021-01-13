import React from "react";

const DeveloperCard = ({ about, developer }) => {
  const { developerName, designation, techStack } = developer;
  return (
    <div className='col-md-6' style={{ maxHeight: 274 }}>
      <div className='row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
        <div className='col p-4 d-flex flex-column position-static'>
          <strong className='d-inline-block mb-2 text-primary'>
            Phaedrian
          </strong>
          <h4 className='mb-0'>{developerName}</h4>
          {techStack.map((tech) => (
            <div className='text-muted' key={tech._id}>
              Tech: {tech.name}
            </div>
          ))}
          <p className='card-text mb-auto'>
            Designation: {designation.replace(/_/g, " ")}
          </p>
        </div>
        <div className='col-auto d-none d-lg-block'>
          <svg
            className='bd-placeholder-img'
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
