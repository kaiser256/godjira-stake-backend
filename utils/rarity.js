const axios = require('axios');

const GEN_BASE_URL = 'https://godjira-metadata-bucket.s3.ap-south-1.amazonaws.com/'
const GEN2_BASE_URL = 'https://godjiragen2-metadata.s3.ap-south-1.amazonaws.com/'

const getRarityGen = async (tokenId) => {
    try {
        const { data } = await axios.get(`${GEN_BASE_URL}${tokenId}`)
        console.log(data["attributes"][data["attributes"].length - 1]['value'])
        if (data["attributes"][data["attributes"].length - 1]['trait_type'] == 'LEGENDARY') {
            if (data["attributes"][data["attributes"].length - 1]['value'] == 'Legendary') {
                return 2
            }
            else {
                return 1
            }
        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(error.message)
        return false
    }

}

const getRarityGen2 = async (tokenId) => {
    try {
        const { data } = await axios.get(`${GEN2_BASE_URL}${tokenId}`)
        console.log(data["attributes"][0]['value'])
        if (data["attributes"][0]['trait_type']=='Type') {
            if(data["attributes"][0]['value']=='Legendary'){
                return 3
            }
            else if(data["attributes"][0]['value']=='Rare'){
                return 2
            }
            else{
                return 1
            }

        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(error.message)
        return false
    }

}

const test = async () => {
    console.log(await getRarityGen(2))
}

test()
module.exports = {getRarityGen,getRarityGen2}

