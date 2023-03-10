import { data } from 'autoprefixer';
import {ethers} from 'ethers'
import FDFStakingABI from '../contract/FDFStaking.json';
const contractFDFstaking=new ethers.Contract(FDFStakingABI.contractAddress,FDFStakingABI.abi,provider())
export function provider(){
    const provider=new ethers.providers.Web3Provider(window.ethereum)
    return provider
}
export function getFDFstakingObj(){
    const contractFDFstaking=new ethers.Contract(FDFStakingABI.contractAddress,FDFStakingABI.abi,provider())
    return contractFDFstaking
}
export async function getUserinfo(self,address){
    const contractFDFstaking= getFDFstakingObj()
    const userinfo=await contractFDFstaking.getUserIDO(address);
    // if(parseInt(userinfo.referrer,16)===0){
    //     self.$store.state.UserAddress=""
    //     return false
    // }
    self.$store.state.user.UserAddress=address
    self.$store.state.user.fdfAmount=ethers.utils.formatUnits(userinfo.fdfAmount,18)
    self.$store.state.user.nftNums=userinfo.nftNums
    self.$store.state.user.registers=userinfo.registers
    self.$store.state.user.amount=userinfo.amount
    self.$store.state.user.invites=userinfo.invites
    self.$store.state.user.inviteAmount=userinfo.inviteAmount
    return true;
}
export async function connect(self){
    const [account]= await window.ethereum.request({method:'eth_requestAccounts'})
    self.$store.state.UserAddress=account;
    window.ethereum.on('accountsChanged',async ([newAddress])=>{
        self.$store.state.user.UserAddress=newAddress;
        const reselut=await getUserinfo(self,newAddress)
        return reselut
    })
    const reselut=await getUserinfo(self,account);
    return reselut
}
export async function getIDOInfo(self){
    const IDOinfo=await contractFDFstaking.getIDOInfo()
}
export default {connect,getUserinfo,getIDOInfo};