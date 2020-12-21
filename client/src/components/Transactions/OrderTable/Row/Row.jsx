import { TableRow, TableCell, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import makeStyles from "./style";

import orderCancelIcon from "../../../../assets/icons/order-cancel.svg";
import orderSuccessIcon from "../../../../assets/icons/order-success.svg";
import orderWaitingAcceptIcon from "../../../../assets/icons/order-waiting-accept.svg";

export default function Row({ row, index, handleApprove, handleCancel }) {
  const classes = makeStyles();

  return (
    <>
      <TableRow className={`${classes.root} ${classes.tableHead}`}>
        <TableCell className={classes.tableCell} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {row.orderedTo.fullName}
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
            <img src={orderWaitingAcceptIcon} alt="icon1" />
          ) : row.status === "success" ? (
            <img src={orderSuccessIcon} alt="icon2" />
          ) : row.status === "canceled" ? (
            <img src={orderCancelIcon} alt="icon3" />
          ) : (
            <Link
              style={{ textDecoration: "none" }}
              to={`/view-project/${row.id}`}
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
                View Project
              </Button>
            </Link>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}
