import React from 'react'

const LineAdvert = () => {
  return (
  <section className="bg-extra-dark-gray padding-25px-tb page-title-small" style={{ background: "#208bff" }}>
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-xl-8 col-lg-6"
        style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                fontWeight: "600"
        }}
      >
        {/* start page title */}
        <i className={"solid-icon-Loudspeaker icon-very-medium text-white mr-3"} />   
        <h1 className="alt-font text-white no-margin-bottom text-center text-lg-start">
        200K discount on any room option for Baze students
        </h1>
        {/* end page title */}
      </div>
    </div>
  </div>
</section>

  )
}

export default LineAdvert