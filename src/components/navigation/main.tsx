import OrderStatus from "../order-status";
import logo from '../../assets/logo.svg';

interface MainProps {}

const Main = () => {
  return (
  <div className="bg-main-bg w-screen h-screen">
    <div className="flex justify-center flex-col">
      <div className="w-full h-1/5 p-5 flex justify-center">
        <img src={logo} className="" alt="logo" />
      </div>

      <div className="w-full h-1/5 p-5 flex justify-center">
        <h1>Order Status</h1>
      </div>

      <OrderStatus />
    </div>
  </div>);
};

export default Main;
