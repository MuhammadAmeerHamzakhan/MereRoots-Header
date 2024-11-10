import './background.css';
import train from '../../assets/train.png';
import vegetables from '../../assets/vegetables.png';
import elders from '../../assets/elders.png';
import bills from '../../assets/bills.png';
import gifts from '../../assets/gifts.png';
import books from '../../assets/books.png';

const Background = ({ heroCount }) => {
  const images = [train, vegetables, elders, bills, gifts, books];

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${images[heroCount % images.length]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;
