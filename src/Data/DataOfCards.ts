import Img1 from '../assets/shop/image 1.png'
import Img2 from '../assets/shop/image 2.png'
import Img3 from '../assets/shop/image 3.png'
import Img4 from '../assets/shop/image 4.png'
import Img5 from '../assets/shop/image 5.png'
import Img6 from '../assets/shop/image 6.png'
import Img7 from '../assets/shop/image 7.png'
import Img8 from '../assets/shop/image 8.png'
import Img10 from '../assets/shop/img10.jpg'
import Img11 from '../assets/shop/img11.jpg'
import Img12 from '../assets/shop/img12.jpg'
import Img13 from '../assets/shop/img13.jpg'
import Img14 from '../assets/shop/img14.jpg'
import Img15 from '../assets/shop/img15.jpg'
import Img16 from '../assets/shop/img16.jpg'

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
      "title": "Syltherine",
      "details": "Stylish cafe chair",
      "price": "Rp 2.500.000",
      "img": Img1
    },
    {
      "title": "Lolito",
      "details": "Luxury big sofa",
      "price": "Rp 7.000.000",
      "img": Img2,
    },
    {
      "title": "Respira",
      "details": "Outdoor bar table and stool",
      "price": "Rp 500.000",
      "img": Img3,
      "discount": "50"
    },
    {
      "title": "Grifo",
      "details": "Night lamp",
      "price": "Rp 1.500.000",
      "img": Img4,
      "new": true
    },
    {
      "title": "Muggo",
      "details": "Small mug",
      "price": "Rp 150.000",
      "img": Img5,
      "discount": "30"
    },
    {
      "title": "Pingky",
      "details": "Cute bed set",
      "price": "Rp 7.000.000",
      "img": Img6,
      "new": true
    },
    {
      "title": "Elegant Mirror",
      "details": "Wall mounted mirror",
      "price": "Rp 900.000",
      "img": Img7,
    },
    {
      "title": "Modern Clock",
      "details": "Minimalist wall clock",
      "price": "Rp 350.000",
      "img": Img8,
      "discount": "10"
    },
    {
      "title": "Classic Vase",
      "details": "Ceramic flower vase",
      "price": "Rp 250.000",
      "img": Img10,
    },
    {
      "title": "Comfy Blanket",
      "details": "Soft and warm blanket",
      "price": "Rp 400.000",
      "img": Img11,
    },
    {
      "title": "Reading Lamp",
      "details": "Adjustable desk lamp",
      "price": "Rp 320.000",
      "img": Img12,
      "new": true
    },
    {
      "title": "Artistic Frame",
      "details": "Wooden photo frame",
      "price": "Rp 180.000",
      "img": Img13,
    },
    {
      "title": "Decorative Plant",
      "details": "Artificial green plant",
      "price": "Rp 220.000",
      "img": Img14,
    },
    {
      "title": "Syltherine",
      "details": "Stylish cafe chair",
      "price": "Rp 2.500.000",
      "img": Img15,
    },
    {
      "title": "Lolito",
      "details": "Luxury big sofa",
      "price": "Rp 7.000.000",
      "img": Img16,
    },
    {
      "title": "Syltherine",
      "details": "Stylish cafe chair",
      "price": "Rp 2.500.000",
      "img": Img1
    },
    {
      "title": "Lolito",
      "details": "Luxury big sofa",
      "price": "Rp 7.000.000",
      "img": Img2,
    },
    {
      "title": "Respira",
      "details": "Outdoor bar table and stool",
      "price": "Rp 500.000",
      "img": Img3,
      "discount": "50"
    },
    {
      "title": "Grifo",
      "details": "Night lamp",
      "price": "Rp 1.500.000",
      "img": Img4,
      "new": true
    },
    {
      "title": "Muggo",
      "details": "Small mug",
      "price": "Rp 150.000",
      "img": Img5,
      "discount": "30"
    },
    {
      "title": "Pingky",
      "details": "Cute bed set",
      "price": "Rp 7.000.000",
      "img": Img6,
      "new": true
    },
    {
      "title": "Elegant Mirror",
      "details": "Wall mounted mirror",
      "price": "Rp 900.000",
      "img": Img7,
    },
    {
      "title": "Modern Clock",
      "details": "Minimalist wall clock",
      "price": "Rp 350.000",
      "img": Img8,
      "discount": "10"
    },
    {
      "title": "Classic Vase",
      "details": "Ceramic flower vase",
      "price": "Rp 250.000",
      "img": Img10,
    },
    {
      "title": "Comfy Blanket",
      "details": "Soft and warm blanket",
      "price": "Rp 400.000",
      "img": Img11,
    },
    {
      "title": "Reading Lamp",
      "details": "Adjustable desk lamp",
      "price": "Rp 320.000",
      "img": Img12,
      "new": true
    },
    {
      "title": "Artistic Frame",
      "details": "Wooden photo frame",
      "price": "Rp 180.000",
      "img": Img13,
    },
    {
      "title": "Decorative Plant",
      "details": "Artificial green plant",
      "price": "Rp 220.000",
      "img": Img14,
    },
    {
      "title": "Syltherine",
      "details": "Stylish cafe chair",
      "price": "Rp 2.500.000",
      "img": Img15,
    },
    {
      "title": "Lolito",
      "details": "Luxury big sofa",
      "price": "Rp 7.000.000",
      "img": Img16,
    },
  ]
}

