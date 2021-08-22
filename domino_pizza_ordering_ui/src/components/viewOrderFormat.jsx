import React from 'react';

function ViewOrderFormat ({Order}){

    const toppingsArea = (area) => {
        if(area == "0")
            return "Whole";
        else if(area == "1")
            return "First-Half";
        else if(area == "2")
            return "Second-Half";
    }

    return (
        <div >
        { Order.pizza.map((pizza, pizzaIndex) => {
            return (
            <div key={pizzaIndex} style={{textIndent:'50px'}}>
                <div key={pizza.id.number}> Pizza {pizza.id.number} - {pizza.size[0]}, {pizza.crust[0]}, {pizza.type[0]}</div> 
                { pizza.toppings ? (
                    pizza.toppings.map((toppings, toppingIndex) => {
                        return <div key={toppingIndex} style={{textIndent:'100px'}}>Toppings {toppingsArea(toppings.id.area)} {
                            toppings.item.map((i, index) => {
                                return <div key={index} style={{textIndent:'150px'}}>{i}</div>
                            })
                        } </div>
                    })
                ) : (<></>)
                } 
            </div>);
        }) }
        </div>
    );
}

export default ViewOrderFormat;