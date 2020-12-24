import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

// components
import Row from "./Row/Row";
import makeStyles from "./style";

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

function OrderTable({ transactions, handleApprove, handleCancel }) {
  const classes = makeStyles();
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const { myOrder } = state;

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = (data) => {
    setModalData(data);
    handleOpen();
  };

  // End modal state

  // Modal

  const ModalDetail = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title" style={{ color: "#2FC4B2" }}>
                {modalData.title}
              </h2>
              <p id="transition-modal-description">{modalData.description}</p>
              <br />
              <br />
              <h4>Price: {modalData.price}</h4>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <>
      <ModalDetail />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHeading}>
            <TableRow>
              <TableCell className={classes.tableCell} width={2}>
                No.{" "}
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Vendor
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Order
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Start Project
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                End Project
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Status
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {" "}
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrder.map((row, index) => (
              <Row
                handleApprove={handleApprove}
                handleCancel={handleCancel}
                handleModal={handleModal}
                index={index}
                key={row.id}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default OrderTable;
