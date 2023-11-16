import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components'; // Import styled-components library

// Styled components for the increase and decrease buttons
const IncreaseButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: green;
    color: white;
`;

const StyledTiDelete = styled(TiDelete)`
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: red;
    color: white;
`;

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            < IncreaseButton onClick={event=> increaseAllocation(props.name)}>+</IncreaseButton>
    
            </td>
        <td><StyledTiDelete size='1.5em' onClick={handleDeleteExpense}>-</StyledTiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
