  
import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Mac Lipstick",
      description:
        "Langhoudend, Volledig dekkend, Volledig matte finish",
      price: 20.0,
      image:
        "https://m.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_M2LP06_640x600_0.jpg",
    },
    {
      id: 2,
      title: "PRO Lip Palette / 6 Modern Browns",
      description:
        "Klaar backstage, Professioneel, Draagbaar",
      price: 43.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_MLRK01_640x600_0.jpg",
    },
    {
      id: 3,
      title: "In Extreme Dimension 3D Black Lash Mascara",
      description:
        "Dramatische volume, extreme lengte/krul, super-zwarte formule",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_MN6501_640x600_0.jpg",
    },
    {
      id: 4,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_M6JC02_640x600_0.jpg",
    },
    {
      id: 5,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_M39H07_640x600_0.jpg",
    },
    {
      id: 6,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_SJC006_640x600_0.jpg",
    },
    {
      id: 7,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_M53C01_640x600_0.jpg",
    },
    {
      id: 8,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_S88C01_640x600_0.jpg",
    },
    {
      id: 9,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_SGFJ01_640x600_0.jpg",
    },
    {
      id: 10,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_SCA001_640x600_0.jpg",
    },  {
      id: 11,
      title: "Studio Fix Fluid SPF 15",
      description:
        "Volledige dekking, Matte Finish, Beheerst talg",
      price: 150.0,
      image:
        "https://www.maccosmetics.nl/media/export/cms/products/640x600/mac_sku_SJC227_640x600_0.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;