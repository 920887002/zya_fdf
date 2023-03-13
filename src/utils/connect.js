import { data } from 'autoprefixer';
import {ethers} from 'ethers'
import FDFStakingABI from '../contract/FDFStaking.json';
import IERC20 from '../contract/IERC20.json';
let vm=null;
const sendThis=(_this)=>{
    vm=_this
}
//合约地址实例
function getContractObj(Address,abi){
    const contractObj=new ethers.Contract(Address,abi,provider().getSigner())
    return contractObj
}
 function provider(){
    const provider=new ethers.providers.Web3Provider(window.ethereum)
    return provider
}
//获取地址实例
 function getFDFstakingObj(){
    const contractFDFstaking=new ethers.Contract(FDFStakingABI.contractAddress,FDFStakingABI.abi,provider())
    return contractFDFstaking
}
//获取用户信息
 async function getUserinfo(address){
    const contractFDFstaking= getFDFstakingObj()
    const userinfo=await contractFDFstaking.getUserIDO(address);
        if(parseInt(userinfo.referrer,16)===0){
        vm.$store.state.user.UserAddress=""
        vm.$store.state.user.fdfAmount="0"
        vm.$store.state.user.nftNums="0"
        vm.$store.state.user.registers="0"
        vm.$store.state.user.amount="0"
        vm.$store.state.user.invites="0"
        vm.$store.state.user.inviteAmount="0"
        return false
    }
    vm.$store.state.user.UserAddress=address
    vm.$store.state.user.fdfAmount=parseInt(ethers.utils.formatUnits(userinfo.fdfAmount,18))
    vm.$store.state.user.nftNums=userinfo.nftNums
    vm.$store.state.user.registers=userinfo.registers
    vm.$store.state.user.amount=parseInt(ethers.utils.formatUnits(userinfo.amount,18))
    vm.$store.state.user.invites=userinfo.invites
    vm.$store.state.user.inviteAmount=userinfo.inviteAmount
    return true;
}
//链接钱包
 async function connect(){
    const [account]= await window.ethereum.request({method:'eth_requestAccounts'})
    vm.$store.state.UserAddress=account;
    const reselut=await getUserinfo(account);
    return reselut
}
//检查钱包变更
window.ethereum.on('accountsChanged',async ([newAddress])=>{
    vm.$store.state.user.UserAddress=newAddress;
    const reselut=await getUserinfo(newAddress)
    return reselut
})
//获取IDO信息
async function getIDOInfo(){
    const IDOinfo=await contractFDFstaking.getIDOInfo()
}
//参与抢购
async function buyFDF(){
    // const IERC20usdt=getContractObj("0x232D2a478767E9Ac8D6711754e89050E69fF8e62",IERC20.abi)
    // const allowancce=await IERC20usdt.approve("0x225a41ec10950ae0d4d691C87023D1f76bCD3c8A",ethers.utils.parseUnits("1000",18))
    const FDFcontractObj= await getContractObj("0x225a41ec10950ae0d4d691C87023D1f76bCD3c8A",FDFStakingABI.abi)
    const owner= await FDFcontractObj.buyFDF(ethers.utils.parseUnits("100",18));
}
export default {sendThis,connect,getUserinfo,getIDOInfo,provider,buyFDF,getContractObj};