import React,{useReducer} from 'react';

//intialstate
const initialState={
  transactions:[]
}

export const GlobalContext = React.createContext(initialState);

const reducer= (state,action)=>{
  switch(action.type){
    case 'ADD':
      return {
        ...state, transactions:[action.payload,...state.transactions]
      }
    case 'DEL':
      return {
        ...state,transactions: state.transactions.filter(transaction=>transaction.id !=action.payload)
      }
  }
}

const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);

    //actions
    function addtransaction(transaction){
        dispatch({
            type:'ADD',
            payload:transaction
        })
    }

    function deletetransaction(id){
        dispatch({
            type:'DEL',
            payload:id
        })
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,addtransaction,deletetransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;