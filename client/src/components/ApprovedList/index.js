import React from "react";
import GoogleMapReact from "google-map-react";

const ApprovedList = ({ projects, projectDescription }) => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  //   const LocationPin = ({ text }) => (
  // 	<div className="pin">
  // 	  {/* <Icon icon={locationIcon} className="pin-icon" /> */}
  // 	  <p className="pin-text">{text}</p>
  // 	</div>
  //   )
  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDI3sNUMCRaUbcIHIGYV5sla-XT7k2V9NI" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {/* <LocationPin
				lat={location.lat}
				lng={location.lng}
				text={location.address}
			  /> */}
        </GoogleMapReact>
      </div>
    </div>
  );

  if (!projects.length) {
    return <h3> No Available Projects Yet </h3>;
  }
  return (
    <div className="approved-list my-5">
      <h3> {projectDescription}</h3>
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card-approved-list mb-3">
            <div className="card-body">
              <p className="mb-0">Project Owner:{project.userName}</p>
              <p>Project Description:{project.projectDescription}</p>
              <p className="mb-0">
                Project Materials:{project.projectMaterials}
              </p>
              <p className="mb-0">Project initial Price:{project.initPrice}</p>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDI3sNUMCRaUbcIHIGYV5sla-XT7k2V9NI",
                }}
                defaultCenter={0}
                defaultZoom={0}
              >
                {/* <LocationPin
				lat={location.lat}
				lng={location.lng}
				text={location.address}
			  /> */}
              </GoogleMapReact>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ApprovedList;
