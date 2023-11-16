import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleBudgetChange = (event) => {
        let updatedBudget = parseInt(event.target.value);

        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (updatedBudget >= totalExpenses) {
            setNewBudget(updatedBudget);
        } else {
            alert("Budget cannot be lower than total spending!");
        }
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setSelectedCurrency(selectedCurrency);

        // Dispatch action to update the currency in the context
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className='alert alert-secondary'>
          
            <span>Currency:</span>
            <select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="custom-select"
                style={{ marginLeft: '1rem', width: '6rem' }}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            
            <br />

            <label htmlFor="budgetInput">Budget:</label>
            
            <span>{currency}</span>
        
            <input
                id="budgetInput"
                type="number"
                step="10"
                min={expenses.reduce((total, item) => total + item.cost, 0)}
                value={newBudget}
                onChange={handleBudgetChange}
                style={{ marginTop: '0.5rem', width: '10rem' }}
            />
        </div>
    );
};

export default Budget;
