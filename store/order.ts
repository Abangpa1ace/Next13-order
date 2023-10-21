import getTotalPrice from "@/utils/order/getTotalPrice";


const orderStore = 
  (set, get, store) => ({
    cartList: [],
    selectedProductId: '',
    // 장바구니에 항목 새로 추가
    addCartProduct: (product) => {
      set(state => {
        const cartList = state.cartList;
        const index = cartList.findIndex(cartItem => cartItem.id === product.id);

        // 이미 존재하는 상품이면, increase만
        if (index === -1) {
          cartList.push({ ...product, count: 1, totalPrice: product.price });
        }

        else {
          const targetProduct = cartList[index];
          const { count, price } = targetProduct;
  
          cartList[index] = {
            ...targetProduct,
            count: count + 1,
            totalPrice: getTotalPrice({ price, count: count + 1})
          }
        }
        
        return { cartList, selectedProductId: product.id }
      })
    },
    // 장바구니에 이미 존재하는 항목 개수 증가
    increaseCartProduct: (productId) => {
      set(state => {
        const cartList = state.cartList;
        const index = cartList.findIndex(cartItem => cartItem.id === productId);

        const targetProduct = cartList[index];
        const { count, price } = targetProduct;

        cartList[index] = {
          ...targetProduct,
          count: count + 1,
          totalPrice: getTotalPrice({ price, count: count + 1})
        }

        return { cartList }
      })
    },
    // 장바구니에 이미 존재하는 항목 개수 감소
    decreaseCartProduct: (productId) => {
      set(state => {
        const cartList = state.cartList;
        const index = cartList.findIndex(cartItem => cartItem.id === productId);

        // 상품이 1개만 남았으면 제거
        if (cartList[index].count === 1) {
          const nextCartList = cartList.filter(cartItem => cartItem.id !== productId);
          return {
            cartList: nextCartList,
            selectedProductId: nextCartList.length ? nextCartList[0].id : ''
          };
        }

        const targetProduct = cartList[index];
        const { count, price } = targetProduct;

        cartList[index] = {
          ...targetProduct,
          count: count - 1,
          totalPrice: getTotalPrice({ price, count: count - 1})
        }

        return { cartList }
      })
    },
    // 장바구니에서 항목 자체를 제거
    removeCartProduct: (productId) => {
      set(state => {
        const cartList = state.cartList.filter(cartItem => cartItem.id !== productId);

        return { cartList, selectedProductId: cartList.length ? productId === state.selectedProductId ? cartList[0].id : state.selectedProductId : '' };
      })
    },
    setSelectedProductId: (productId) => {
      set({ selectedProductId: productId })
    },
})

export default orderStore;