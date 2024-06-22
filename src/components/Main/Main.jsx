import React,{useEffect} from "react";
import "./main.css";
import image from "../../Assets/image.jpg";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import image8 from "../../Assets/image8.jpg";
import image9 from "../../Assets/image9.jpg";
import image7 from "../../Assets/image7.jpg";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";

const data = [
  {
    id: 1,
    imgSrc: image1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of  romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: image2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular",
  },
  {
    id: 3,
    imgSrc: image3,
    destTitle: "Great Barrier Reef",
    location: "Austalia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place",
  },
  {
    id: 4,
    imgSrc: image4,
    destTitle: "Cappadocia",
    location: "Trukey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 5,
    imgSrc: image5,
    destTitle: "Gaunajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.",
  },
  {
    id: 6,
    imgSrc: image6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!.",
  },
  {
    id: 7,
    imgSrc: image7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 8,
    imgSrc: image8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 9,
    imgSrc: image9,
    destTitle: "Bali Iseland",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.",
  },
];
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* so guys, here we are going to use high order array method(map). to do that we shall use a list of object in one arra */}
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                {/* here it will return single id from the map array */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon"/>
                  </button>

                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
