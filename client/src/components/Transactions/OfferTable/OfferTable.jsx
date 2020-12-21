import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

// components
import Row from "./Row/Row";
import makeStyles from "./style";

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

function OfferTable({ handleApprove, handleCancel }) {
  const classes = makeStyles();
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const { myOffer } = state;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className={classes.tableHeading}>
          <TableRow>
            <TableCell className={classes.tableCell} width={2}>
              No.{" "}
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Client
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
          {myOffer.map((row, index) => (
            <Row
              handleApprove={handleApprove}
              handleCancel={handleCancel}
              index={index}
              key={row.id}
              row={row}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OfferTable;
