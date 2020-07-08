import React from 'react';
import { GoodstoreServiceConsumer } from '../goodstore-sevices-contex';

const withGoodstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GoodstoreServiceConsumer>
                {
                    (goodstoreService) =>{
                        return(
                        <Wrapped {...props} goodstoreService={goodstoreService}/>
                        )
                    }
                }
            </GoodstoreServiceConsumer>
        );
    }
};

export default withGoodstoreService;