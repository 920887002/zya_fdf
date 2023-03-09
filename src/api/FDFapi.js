import { ethers } from 'ethers'
export async function conncetWallet(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const [account]= await window.ethereum.request({method:'eth_requestAccounts'})
    window.ethereum.on('accountsChanged',([newAddress])=>{
        console.log(newAddress)
    })
    return account
}