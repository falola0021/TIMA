import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Modal,
} from "react-bootstrap";
import Styles from "./Audit.module.css";
import AuditTable from "./AuditTable";
function ImageView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "0px" }}></Modal.Header>
      <Modal.Body>
        <div className={Styles.imgrowdiv}>
          <img
            className={Styles.imgpreview}
            src="https://dwdqz3611m4qq.cloudfront.net/templates/Freelance-Writing-Invoice-Template2-G.jpg?mtime=20191122132723&focal=none"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Preview(props) {
  const [imageShow, setImageShow] = React.useState(false);
  return (
    <Modal
      className={Styles.modal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "0px" }}></Modal.Header>
      <Modal.Body className={Styles.modalbody}>
        <div className={Styles.prevreq}>REQUEST ITEM</div>
        <div className={Styles.prevname}>
          <div>
            Name : <span>Anayo Kanayo</span>
          </div>
          <div>
            {" "}
            Date : <span>20/09/2020</span>
          </div>
        </div>
        <Row className={Styles.previtem}>
          <Col className={Styles.prevcol}>
            <div className={Styles.prevheader}>Vendor</div>
            <div className={Styles.prevtext}>ABD Electronics</div>
          </Col>
          <Col className={Styles.prevcol}>
            {" "}
            <div className={Styles.prevheader}>Product</div>
            <div className={Styles.prevtext}>Hp Laptop Battery</div>
          </Col>
          <Col className={Styles.prevcol}>
            {" "}
            <div className={Styles.prevheader}>Amount</div>
            <div className={Styles.prevtext}>
              <span>₦</span> 38,0000
            </div>
          </Col>
        </Row>
        <Row className={Styles.imgrow}>
          <Col sm="5" className={Styles.imgrowcol}>
            <div
              onClick={() => setImageShow(true)}
              className={Styles.imgrowdiv}
            >
              <img
                className={Styles.imgrowimg}
                src="https://dwdqz3611m4qq.cloudfront.net/templates/Freelance-Writing-Invoice-Template2-G.jpg?mtime=20191122132723&focal=none"
              />
            </div>
            <div className={Styles.imgrowimgdownload}>
              <i className="fas fa-download mr-3"></i>
              <span>Download</span>
            </div>
          </Col>
          <Col sm="7">
            <div className={Styles.approvaltitle}>Approved By :</div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
            <div className={Styles.approval}>
              <i className="fas fa-check mr-3"></i>
              <span>Team lead It</span>
            </div>
          </Col>
        </Row>
        <form className={Styles.comment}>
          <label>Leave a comment</label>
          <div>
            <textarea></textarea>
          </div>
          <Row className={Styles.submitrow}>
            <Col className={Styles.submitcol1}>
              {" "}
              <button>Approve</button>
            </Col>
            <Col className={Styles.submitcol2}>
              {" "}
              <button>Decline</button>
            </Col>
          </Row>
        </form>
      </Modal.Body>
      <ImageView show={imageShow} onHide={() => setImageShow(false)} />
    </Modal>
  );
}

function Audit(props) {
  const [searchForm, setSearchForm] = useState(false);
  const handleSearchForm = () => setSearchForm(!searchForm);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={Styles.body}>
        <Preview show={modalShow} onHide={() => setModalShow(false)} />
        <div className={Styles.sec1}>
          <div className={Styles.mobilenav}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand href="#home">
                {" "}
                <div className={Styles.titlemobile}>GIG Payflow</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">
                    {" "}
                    <i className="far fa-bell headingicon"></i>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    {" "}
                    <i className={Styles.name}>Anayo Adeolu</i>
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">
                    {" "}
                    <i className={Styles.name}>Logout</i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className={Styles.layout1}>
            <Row className={Styles.desktopnav}>
              <Col sm="9">
                <div className={Styles.title}>GIG Payflow</div>
              </Col>
              <Col className={Styles.col2} sm="3">
                <i className="far fa-bell headingicon"></i>
                <i className="fa fa-sign-out-alt headingicon"></i>
                <i className={Styles.initials}>IA</i>
                <i className={Styles.name}>Anayo Adeolu</i>
                <i className="fa fa-chevron-down headingicon"></i>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div className={Styles.sectionbox}>
            <p className={Styles.sectitle}>Search by request Date</p>
            <div className={Styles.secheading}>
              <div>
                <Form className={Styles.webform}>
                  <Row className={Styles.inputalign}>
                    <Col>
                      <label>Start Date</label>
                      <input type="date" />
                    </Col>
                    <Col>
                      <label>End Date</label>
                      <input type="date" />
                    </Col>
                    <Col>
                      <label style={{ visibility: "hidden" }}>.</label>
                      <div>
                        <button type="submit">Search</button>
                      </div>
                    </Col>
                  </Row>
                </Form>

                <div className={Styles.mobileform}>
                  <button className={Styles.filterbutton1}>
                    {" "}
                    <i className="fa filtericon fa-filter" />
                    Filter
                  </button>

                  <button
                    onClick={handleSearchForm}
                    className={Styles.searchbutton2}
                  >
                    Search request by date
                  </button>
                </div>
                {searchForm && (
                  <Form className={Styles.mobileform}>
                    <div className={Styles.mobileinputalign}>
                      <div>
                        <label>Start Date</label>
                        <input type="date" />
                      </div>
                      <div style={{ paddingTop: "20px" }}>
                        <label>End Date</label>
                        <input type="date" />
                      </div>
                      <div>
                        <label style={{ visibility: "hidden" }}>.</label>
                        <div>
                          <button type="submit">Search</button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </div>
              <div>
                <label style={{ visibility: "hidden" }}>.</label>
                <div className={Styles.filterbox}>
                  <i className="fa filtericon fa-filter">
                    <span className="pl-2">Filter</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.sec2}>
            <div>
              <Row className={Styles.row}>
                <Col className={Styles.headtabs} sm="3">
                  <div>All</div>
                  <div>Approval</div>
                  <div>Pending</div>
                  <div>Denied</div>
                </Col>
              </Row>
            </div>
            <Row className={Styles.tabletitle}>
              <Col className={Styles.col1} sm="9">
                Today
              </Col>
              <Col className={Styles.col2} sm="3">
                <button className={Styles.button1}>
                  <i className="fa fa-book pr-2"></i> Excel
                </button>
                <button className={Styles.button2}>Process</button>
              </Col>
            </Row>
            <AuditTable onClick={() => setModalShow(true)} />
            <Row className={Styles.tabletitle}>
              <Col className={Styles.col1} sm="9">
                This week
              </Col>
              <Col className={Styles.col2} sm="3">
                <button className={Styles.button1}>
                  <i className="fa fa-book pr-2"></i> Excel
                </button>
                <button className={Styles.button2}>Process</button>
              </Col>
            </Row>
            <AuditTable />
            <Row className={Styles.tabletitle}>
              <Col className={Styles.col1} sm="9">
                Last Week
              </Col>
              <Col className={Styles.col2} sm="3">
                <button className={Styles.button1}>
                  <i className="fa fa-book pr-2"></i> Excel
                </button>
                <button className={Styles.button2}>Process</button>
              </Col>
            </Row>
            <AuditTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Audit;