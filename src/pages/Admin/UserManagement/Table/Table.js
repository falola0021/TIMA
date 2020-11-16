import React, { useState, useRef, useEffect } from "react";
import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Styles from "./Table.module.css";
import SearchFilter from "../../../../components/SearchFilter/SearchFilter";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import RoleDataService from "../../../../services/role.service";
import UserCreate from "../UserCreate";
import { Row, Col, Form } from "react-bootstrap";

import kassandahmobile from "../../../assets/kassandahmobilepurple.png";
import UserDataService from "../../../../services/user.service";
import {
  Drawer,
  DrawerBody,
  // DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ThemeProvider,
  // Textarea,
} from "@chakra-ui/core";

//for Validation start

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const name = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        The name of vendor cannot be less than 3 characters.
      </div>
    );
  }
};

//form validation end

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },

  {
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "department",
    numeric: true,
    disablePadding: false,
    label: "Department",
  },

  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "action", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={Styles.tablehead}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className={Styles.tableheader}
            color="red"
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const [size, setSize] = React.useState("lg");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const handleCreateRole = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  return (
    <>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div className={Styles.tabletop}>
              <span>
                <SearchFilter />
              </span>
              <span className={Styles.tablename}>
                <button onClick={() => handleCreateRole(size)}>
                  <i className="fa fa-plus pr-2"></i> Create Department
                </button>
              </span>{" "}
            </div>
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <i className="fa fa-trash"></i>

              {/* <DeleteIcon /> */}
            </IconButton>
          </Tooltip>
        ) : (
          <span></span>
        )}
      </Toolbar>

      <ThemeProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerContent>
            <DrawerBody style={{ paddingTop: "6%" }}>
              <img
                src={kassandahmobile}
                alt="logo"
                style={{ width: "30px", height: "45px" }}
              />
              <UserCreate closeDrawer={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
    alignItems: "center",
  },
}));

export default function EnhancedTable(props, { preview }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [size, setSize] = React.useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerInfo, setDrawerInfo] = React.useState({});
  const roleStore = useSelector((state) => state.roleReducer);
  const [users, setUsers] = React.useState([]);
  const [roles, setRoles] = React.useState([]);

  const [roleId, setRoleId] = useState("");
  const [userId, setUserId] = useState("");

  const [roleId2, setRoleId2] = useState("");
  const [userId2, setUserId2] = useState("");

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const checkBtn = useRef();

  const dispatch = useDispatch();
  const form = useRef();

  const size1 = "xs";
  const size2 = "lg";
  //working with API

  const retrieveUsers = async () => {
    await UserDataService.getAll()
      .then((response) => {
        setUsers(response.data.data.userList);
        console.log("got here", response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);
  const retrieveRoles = async () => {
    await RoleDataService.getAll()
      .then((response) => {
        setRoles(response.data.data);
        console.log(roles);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    retrieveRoles();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.userId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, userId) => {
    const selectedIndex = selected.indexOf(userId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const handleShowMore = (event, gotuser, newSize) => {
    setDrawerInfo(gotuser);
    setSize(newSize);
    onOpen();
  };

  const attachChangeRole = (e) => {
    const roleId = e.target.value;
    setRoleId(roleId);
  };
  const attachChangeUser = (e) => {
    const userId = e.target.value;
    setUserId(userId);
  };

  const attachRoleToUser = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.attachRoleToUser(roleId, drawerInfo.userId)
        .then((response) => {
          setSuccessful(true);
          setMessage(response.data.message);

          setLoading(false);

          setTimeout(function () {
            onClose();
            setMessage("");
          }, 1000);
        })
        .catch((e) => {
          setMessage(e.response.data.message);
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  const detachChangeRole = (e) => {
    const roleId2 = e.target.value;
    setRoleId2(roleId2);
  };
  const detachChangeUser = (e) => {
    const userId2 = e.target.value;
    setUserId2(userId2);
  };

  const detachRoleToUser = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading2(true);
    setMessage("");
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      UserDataService.detachRoleToUser(roleId2, drawerInfo.userId)
        .then((response) => {
          setSuccessful(true);
          setMessage(response.data.message);

          setLoading2(false);

          setTimeout(function () {
            onClose();
          }, 1000);
        })
        .catch((e) => {
          setMessage(e.response.data.message);
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (userId) => selected.indexOf(userId) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={Styles.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users.length}
            />
            <TableBody>
              {stableSort(users, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((gotuser, index) => {
                  const isItemSelected = isSelected(gotuser.userId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={gotuser.userId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          // key={gotuser.userId}
                          onClick={(event) =>
                            handleClick(event, gotuser.userId)
                          }
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        // key={gotuser.userId}
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotuser, size1)
                        }
                      >
                        {gotuser.firstName} {gotuser.lastName}
                      </TableCell>

                      <TableCell
                        // key={gotuser.userId}
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotuser, size1)
                        }
                      >
                        {gotuser.userId}
                      </TableCell>
                      <TableCell
                        // key={gotuser.userId}
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotuser, size1)
                        }
                      >
                        {gotuser.department}
                      </TableCell>
                      <TableCell
                        align="left"
                        onClick={(event) =>
                          handleShowMore(event, gotuser, size1)
                        }
                      >
                        {gotuser.email} {gotuser.id}
                      </TableCell>
                      <TableCell key={gotuser._id} align="left">
                        {gotuser.status === "inactive" && (
                          <button className={Styles.editbutton}>
                            Activate User
                          </button>
                        )}
                        {gotuser.status === "active" && (
                          <button className={Styles.deletebutton}>
                            Deactivate User
                          </button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={roleStore.role.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <ThemeProvider>
        {size === "xs" ? (
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerContent>
              <DrawerBody>
                <img
                  src={kassandahmobile}
                  alt="logo"
                  style={{
                    width: "25px",
                    height: "35px",
                    marginTop: "20px",
                  }}
                />
                <div className={Styles.vendortitle}>User Details</div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Nmae: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.firstName} {drawerInfo.lastName}
                  </span>
                </div>

                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Department: </span>
                  <span className={Styles.vendorname}>
                    {drawerInfo.department}
                  </span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Role: </span>
                  <span className={Styles.vendorname}>{drawerInfo.role}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Email: </span>
                  <span className={Styles.vendorname}>{drawerInfo.email}</span>
                </div>
                <div className={Styles.vendor}>
                  <span className={Styles.vendornamelabel}>Status: </span>
                  <span className={Styles.vendorname}>{drawerInfo.status}</span>
                </div>

                <div className={Styles.vendortitle}>Attach Role</div>
                <Form1
                  onSubmit={attachRoleToUser}
                  ref={form}
                  className={Styles.form}
                >
                  <Form.Group>
                    <Select
                      style={{
                        border: " 1px solid #f3f3f3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                        marginBottom: "0",
                      }}
                      type="text"
                      name="roleId"
                      value={roleId}
                      onChange={attachChangeRole}
                      validations={[required]}
                      className={Styles.formcontrol}
                      as="select"
                    >
                      <option value="">- Select role -</option>
                      {roles.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.role}
                        </option>
                      ))}
                    </Select>
                  </Form.Group>
                  <Input
                    style={{
                      visibility: "hidden",
                      margin: "0",
                      position: "absolute",
                    }}
                    type="text"
                    name="userId"
                    value={drawerInfo.userId}
                    onChange={attachChangeUser}
                    validations={[required, name]}
                  />

                  <span>
                    <button
                      style={{
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        borderRadius: "3px",
                        color: "#ffffff",
                        border: " 1px solid #cdd0d3",
                        outline: "none",
                        width: "100%",
                        backgroundColor: " #4f26aa",
                        fontWeight: "bold",
                      }}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      Add
                    </button>
                  </span>
                  {successful && (
                    <span>
                      {message && (
                        <div className="form-group">
                          <div
                            className={
                              successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {message}
                          </div>
                        </div>
                      )}
                    </span>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form1>

                <div
                  style={{ marginTop: "30px" }}
                  className={Styles.vendortitle}
                >
                  Detach Role
                </div>
                <Form1
                  onSubmit={detachRoleToUser}
                  ref={form}
                  className={Styles.form}
                >
                  <Form.Group>
                    <Select
                      style={{
                        border: " 1px solid #f3f3f3",
                        backgroundColor: "rgba(59, 122, 254, 0.02)",
                        width: "100%",
                        padding: "6px 10px",
                        borderRadius: "3px",
                        outline: "none",
                        marginBottom: "0",
                      }}
                      type="text"
                      name="roleId2"
                      value={roleId2}
                      onChange={detachChangeRole}
                      // validations={[required]}
                      className={Styles.formcontrol}
                      as="select"
                    >
                      <option value="">- Select role -</option>
                      {roles.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.role}
                        </option>
                      ))}
                    </Select>
                  </Form.Group>
                  <Input
                    style={{
                      visibility: "hidden",
                      margin: "0",
                      position: "absolute",
                    }}
                    type="text"
                    name="userId2"
                    value={drawerInfo.userId}
                    onChange={detachChangeUser}
                    validations={[required, name]}
                  />

                  <span>
                    <button
                      style={{
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        borderRadius: "3px",
                        color: "#ffffff",
                        border: " 1px solid #cdd0d3",
                        outline: "none",
                        width: "100%",
                        backgroundColor: " #4f26aa",
                        fontWeight: "bold",
                      }}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      Remove
                    </button>
                  </span>
                  {successful && (
                    <span>
                      {message && (
                        <div className="form-group">
                          <div
                            className={
                              successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {message}
                          </div>
                        </div>
                      )}
                    </span>
                  )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form1>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : (
          <></>
        )}
      </ThemeProvider>
    </div>
  );
}
