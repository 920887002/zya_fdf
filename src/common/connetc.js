import {ethers} from 'ethers'

async function connect(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer= provider.getSigner(0)
    // const [account]= await window.ethereum.request({method:'eth_requestAccounts'})
    ethereum.enable();
    const signature = await signer.signMessage(" world");
}
export default connect;