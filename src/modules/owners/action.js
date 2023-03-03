import * as ownerService from './service';

export const fetchOwners = () => {
  return (dispatch) => {
    ownerService.getOwners()
      .then(response => {
        dispatch({ type: 'FETCH_OWNERS', payload: response.data });
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const deleteOwner = (id) => {
  return (dispatch) => {
    ownerService.deleteOwner(id)
      .then(response => {
        console.log('response', response);
        dispatch(fetchOwners());
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const addOwner = (owner) => {
  return (dispatch) => {
    ownerService.addOwner(owner)
      .then(response => {
        dispatch(openOrCloseAddOwnerModal(false));
        dispatch(fetchOwners());
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const openOrCloseAddOwnerModal = (isShow) => {
  return (dispatch) => {
    console.log('isShow', isShow)
    dispatch({ type: 'OWNER_MODAL', payload: isShow });
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    ownerService.getProducts()
      .then(response => {
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data.products });
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    ownerService.deleteProduct(id)
      .then(response => {
        console.log('response deleteProduct', response)
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}