import React, { useState } from 'react';

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const images = [
    {
      src: '/assets/images/new/hero1.png',
      alt: 'Hopeful housing scene with sunlight through windows',
      caption: 'Shared living space prepared to welcome residents on day one.',
    },
    {
      src: '/assets/images/new/community.png',
      alt: 'Community volunteers gathering together',
      caption: 'Neighbors and volunteers rallying behind reentry housing.',
    },
    {
      src: '/assets/images/new/house_collage.png',
      alt: 'House collage showing the revitalization journey',
      caption: 'Snapshots of the home transformation from start to finish.',
    },
    {
      src: '/assets/images/original_clean/9D5B479F-62BC-4112-8757-B6F95A98607F_clean.jpg',
      alt: 'Front exterior of the community house before restoration',
      caption: 'Transitional home ready to host returning citizens in safety.',
    },
    {
      src: '/assets/images/original_clean/A1734D5F-4912-4D75-A2D4-2A6CF8A235F6_clean.jpg',
      alt: 'Sunlit porch on the future community house',
      caption: 'Morning light on the porch that will welcome residents home.',
    },
    {
      src: '/assets/images/original_clean/B6E0A582-B214-4A19-B87F-28E3A3AD376A_clean.jpg',
      alt: 'Rear view highlighting the home\'s renovation potential',
      caption: 'Backyard ready to become a healing gathering space.',
    },
    {
      src: '/assets/images/original_clean/BEC2C744-CC42-42A8-866F-C5D5082C314D_clean.jpg',
      alt: 'Community house framed by mature trees',
      caption: 'Mature trees frame the home, offering shade and serenity for residents.',
    },
    {
      src: '/assets/images/original_clean/D71B0758-1DF2-47BB-86B3-B07B6A957CF9_clean.jpg',
      alt: 'Side entrance of the house ready for repairs',
      caption: 'Side entrance where accessibility upgrades will create safe entry.',
    },
    {
      src: '/assets/images/original_clean/E3764607-46DE-4AE7-B723-13D43FEBC34A_clean.jpg',
      alt: 'Windows awaiting new trim on the community house',
      caption: 'Exterior windows awaiting care so rooms feel bright and secure.',
    },
    {
      src: '/assets/images/original_clean/E43AE674-A008-4507-9DE3-412C49873EDD_clean.jpg',
      alt: 'Front stoop of the house with overgrown landscaping',
      caption: 'Front stoop before the makeover that will welcome each new resident.',
    },
    {
      src: '/assets/images/original_clean/F056288C-53A3-41D7-AF24-350094419355_clean.jpg',
      alt: 'Wide view of the neighborhood surrounding the project home',
      caption: 'Neighborhood view where returning citizens can rebuild belonging.',
    },
    {
      src: '/assets/images/original_clean/FF85ACB0-439F-49A0-A1A7-743A6AAC40EC_clean.jpg',
      alt: 'Architectural details on the home needing care',
      caption: 'Architectural details we preserve to honor history while offering hope.',
    },
    {
      src: '/assets/images/original_clean/IMG_5848_clean.jpg',
      alt: 'Driveway leading to the community house restoration site',
      caption: 'Driveway leading to a future hub for restorative reentry.',
    },
  ];

  const closeLightbox = () => setSelected(null);
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('lightbox')) closeLightbox();
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <figure className="gallery-card" key={idx}>
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => setSelected(img)}
              />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      {selected && (
        <div className="lightbox" onClick={handleOverlayClick}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <div className="lightbox-content">
            <img src={selected.src} alt={selected.alt} />
            <p>{selected.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
