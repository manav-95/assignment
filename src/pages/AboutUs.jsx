import React, { useState } from 'react';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://pragyagirlsschool.com/wp-content/uploads/2016/12/Chemistry-Lab-1.jpg",
      alt: "Science Lab",
      caption: "State-of-the-art science lab"
    },
    {
      src: "https://th.bing.com/th/id/R.d8e11b7a615433c53c3e40a4f1434196?rik=U4Piyq%2bGaWIHzQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f6%2ff%2f368672.jpg&ehk=BfZQFmRdom7pJGWdVVQNV9kZmCaC4P2BaDA%2bKGoG8qc%3d&risl=&pid=ImgRaw&r=0",
      alt: "Classroom",
      caption: "Spacious and well-equipped classrooms"
    },
    {
      src: "https://dpspalwal.edu.in/wp-content/uploads/2018/07/Library2-low.jpg",
      alt: "Library",
      caption: "Library with a vast collection of books"
    },
    {
      src: "https://th.bing.com/th/id/R.4e7480a7d054106ac76a77ff48edfe61?rik=IwIMe%2boVg6URww&riu=http%3a%2f%2fwww.stephenperse.com%2f_site%2fdata%2ffiles%2fimages%2four+schools%2fsenior+school%2fnew+building%2f4E7480A7D054106AC76A77FF48EDFE61.jpg&ehk=K2LEYsIUXjGQFeGbKag93IxsC1Jfpkc6c3ajWR5r%2bic%3d&risl=&pid=ImgRaw&r=0",
      alt: "Sports Facilities",
      caption: "Sports facilities including a playground"
    }
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>

      <section className="mb-8 bg-slate-100 p-2 rounded">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">History</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Vision</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </section>

      <section className="mb-8 bg-slate-100 p-2 rounded">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mission</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Principal's Message</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Infrastructure and Facilities</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer relative group"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg mb-4 w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-50"
            />
            <p className="text-lg font-semibold">{image.caption}</p>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-2xl font-bold text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-lg font-semibold mt-4 text-center">{images[currentImageIndex].caption}</p>
            <div className="flex justify-between mt-2">
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                onClick={prevImage}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
