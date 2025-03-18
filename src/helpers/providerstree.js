import React from "react";

const BuildProviderTree = (providers) => ({children}) => 
    providers.reduce((AccumulatedProviders, Provider) => {
        return <Provider> {AccumulatedProviders} </Provider>
    },children)

    export default BuildProviderTree;