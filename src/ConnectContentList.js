import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContentList } from "./action.js";
import "./css/ContentList.css";

function ConnectContentList() {
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.connectContentList);
  const contentFilterPaid = useSelector(
    (state) => state.connectContentFilterPaid
  );
  const contentFilterFree = useSelector(
    (state) => state.connectContentFilterFree
  );
  const contentFilterView = useSelector(
    (state) => state.connectContentFilterView
  );
  const contentFilter = useSelector((state) => state.connectContentFilter);

  useEffect(() => {
    fetch("https://closet-recruiting-api.azurewebsites.net/api/data")
      .then((response) => response.json())
      .then((data) => dispatch(setContentList(data)))
      .catch((error) => console.log("Something went wrong on our side", error));
  }, [dispatch]);

  const combinedList = [
    ...(contentList || []).filter(
      (list) => list.pricingOption === 0 && contentFilterPaid
    ),
    ...(contentList || []).filter(
      (list) => list.pricingOption === 1 && contentFilterFree
    ),
    ...(contentList || []).filter(
      (list) => list.pricingOption === 2 && contentFilterView
    ),
  ];

  const finalList = contentFilter ? combinedList : contentList;

  return (
    <div className="content-container">
      <div className="content-grid">
        {finalList.length > 0 &&
          finalList.map((item, index) => (
            <div className="content-card" key={index}>
              <img
                src={item?.imagePath}
                alt={item?.title}
                className="content-image"
              ></img>
              <div className="content-price-container">
                <div>
                  <p>{item?.creator || `Item ${index + 1}`}</p>
                  <p>{item?.title || "No description available"}</p>
                </div>
                <div>
                  {item?.price && item?.pricingOption === 0 && (
                    <h4 className="content-price">${item?.price}</h4>
                  )}
                  {item?.price && item?.pricingOption === 1 && (
                    <h4 className="content-price">FREE</h4>
                  )}
                  {item?.price && item?.pricingOption === 2 && (
                    <h4 className="content-price">VIEW ONLY</h4>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ConnectContentList;
