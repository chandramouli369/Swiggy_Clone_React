import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner"; // Assuming you are using this loader
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolling, setScrolling] = useState(false); // State to track scrolling state

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`);
      const newData = await response.json();
      setVendorData(newData);
      setLoading(false);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const element = document.getElementById('chainGallery');
    const scrollAmount = 500; // Adjust as needed

    if (!element) return;

    // Calculate new scroll position based on direction
    const newScrollPosition = direction === "left"
      ? element.scrollLeft - scrollAmount
      : element.scrollLeft + scrollAmount;

    setScrolling(true); // Set scrolling state to true

    // Smoothly scroll to the new position
    element.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });

    // Set scroll position after the scrolling is complete
    setTimeout(() => {
      setScrollPosition(newScrollPosition);
      setScrolling(false); // Set scrolling state to false
    }, 500); // Adjust delay as needed to match scroll behavior
  };

  return (
    <>
      <div className="loaderSection">
        {loading && (
          <>
            <div className="loader">
              Your 🥣 is Loading...
            </div>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </>
        )}
      </div>

      <div className="btnSection">
        <button onClick={() => handleScroll("left")} disabled={scrolling}>
          <FaRegArrowAltCircleLeft className='btnIcons' />
        </button>
        <button onClick={() => handleScroll("right")} disabled={scrolling}>
          <FaRegArrowAltCircleRight className='btnIcons' />
        </button>
      </div>
      <h3 className='chainTitle'>Top restaurant chains in Hyderabad</h3>
      <div className="chainsection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
        {vendorData.vendors && vendorData.vendors.map((vendor) => (
          <div className="vendorBox" key={vendor.id}>
            {vendor.firm.map((item) => (
            <div className="zoomEffect">
              <Link to={`/products/${item._id}/${item.firmName}`} className="link" key={item._id}>
                <div className="firmImage">
                  <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                </div>
              </Link>
              </div>
            ))}
          </div>
          
        ))}
      </div>
    </>
  );
};

export default Chains;
