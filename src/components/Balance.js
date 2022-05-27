import React,{useContext} from 'react';
import { GlobalContext } from '../contexts/Global';

function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
      )
    }

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>(transaction.amount));
    const balance = amounts.reduce((acc,item)=>(acc+=item),0);
    const sign = balance<0 ? "-":"+"
    return (
        <div>
            <h3 className='balance'>Balance is: {sign} {moneyFormatter(balance)}</h3>
        </div>
    );
};

export default Balance;