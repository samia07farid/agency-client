import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import ClientLogoDetail from '../ClientLogoDetail/ClientLogoDetail';

const clientLogoInfo = [
    {
        logo: slack
    },
    {
        logo: google
    },
    {
        logo: uber
    },
    {
        logo: netflix
    },
    {
        logo: airbnb
    },
]

const ClientLogo = () => {
    return (
        <div className="d-flex flex-row justify-content-center">
            {
                clientLogoInfo.map(client => <ClientLogoDetail client={client}></ClientLogoDetail>)
            }
        </div>
    );
};

export default ClientLogo;