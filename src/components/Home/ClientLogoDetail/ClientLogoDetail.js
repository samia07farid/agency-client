import React from 'react';

const ClientLogoDetail = ({client}) => {
    return (
        <div className="mr-5 pr-5">
                <img style={{height: '40px'}} src={client.logo} alt=""/>
        </div>
    );
};

export default ClientLogoDetail;