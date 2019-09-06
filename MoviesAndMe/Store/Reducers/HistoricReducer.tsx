const initialState = {
    historicFilms: []
  }
  
  function manageHistoricFilms(state = initialState, action) {
    let newState
    switch(action.type){
      case 'TOGGLE_FILMDETAIL':
        if(state.historicFilms.findIndex(item => item.id === action.value.id) === -1){
          newState = {...state, historicFilms: {...state.historicFilms, ...action.value}}
        }
        return newState || state
      case 'REMOVE_HISTORIC_FILM':
        if(state.historicFilms.findIndex(item => item.id === action.value.id) !== -1){
          newState = {...state, 
                      historicFilms: state.historicFilm.filter(
                        (item, index) =>  item.id !== action.value.id
                      )}
        }
        return newState || state
      case 'RESET_HISTORIC':
        newState = {...state,
                   historicFilms: []}
        return newState
      default:
        return state
    }
    
  }
  
  export default manageHistoricFilms