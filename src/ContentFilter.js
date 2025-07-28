import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setContentFilterPaid,
  setContentFilterFree,
  setContentFilterView,
  setContentFilter,
} from "./action.js";
import "./css/ContentFilter.css";

function ContentFilter() {
  const dispatch = useDispatch();
  const contentFilterPaid = useSelector(
    (state) => state.connectContentFilterPaid
  );
  const contentFilterFree = useSelector(
    (state) => state.connectContentFilterFree
  );
  const contentFilterView = useSelector(
    (state) => state.connectContentFilterView
  );

  const handleCheckboxPaid = (e) => {
    dispatch(setContentFilterPaid(e.target.checked));
  };

  const handleCheckboxFree = (e) => {
    dispatch(setContentFilterFree(e.target.checked));
  };

  const handleCheckboxView = (e) => {
    dispatch(setContentFilterView(e.target.checked));
  };

  const handleButtonReset = (e) => {
    dispatch(setContentFilter(false));
    dispatch(setContentFilterPaid(false));
    dispatch(setContentFilterFree(false));
    dispatch(setContentFilterView(false));
  };

  useEffect(() => {
    if (contentFilterPaid || contentFilterFree || contentFilterView) {
      dispatch(setContentFilter(true));
    } else {
      dispatch(setContentFilter(false));
    }
    // eslint-disable-next-line
  }, [contentFilterPaid, contentFilterFree, contentFilterView]);

  return (
    <div className="content-fliter">
      <div className="content-filter-card">
        <div className="content-filter-checkbox">
          <h6 className="content-filter-label">Pricing Option</h6>
          <h5 className="content-filter-label">
            <input
              className="checkbox"
              type="checkbox"
              name="paidbox"
              checked={contentFilterPaid}
              onChange={handleCheckboxPaid}
            />
            Paid
          </h5>
          <h5 className="content-filter-label">
            <input
              className="checkbox"
              type="checkbox"
              name="freebox"
              checked={contentFilterFree}
              onChange={handleCheckboxFree}
            />
            Free
          </h5>
          <h5 className="content-filter-label">
            <input
              className="checkbox"
              type="checkbox"
              name="viewbox"
              checked={contentFilterView}
              onChange={handleCheckboxView}
            />
            View Only
          </h5>
        </div>
        <div className="content-filter-reset">
          <button
            className="content-filter-reset-button"
            onClick={handleButtonReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentFilter;
