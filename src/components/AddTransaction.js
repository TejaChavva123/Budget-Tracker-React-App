import React,{useContext,useState} from 'react';
import { GlobalContext } from '../contexts/Global';
const AddTransaction = () => {
    const {addtransaction} = useContext(GlobalContext);
    const [amount,setAmount] = useState(0);
    const [text,setText] = useState("");

    const submit=(e) => {
        e.preventDefault();
        const newTransaction = {
            text,
            id: Math.floor(Math.random()*100000000),
            amount: +amount
        }
        addtransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add New Transaction Here</h3>
            <form onSubmit={submit}>
                <label>Text</label>
                <input  type="text" value={text} placeholder='Enter Text Here' onChange={(e)=>setText(e.target.value)}/>

                <label>Amount</label>
                <input  type="number" value={amount} placeholder='Enter Amount Here' onChange={(e)=>setAmount(e.target.value)}/>

                <button className="btn">Add transaction</button>
            </form>
            
        </div>
    );
};

export default AddTransaction;