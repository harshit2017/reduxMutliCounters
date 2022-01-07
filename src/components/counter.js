import { incNumber, decNumber } from "../actions";
import React from 'react';
import { connect } from 'react-redux';


const Counters = (props) => {

    const renderCounters = () => {
        return props.counters.map((value, i) => {
            return (
                <div key={i}>
                    <h1>{value}</h1>
                    <button onClick={() => props.decNumber(i)}>-</button>
                    <button onClick={() => props.incNumber(i)}>+</button>
                </div>)
        });
    }
    return (
        <div>{renderCounters()}</div>);
};


const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
};

const mapDispatchToProps = () => {
    return {
        incNumber,
        decNumber
    }
};


export default connect(mapStateToProps, mapDispatchToProps())(Counters);

