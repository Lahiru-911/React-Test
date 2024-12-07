import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <>
      <div style={styles}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          voluptatem placeat incidunt animi debitis, officiis iure illo
          voluptatum itaque ratione!
        </p>
      </div>
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Styled Card</h1>
        <p style={{ fontSize: "1rem", color: "red" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          consequatur deserunt accusantium laborum. Totam ab in eos. Eos
          laboriosam dolorum commodi quia sapiente inventore beatae fugit qui
          recusandae ipsa ea quae asperiores, corrupti libero! Ut rerum maiores
          soluta harum nihil magnam asperiores libero placeat, nostrum animi
          natus laudantium. Molestiae esse neque enim exercitationem hic
          inventore sint non debitis a quam.
        </p>
      </div>
    </>
  );
};

export default ProfileCard;
