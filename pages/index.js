import React ,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';



const campaignIndex = new CampaignIndex();
campaignIndex.render();


class CampaignIndex extends Component {


    static async getInitialProps(){

        const campaigns = await factory.methods.getDeployedCampaigns().call()
        return {campaigns};
    }


    renderCampaigns(){

        const items = this.props.campaigns.map(address=>{
        return{

            header: address,
            description: <a>View Campaign </a>,
            fluid :true
        };
     });

        return <Card.Group items={items} />
    }
    render(){
        return <div>
            
            {this.renderCampaigns()}
            <Button content="Create Campaign"
             icon="add circle"
             primary
             />
            </div>
    }
            
           
        
}


export default CampaignIndex;