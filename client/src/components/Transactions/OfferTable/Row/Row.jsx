import { TableRow, TableCell, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import makeStyles from "./style";

import orderCancelIcon from "../../../../assets/icons/order-cancel.svg";
import orderSuccessIcon from "../../../../assets/icons/order-success.svg";

export default function Row({ row, index, handleApprove, handleCancel }) {
  const classes = makeStyles();
  return (
    <>
      <TableRow className={`${classes.root} ${classes.tableHead}`}>
        <TableCell className={classes.tableCell} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {row.orderedBy.fullName}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {row.title}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {moment(row.startDate).format("D MMMM YYYY")}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {moment(row.endDate).format("D MMMM YYYY")}
        </TableCell>
        <TableCell
          className={`${classes.tableCell} ${
            row.status === "waiting accept"
              ? classes.yellowText
              : row.status === "success"
              ? classes.greenText
              : row.status === "canceled"
              ? classes.redText
              : classes.blueText
          } `}
          align="left"
        >
          {row.status}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {row.status === "waiting accept" ? (
            <>
              <Button
                size="small"
                style={{
                  marginRight: ".7rem",
                  textTransform: "capitalize",
                  fontFamily: "Nunito",
                  color: "white",
                  background: "red",
                }}
                onClick={() => handleCancel(row.id)}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleApprove(row.id)}
                style={{
                  textTransform: "capitalize",
                  fontFamily: "Nunito",
                  color: "white",
                  background: "#0ACF83",
                }}
                size="small"
                variant="contained"
              >
                Approve
              </Button>
            </>
          ) : row.status === "success" ? (
            <img src={orderSuccessIcon} alt="succcessIcon" />
          ) : row.status === "canceled" ? (
            <img src={orderCancelIcon} alt="cancelIcon" />
          ) : (
            <Link
              style={{ textDecoration: "none" }}
              to={`/upload-project/${row.id}`}
            >
              <Button
                style={{
                  textTransform: "capitalize",
                  fontFamily: "Nunito",
                  backgroundColor: "#0ACF83",
                }}
                size="small"
                variant="contained"
                color="primary"
              >
                Send Project
              </Button>
            </Link>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}
