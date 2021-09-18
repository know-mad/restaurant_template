import React from "react"
import Layout from "../../components/layout"
import Form from "../../components/Form"

const Catering = () => {
  return (
    <Layout>
      <section>
        <div className="info-section">
          <div className="info-section-top">
            <h3>WE CATER!!!</h3>
            <p>
              Let <span style={{ color: `#DF2332` }}>[Restaurant]</span> cater
              your next event
            </p>
          </div>
          <div className="info-section-bottom">
            <div className="info-section-bottom-left">
              <p>
                <span style={{ fontSize: `1.5rem`, fontWeight: `bold` }}>
                  Having a party or office event?{" "}
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="info-section-bottom-right">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Catering
