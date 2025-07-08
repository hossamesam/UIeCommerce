// import Img1 from '../assets/shop/image 1.png'
// import Img2 from '../assets/shop/image 2.png'
// import Img3 from '../assets/shop/image 3.png'
// import Img4 from '../assets/shop/image 4.png'
// import Img5 from '../assets/shop/img16.jpg'
// import Img6 from '../assets/shop/image 6.png'
// import Img7 from '../assets/shop/image 7.png'
// import Img8 from '../assets/shop/image 8.png'
// import Img10 from '../assets/shop/img10.jpg'
// import Img11 from '../assets/shop/img11.jpg'
// import Img12 from '../assets/shop/img12.jpg'
// import Img13 from '../assets/shop/img13.jpg'
// import Img14 from '../assets/shop/img14.jpg'
// import Img15 from '../assets/shop/img15.jpg'
// import Img16 from '../assets/shop/img16.jpg'

export interface ICard {
  title: string;
  details: string;
  price: string;
  img: string;
  discount?: string;
  new?: boolean;
}



export default function DataOfCards(): ICard[] {

  return [
    {
      title: "Syltherine",
      details: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%201.png?updatedAt=1752005286573",
    },
    {
      title: "Lolito",
      details: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%202.png?updatedAt=1752005287897",
    },
    {
      title: "Respira",
      details: "Outdoor bar table and stool",
      price: "Rp 500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%203.png?updatedAt=1752005288004",
      discount: "50",
    },
    {
      title: "Grifo",
      details: "Night lamp",
      price: "Rp 1.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%204.png?updatedAt=1752005291147",
      new: true,
    },
    {
      title: "Muggo",
      details: "Small mug",
      price: "Rp 150.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%205.png?updatedAt=1752005285785",
      discount: "30",
    },
    {
      title: "Pingky",
      details: "Cute bed set",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%206.png?updatedAt=1752005300275",
      new: true,
    },
    {
      title: "Elegant Mirror",
      details: "Wall mounted mirror",
      price: "Rp 900.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%207.png?updatedAt=1752005303452",
    },
    {
      title: "Modern Clock",
      details: "Minimalist wall clock",
      price: "Rp 350.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%208.png?updatedAt=1752005304165",
      discount: "10",
    },
    {
      title: "Classic Vase",
      details: "Ceramic flower vase",
      price: "Rp 250.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img10.jpg?updatedAt=1752005292613",
    },
    {
      title: "Comfy Blanket",
      details: "Soft and warm blanket",
      price: "Rp 400.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img11.jpg?updatedAt=1752005293932",
    },
    {
      title: "Reading Lamp",
      details: "Adjustable desk lamp",
      price: "Rp 320.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img12.jpg?updatedAt=1752005293855",
      new: true,
    },
    {
      title: "Artistic Frame",
      details: "Wooden photo frame",
      price: "Rp 180.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img13.jpg?updatedAt=1752005297321",
    },
    {
      title: "Decorative Plant",
      details: "Artificial green plant",
      price: "Rp 220.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img14.jpg?updatedAt=1752005298358",
    },
    {
      title: "Syltherine",
      details: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img15.jpg?updatedAt=1752005302512",
    },
    {
      title: "Lolito",
      details: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img16.jpg?updatedAt=1752005302407",
    },
    {
      title: "Syltherine",
      details: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%201.png?updatedAt=1752005286573",
    },
    {
      title: "Lolito",
      details: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%202.png?updatedAt=1752005287897",
    },
    {
      title: "Respira",
      details: "Outdoor bar table and stool",
      price: "Rp 500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%203.png?updatedAt=1752005288004",
      discount: "50",
    },
    {
      title: "Grifo",
      details: "Night lamp",
      price: "Rp 1.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%204.png?updatedAt=1752005291147",
      new: true,
    },
    {
      title: "Muggo",
      details: "Small mug",
      price: "Rp 150.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%205.png?updatedAt=1752005285785",
      discount: "30",
    },
    {
      title: "Pingky",
      details: "Cute bed set",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%206.png?updatedAt=1752005300275",
      new: true,
    },
    {
      title: "Elegant Mirror",
      details: "Wall mounted mirror",
      price: "Rp 900.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%207.png?updatedAt=1752005303452",
    },
    {
      title: "Modern Clock",
      details: "Minimalist wall clock",
      price: "Rp 350.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/image%208.png?updatedAt=1752005304165",
      discount: "10",
    },
    {
      title: "Classic Vase",
      details: "Ceramic flower vase",
      price: "Rp 250.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img10.jpg?updatedAt=1752005292613",
    },
    {
      title: "Comfy Blanket",
      details: "Soft and warm blanket",
      price: "Rp 400.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img11.jpg?updatedAt=1752005293932",
    },
    {
      title: "Reading Lamp",
      details: "Adjustable desk lamp",
      price: "Rp 320.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img12.jpg?updatedAt=1752005293855",
      new: true,
    },
    {
      title: "Artistic Frame",
      details: "Wooden photo frame",
      price: "Rp 180.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img13.jpg?updatedAt=1752005297321",
    },
    {
      title: "Decorative Plant",
      details: "Artificial green plant",
      price: "Rp 220.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img14.jpg?updatedAt=1752005298358",
    },
    {
      title: "Syltherine",
      details: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img15.jpg?updatedAt=1752005302512",
    },
    {
      title: "Lolito",
      details: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "https://ik.imagekit.io/Hossam7w3cncwb9/assets/shop/img16.jpg?updatedAt=1752005302407",
    },
  ];
}

