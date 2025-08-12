import React from 'react'

function DukaanCard({ flexD, imgUrl, heading, paragraphs, iconImg }) {
  return (
    <div className="dukkan-card" style={{ flexDirection: flexD }}>
      <div className="dukaan-left">
        <img src={imgUrl} alt="" />
      </div>
      <div className="dukaan-right">
        <h3>{heading}</h3>

        {paragraphs.map((p, i) => {
          return (
            <p key={i}>
              <img src={iconImg} alt="" />
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default DukaanCard