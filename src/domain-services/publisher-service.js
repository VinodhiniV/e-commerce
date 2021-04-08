
const axios = require('axios');

function PublisherService() {
    this.publish = async (event) => {
        
        console.log('Successfully publishing Orders Event: ', event);
        await axios.post('http://localhost:4000/events', {
            type: 'OrderCreated',
            data: {
              event
            }
          });
    }   
}

module.exports = PublisherService