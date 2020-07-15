import React from 'react';
import { GoodServiceConsumer } from '../goodstore-sevices-contex';

const withGoodstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GoodServiceConsumer>
                {
                    (goodstoreService) =>{
                        return(
                        <Wrapped {...props} goodstoreService={goodstoreService}/>
                        )
                    }
                }
            </GoodServiceConsumer>
        );
    }
};

export default withGoodstoreService;