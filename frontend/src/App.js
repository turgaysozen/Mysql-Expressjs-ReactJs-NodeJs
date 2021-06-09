import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [subscriptions, setSubscriptions] = useState([])
  const [orders, setOrders] = useState([])
  const [phoneNumber, setPhoneNumber] = useState("")
  const [subscriptionId, setSubscriptionId] = useState("")

  // get all subscriptions
  useEffect(() => {
    const fetchAllSubs = async () => {
      const res = await fetch('http://localhost:3001/api/subscriptions')
      const data = await res.json()
      setSubscriptions(data)
    }
    fetchAllSubs()
  }, [])

  // get all orders
  useEffect(() => {
    const fetchAllOrders = async () => {
      const res = await fetch('http://localhost:3001/api/orders')
      const data = await res.json()
      setOrders(data)
    }
    fetchAllOrders()
  }, [])

  // find customer info
  const findSubscription = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3001/api/getCustomerInfo/${phoneNumber}`)
    const data = await res.json()
    if (res.status === 200) setSubscriptions(data)
    else alert("customer info not found")
  }

  // find order
  const findOrder = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3001/api/getSubscriptionOrders/${subscriptionId}`)
    const data = await res.json()
    if (res.status === 200) setOrders(data)
    else alert("order details not found")
  }

  return (
    <div className="App">
      <h2>Find Subscription</h2>
      <div>
        <form onSubmit={findSubscription}>
          <label>
            <input placeholder="Phone Number" type="text" onChange={e => setPhoneNumber(e.target.value)} />
          </label>
          <input type="submit" value="Find" />
        </form>
      </div><br />
      <table style={{ width: "100%" }}>
        <tr>
          <th>SubscriptionId</th>
          <th>Firstname</th>
          <th>Address</th>
          <th>Location Name</th>
          <th>Sub City Name</th>
          <th>City Name</th>
          <th>Brand</th>
          <th>Phone Number</th>
          <th>Distributor Number</th>
        </tr>
        {subscriptions.map(s => {
          return (
            <tr key={s.subscriptionId}>
              <td>{s.subscriptionId}</td>
              <td>{s.fullname}</td>
              <td>{s.address}</td>
              <td>{s.locationName}</td>
              <td>{s.subCityName}</td>
              <td>{s.cityName}</td>
              <td>{s.brand}</td>
              <td>{s.phoneNumber}</td>
              <td>{s.distributorNumber}</td>
            </tr>
          )
        })}
      </table><br />
      <hr />
      <h2>Find Order</h2>
      <div>
        <form onSubmit={findOrder}>
          <label>
            <input placeholder="SubscriptionId" type="text" onChange={e => setSubscriptionId(e.target.value)} />
          </label>
          <input type="submit" value="Find" />
        </form>
      </div><br />
      <table style={{ width: "100%" }}>
        <tr>
          <th>SubscriptionId</th>
          <th>Delivery Date</th>
          <th>Payment Method</th>
          <th>Products</th>
          <th>Total Amount</th>
          <th>Status</th>
        </tr>
        {orders.map(s => {
          return (
            <tr key={s.orderId}>
              <td>{s.subscriptionId}</td>
              <td>{s.deliveryDate}</td>
              <td>{s.paymentMethod}</td>
              <td>{s.products.map(e => e.product)}</td>
              <td>{s.totalAmount} TL</td>
              <td>{s.status}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;
