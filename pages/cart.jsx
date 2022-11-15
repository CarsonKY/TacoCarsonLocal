import styles from "../styles/Cart.module.css";
// @ts-ignore
import Image from "next/image";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
// @ts-ignore
} from "@paypal/react-paypal-js";
import { reset } from "../redux/cartSlice";

// This values are the props in the UI



const Cart = () => {
    const [open, setOpen] = useState(false);
    const amount = "8.00";
const currency = "USD";
const style = {"layout":"vertical"};

    const dispatch = useDispatch()
    // @ts-ignore
    const cart = useSelector((state)=>state.cart);

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
            <tbody>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </tbody>
          <tbody>
          {cart.products.map(product=>(
              
          <tr className={styles.tr} key={product._id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.extras.map(extra=>(
                    <span key={extra.id}>{extra.text}</span>
                ))}
                
              </span>
            </td>
            <td>
              <span className={styles.prices}>${product.prices}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>${product.prices * product.quantity}</span>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {/* {cart.total} */}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$8.00
            {/* {cart.total} */}
          </div>
          {open ? (

<PayPalScriptProvider
                options={{
                    "client-id": "AXGKVDt_2Wh6CFCLvs6i7BPWYBUQaLZ8lJaupL-1ugKjiAa7_3Dt-HddvZhSipwUTMzrpZ6XBkNvnUyL",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>

          ) : (
          <button onClick={()=>setOpen(true)} className={styles.button}>PLACE ORDER</button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Cart;