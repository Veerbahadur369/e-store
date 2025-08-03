import Slider from "./Slider";

const ImageSlider = () => {
  const sampleImages = [
    "https://media.gettyimages.com/id/2214595207/photo/responsive-website-design-mockup-on-desktop-laptop-tablet-and-smartphone-for-modern-web.jpg?b=1&s=2048x2048&w=0&k=20&c=tHSPIent8EFdyNNBh7I2-9D4UPdfpp5py56rNeLZv60=",
    "https://bcassetcdn.com/shapes/prod/6f17ae6b-ae67-408a-b5e0-566c0b809d7e.svg",
    "https://images.unsplash.com/photo-1751378639381-e482ae167e39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1752658399864-889546a87222?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"

  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Image Carousel</h1>
      <Slider images={sampleImages} />
    </div>
  );
};

export default ImageSlider;
