import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react'
import LarryComp from './LarryComp';


test ('test the basic PersonForm', async () => {
    console.log('Does this work');
    
    const myCountFunc = jest.fn();
    
    render(<LarryComp countFunc={myCountFunc}></LarryComp>);
    // screen.debug();

    click('LarryComp');

    const el = screen.getByText(/larrycomp/i);

    console.log(myCountFunc.mock.calls.length);

    // fireEvent.click(
    //     el
    // );

});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}    