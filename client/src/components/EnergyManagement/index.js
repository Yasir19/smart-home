import React from "react";

const EnergyManagement = () => {
    return (
        <section className="approved-list my-5">
            {/* <h2>Energy Management</h2> */}
            <article className="card-container">
                <div className="card-approved-list" style={{ width: "18rem" }}>
                    <h4 className="card-title">Energy Management</h4>
                    <img src="https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-96317.jpg?t=st=1650333133~exp=1650333733~hmac=e3f7a4c08e987d974e39d55a48e821a7f247b49d7e8c401415456988799e2d29&w=740" alt="Smart home system" width={300}></img>
                    <p>
                        Here at Smart Home Enterprises our goal is to make an everlasting change
                        on the environment and on our future!  We offer services in energy management from
                        the smallest upgrades such as installing smart lights, smart plugs, etc. 
                        To major projects such as Solar Panel installation.  Reach out to a contractor today
                        if you are tired of your pricey monthly electricty costs and let us guide you into the
                        future!
                    </p>
                </div>
            </article>
        </section>
    );
};

export default EnergyManagement;