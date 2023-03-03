const initialState = {
  owners: [],
  products: [],
  isLoading: 1,
  showModal: false
};

function ownersReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_OWNERS':
      const ownersData = action.payload
      return { ...state,  owners: [...ownersData ]};
    case 'FETCH_PRODUCTS':
      return {...state, products: [...action.payload]};
    case 'OWNER_MODAL':
      return { ...state, showModal: action.payload };
    default:
      return { ...state };
  }
}

export default ownersReducer;