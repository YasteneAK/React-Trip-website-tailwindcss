import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">luxurious Interior Rooms</h3>
        <p className="pt-4">
          Book your stay and experience the ultimate in comfort and relaxation.
          <br />
          <br />
          We offer luxurious accommodations in a beautiful and serene setting.
          Our guest rooms are spacious and tastefully decorated, with all the
          modern amenities you need for a comfortable and relaxing stay.
          <br /> <br /> Each room features comfortable beds with high-quality
          linens, a private bathroom with luxurious bath products, and a
          flat-screen TV with cable channels.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom-with-working-table_105762-1788.jpg?w=996&t=st=1672682113~exp=1672682713~hmac=553c89d81afee2dfeb8cbbfb0cdc4ace9e74cee91b460f7bdf3d792dd92e2d75"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?w=996&t=st=1672682180~exp=1672682780~hmac=4dd5787efc2821688fb0de45eae11554ff4c703e23be7522454c87f0cee796cd"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?w=996&t=st=1672682177~exp=1672682777~hmac=572ea46eaab19e42cf6e9fa4f6f80ae13e70861e60efb1636665552c58574f5a"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
