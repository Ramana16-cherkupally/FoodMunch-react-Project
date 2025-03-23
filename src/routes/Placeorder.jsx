import React, { useRef, useState } from "react";
import { CardSummary } from "../Components/CardSummary";
import { Link, useNavigate } from "react-router-dom";

export const PlaceOrder = () => {
  const Navigate = useNavigate();
  const [addressType, setAddressType] = useState("home"); // State to manage address type (home/work)

  // Refs for form inputs
  const NameElement = useRef(null);
  const PhoneNumberElement = useRef(null);
  const PincodeElement = useRef(null);
  const AddressElement = useRef(null);
  const LocalityElement = useRef(null);
  const CityElement = useRef(null);
  const StateElement = useRef(null);

  // Handle form submission
  const handleSubmitData = (e) => {
    e.preventDefault();

    // Get values from refs
    const formData = {
      name: NameElement.current.value,
      phoneNumber: PhoneNumberElement.current.value,
      pincode: PincodeElement.current.value,
      address: AddressElement.current.value,
      locality: LocalityElement.current.value,
      city: CityElement.current.value,
      state: StateElement.current.value,
      addressType: addressType,
    };

    // Log form data (or send it to an API)
    console.log("Form Data:", formData);

    Navigate("/app/orderdone");
    // Optionally, reset the form
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card shadow-lg p-4"
            style={{ width: "100%", maxWidth: "500px", minHeight: "auto" }}
          >
            {/* Title Section */}
            <div className="text-center mb-3">
              <h5 className="fw-bold text-primary">Select Delivery Address</h5>
            </div>

            {/* Address Form */}
            <form className="w-100" onSubmit={handleSubmitData}>
              {/* Contact Details */}
              <div className="mb-2">
                <label className="form-label fw-bold text-secondary">
                  Contact Details
                </label>
                <input
                  type="text"
                  ref={NameElement}
                  className="form-control form-control-sm mb-2"
                  placeholder="Name*"
                  required
                />
                <input
                  type="tel"
                  ref={PhoneNumberElement}
                  className="form-control form-control-sm"
                  placeholder="Phone Number*"
                  maxLength="10"
                  required
                />
              </div>

              {/* Address Section */}
              <div className="mb-2">
                <label className="form-label fw-bold text-secondary">
                  Address
                </label>
                <input
                  type="text"
                  ref={PincodeElement}
                  className="form-control form-control-sm mb-2"
                  placeholder="Pincode*"
                  maxLength="6"
                  required
                />
                <textarea
                  className="form-control form-control-sm mb-2"
                  rows="2"
                  ref={AddressElement}
                  placeholder="House No, Street, Area*"
                  required
                />
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    ref={LocalityElement}
                    className="form-control form-control-sm"
                    placeholder="Locality/Town*"
                    required
                  />
                  <input
                    type="text"
                    ref={CityElement}
                    className="form-control form-control-sm"
                    placeholder="City/District*"
                    required
                  />
                </div>
                <input
                  type="text"
                  ref={StateElement}
                  className="form-control form-control-sm mt-2"
                  placeholder="State*"
                  required
                />
              </div>

              {/* Address Type Selection */}
              <div className="mb-2">
                <label className="fw-bold text-secondary">Address Type</label>
                <div className="d-flex  gap-3 mt-2">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="home"
                      name="addressType"
                      value="home"
                      checked={addressType === "home"}
                      onChange={() => setAddressType("home")}
                    />
                    <label className="form-check-label" htmlFor="home">
                      Home
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="work"
                      name="addressType"
                      value="work"
                      checked={addressType === "work"}
                      onChange={() => setAddressType("work")}
                    />
                    <label className="form-check-label" htmlFor="work">
                      Work
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid gap-2 mt-3">
                <div className="nav-link hover-effect text-white">
                  <button type="submit" className="btn btn-success  fw-bold">
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
