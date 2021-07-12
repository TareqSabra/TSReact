import Navbar from "react-bootstrap/Navbar";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import Logo from "../../Resources/Pictures/Logo/logo.svg";
import React from "react";
interface Props {
  Taps: { tapName: string; tapTitel: string; tapUrl: string }[];
  navInfo: {
    retweetValue: number;
    favValue: number;
    cart_badeValue: number;
    cartValue: number;
  };
}

export const Nav: React.FC<Props> = ({ Taps, navInfo }) => {
  return (
    <div>
      <div>
        <Navbar expand="lg" variant="dark" bg="light" className="mh-25">
          <Navbar.Brand href="#home">
            <img alt="logo" src={Logo} width="120" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Brand className="text-dark mr-3">
              <Badge badgeContent={navInfo.retweetValue} color="error">
                <RepeatIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand className="text-dark mr-4">
              <Badge badgeContent={navInfo.favValue} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand className="text-dark mr-4">
              <Badge badgeContent={navInfo.cart_badeValue} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Navbar.Brand>
            <Navbar.Brand>
              <Navbar.Text className="text-dark text-center">
                <div>Your Cart</div>
                <div>{"$" + navInfo.cartValue}</div>
              </Navbar.Text>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
        <Navbar expand="lg" variant="dark" bg="dark" className="mh-20">
          <Navbar.Toggle />
          <Navbar.Collapse>
            {Taps.map((item, index) => {
              return (
                <Navbar.Brand
                  href={item.tapUrl}
                  className={"ml-5 font-weight-bold text-light"}
                >
                  {item.tapTitel}
                </Navbar.Brand>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
