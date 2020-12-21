import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { SET_MY_ORDER, SET_MY_OFFER } from "../../constant/ActionTypes";
import {
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { API } from "../../config/api";
import Modal from "../Modal/Modal";

import OrderTable from "./OrderTable/OrderTable";
import OfferTable from "./OfferTable/OfferTable";

import makeStyles from "./style";
function Transactions() {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const [fetch, setFetch] = useState(false);
  const [type, setType] = useState("my-order");

  const classes = makeStyles();

  const getMyOrder = async () => {
    try {
      const response = await API("/transactions?status=my-order");
      if (response.status === 200) {
        dispatch({
          type: SET_MY_ORDER,
          payload: response.data.data.myOrder,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const getMyOffer = async () => {
    try {
      const response = await API("/transactions?status=my-offer");
      if (response.status === 200) {
        dispatch({
          type: SET_MY_OFFER,
          payload: response.data.data.myOffer,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getMyOrder();
    getMyOffer();
  }, [fetch]);

  const handleApprove = async (id) => {
    try {
      const response = await API.patch(`/transactions/${id}`);
      if (response.status === 200) {
        setFetch((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = async (id) => {
    try {
      const response = await API.patch(`/transactions/cancel/${id}`);
      if (response.status === 200) {
        setFetch((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Modal />
      <Container maxWidth="lg">
        <FormControl
          size="small"
          variant="outlined"
          style={{
            marginBottom: "1.2rem",
          }}
        >
          <Select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className={classes.selectArtist}
            displayEmpty
          >
            <MenuItem value="my-order">My Order</MenuItem>
            <MenuItem value="my-offer">My Offer</MenuItem>
          </Select>
        </FormControl>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            {type === "my-order" ? (
              <OrderTable />
            ) : (
              <OfferTable
                handleApprove={handleApprove}
                handleCancel={handleCancel}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Transactions;
