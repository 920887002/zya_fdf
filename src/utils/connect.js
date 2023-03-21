import {ethers, providers} from 'ethers'
import FDFStakingABI from '../contract/FDFStaking.json';
import IERC20 from '../contract/IERC20.json';
import FNFTpool from '../contract/FNFTpool.json'
import Fsetting from '../contract/Fsetting.json'
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
//获取IDOstaking地址实例
 function getFDFstakingObj(){
    const contractFDFstaking=new ethers.Contract(FDFStakingABI.contractAddress,FDFStakingABI.abi,provider().getSigner())
    return contractFDFstaking
}
//获取IDO信息
async function getIDOInfo(){
    const IDOinfo=await getFDFstakingObj().getIDOInfo()

    vm.$store.state.IDOinfo.totalRegisterUser=parseInt(IDOinfo.totalRegisterUser,16)
    
}
//查询合约信息
async function getSysInfo(){
    const sysinfo = await getFDFstakingObj().getSysInfo()
    vm.$store.state.IDOinfo.stakingPool=Number(ethers.utils.formatUnits(sysinfo.stakingPool,6)).toFixed(2)
    vm.$store.state.IDOinfo.stakingPoolTime=ethers.utils.formatUnits(sysinfo.startTime,0)
    vm.$store.state.IDOinfo.timePassed=Date.parse(new Date())/1000-ethers.utils.formatUnits(sysinfo.startTime,0)
    vm.$store.state.IDOinfo.stakingPoolCountDown=Date.parse(new Date())/1000-ethers.utils.formatUnits(sysinfo.startTime,0)
}
//bignum转10进制
function transitionBignum(num,dec){
    return ethers.utils.formatUnits(num,dec)
}
//查询单个用户业绩信息
async function getuserInfoPer(address){
    if(address){
        const userinfoper=await getFDFstakingObj().userInfoPer(address)
        vm.$store.state.user.maxTeamDeposit=parseInt(ethers.utils.formatUnits(userinfoper.maxTeamDeposit,6))
        vm.$store.state.user.otherTeamDeposit=parseInt(ethers.utils.formatUnits(userinfoper.otherTeamDeposit,6))
        vm.$store.state.user.maxDeposit=parseInt(ethers.utils.formatUnits(userinfoper.maxDeposit,6))
        vm.$store.state.user.teamNum=parseInt(ethers.utils.formatUnits(userinfoper.teamNum,0))
        if(parseInt(userinfoper.level)>=1){
            vm.$store.state.user.star=parseInt(ethers.utils.formatUnits(userinfoper.level,0))+1
        }else{
            if(parseInt(ethers.utils.formatUnits(userinfoper.maxDeposit,6))>=100){
                vm.$store.state.user.star=parseInt(ethers.utils.formatUnits(userinfoper.level,0))+1
            }else{
                vm.$store.state.user.star=parseInt(ethers.utils.formatUnits(userinfoper.level,0))
            }
        }
    }
    else{
        console.log("no")
    }
}
//获取用户信息
 async function getUserinfo(address){
    const userinfo=await getFDFstakingObj().getUserIDO(address);
    //     if(parseInt(userinfo.referrer,16)===0){
    //     vm.$store.state.user.UserAddress=""
    //     vm.$store.state.user.fdfAmount="0"
    //     vm.$store.state.user.nftNums="0"
    //     vm.$store.state.user.registers="0"
    //     vm.$store.state.user.amount="0"
    //     vm.$store.state.user.invites="0"
    //     vm.$store.state.user.inviteAmount="0"
    //     return false
    // }
    await getFDFstakingObj().userOrders(address).then(res=>{
        vm.$store.state.user.userOrder=res
    })
    await downLevel1UserAddrs(address)
    vm.$store.state.user.UserAddress=address
    vm.$store.state.user.fdfAmount=parseInt(ethers.utils.formatUnits(userinfo.fdfAmount,18))
    vm.$store.state.user.nftNums=userinfo.nftNums
    vm.$store.state.user.registers=userinfo.registers
    vm.$store.state.user.amount=parseInt(ethers.utils.formatUnits(userinfo.amount,18))
    vm.$store.state.user.invites=userinfo.invites
    vm.$store.state.user.inviteAmount=userinfo.inviteAmount
    vm.$store.state.user.referrer=userinfo.referrer
    return true;
}
// 查询下一级用户所有地址
async function downLevel1UserAddrs(address){
    return await getFDFstakingObj().downLevel1UserAddrs(address).then(async res=>{
        await userDownLevel1(address,res.length)
    })
}
//链接钱包
 async function connect(){
    const [account]= await window.ethereum.request({method:'eth_requestAccounts'})
    vm.$store.state.user.UserAddress=account;
    if(ethers.utils.formatUnits(window.ethereum.chainId,0)==137){
        vm.$store.state.UserAddress=account
        getUserinfo(account)
        userRewardInfo(account)
    }else{
        vm.$store.state.user.UserAddress=''
        vm.$open('error',(vm.$t('errormessage.chainid')),(vm.$t('errormessage.errortitle')))
    }
}
//查询交易是否结束
async function checkTranstionsDone(txhash){
    const hashresult=await provider().waitForTransaction(txhash)
    return hashresult
}
//重置用户信息
function resetUserInfo(){
    vm.$store.state.user.UserAddress=""
    vm.$store.state.user.fdfAmount="0"
    vm.$store.state.user.nftNums="0"
    vm.$store.state.user.registers="0"
    vm.$store.state.user.amount="0"
    vm.$store.state.user.invites="0"
    vm.$store.state.user.inviteAmount="0"
    vm.$store.state.user.star="0"
    vm.$store.state.user.maxDeposit="0"
    vm.$store.state.user.referrer="0"
    vm.$store.state.user.otherTeamDeposit="0"
    vm.$store.state.user.maxTeamDeposit="0"
}
//检查钱包变更
window.ethereum.on('accountsChanged',async (newAddress)=>{
    if(newAddress.length===0){
        vm.$open('error',(vm.$t('errormessage.walleterror')),(vm.$t('errormessage.wallettitle')))
        resetUserInfo()
    }else{
        await getUserinfo(newAddress[0])
        getNFTpoolINFO(newAddress[0])
    }

})
//检查网络变更
 window.ethereum.on('chainChanged',async (chainId)=>{
    if(ethers.utils.formatUnits(chainId,0)!=137){
        vm.$open('error',(vm.$t('errormessage.chainid')),(vm.$t('errormessage.errortitle')))
        resetUserInfo()
    }
 })

//参与抢购
export async function buyFDF(amount){
    return new Promise(async (resolve,reject)=>{
        const IERC20usdt=getContractObj(FDFStakingABI.testUSDT,IERC20.abi)
        const allowancce=await IERC20usdt.approve(FDFStakingABI.contractAddress,ethers.utils.parseUnits(amount.toString(),6)).catch(res=>{
            vm.$store.state.tips.errormsg=res.message
            reject(res)
        })
        const allowanceRes=await provider().waitForTransaction(allowancce.hash)
        resolve(allowanceRes)
    }).then(async res=>{
        const FDFcontractObj= await getContractObj(FDFStakingABI.contractAddress,FDFStakingABI.abi)
        const buyFdf= await FDFcontractObj.buyFDF(ethers.utils.parseUnits(amount.toString(),6)).catch(res=>{
            vm.$store.state.tips.errormsg=res.data.message
        })
        const buyFdfRes = await checkTranstionsDone(buyFdf.hash)
        await getUserinfo(vm.$store.state.user.UserAddress)
        console.log(buyFdfRes)
        vm.$store.state.user.showBool=false
        return true;
    }).catch(res=>{
        vm.$store.state.tips.errormsg=res.data.message
    })
}
//查询用户资产详情
async function userRewardInfo(address){
    await getFDFstakingObj().userRewardInfo(address).then(res=>{
        vm.$store.state.userRewardInfo.totalCapitals=Number(ethers.utils.formatUnits(res.totalCapitals,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalStatic=Number(ethers.utils.formatUnits(res.totalStatic,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalLevel1=Number(ethers.utils.formatUnits(res.totalLevel1,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalLevel24=Number(ethers.utils.formatUnits(res.totalLevel24,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalLevel510=Number(ethers.utils.formatUnits(res.totalLevel510,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalLevel1115=Number(ethers.utils.formatUnits(res.totalLevel1115,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalLuck=Number(ethers.utils.formatUnits(res.totalLuck,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalFreeze=Number(ethers.utils.formatUnits(res.totalFreeze,6)).toFixed(2)
        vm.$store.state.userRewardInfo.freezeSplit=Number(ethers.utils.formatUnits(res.freezeSplit,6)).toFixed(2)
        vm.$store.state.userRewardInfo.totalRevenue=Number(ethers.utils.formatUnits(res.totalRevenue,6)).toFixed(2)
        vm.$store.state.userRewardInfo.pendingSplit=Number(ethers.utils.formatUnits(res.pendingSplit,6)).toFixed(2)
        vm.$store.state.userRewardInfo.pendingWithdraw=Number(ethers.utils.formatUnits(res.pendingWithdraw,6)).toFixed(2)
    })
}
//查询下一级用户业绩信息
async function userDownLevel1(address,numAddr){
    await getFDFstakingObj().userDownLevel1(address,0,numAddr).then(res=>{
        vm.$store.state.user.userDownLevel1=res
    })
}
//IDOswitch
async function IDOswitch(){
    
}
//ethers.utils.formatUnits  bignumber转10
//ethers.utils.parseUnits   10转bignumber

////test测试
async function sendUsdt(address,amount){
    const IERC20usdt=getContractObj(FDFStakingABI.Ftoken,IERC20.abi)
    return new Promise(async (resolve,reject)=>{
        const sendusdt= await IERC20usdt.transfer(address,ethers.utils.parseUnits(amount.toString(),18))
        await IERC20usdt
        resolve(sendusdt)
    }).then(async res=>{
        const hashresult=await checkTranstionsDone(res.hash)
        console.log(hashresult)
        console.log("chenggong")
    }).catch(res=>{
        return res
    })
}
//获取链信息
async function getNetwork(){
    return await provider().getNetwork()
}
//获取地址授权额度信息
async function getERC20allowance(erc20addr,owner,spender){
    return await getContractObj(erc20addr,IERC20.abi).allowance(owner,spender).then(res=>{
        return parseInt(ethers.utils.formatUnits(res,6))
    })
}
//获取NFT合约信息
async function getNFTpoolINFO(address){
    const contractNFTpool=getContractObj(FDFStakingABI.nftPoolAddr,FNFTpool.abi)
    const balanceUsdt=await contractNFTpool.balanceOf()
    const starttime=await contractNFTpool.getLastTime()
    console.log(ethers.utils.formatUnits(starttime,0))
    if(address){
        const getuserwithdraw=await contractNFTpool.pendingWith(address)
        vm.$store.state.nftpool.pendingWith=parseInt(ethers.utils.formatUnits(getuserwithdraw,6))
    }
    vm.$store.state.nftpool.balanceOf=parseInt(ethers.utils.formatUnits(balanceUsdt,6))
    vm.$store.state.nftpool.startTime=(ethers.utils.formatUnits(starttime,0))*1000
    console.log((ethers.utils.formatUnits(starttime,0))*1000,new Date().getTime())
}
async function register(address){
   return new Promise(async (resolve,reject)=>{
        const registerAddr=getFDFstakingObj().register(address)
        const transobj=await provider().waitForTransaction(registerAddr.hash)
        resolve(transobj)
    }).then(res=>{
        console.log(res)
    }).catch(res=>{
        console.log(res)
    })
}
//时间戳返回格式化时间
function formatDateTime(time){ 
    if (!time) return { ss: 0 };
  let t = time;
  const ss = parseInt(t % 60);
  t = (t - ss) / 60;
  if (t < 1) return {ss};
  const mm = parseInt(t % 60);
  t = (t - mm) / 60;
  if (t < 1) return {mm,ss};
  const hh = parseInt(t % 24);
  t = parseInt((t - hh) / 24);
  if (t < 1) return {hh,mm,ss};
  const dd = t;
  return{dd,hh,mm,ss}
    }
function accountsAchainid(){
    const chainid=ethers.utils.formatUnits(window.ethereum.chainId,0)
    const account=window.ethereum.selectedAddress
    if(chainid==137 && account){
        return true
    }else{
        vm.$store.state.tips.errormsg=vm.$t('errormessage.chainid')
        return false
    }
}

//互助合约

//提款USDT
async function withdraw(){
    await getFDFstakingObj().withdraw().then(async res=>{
        await provider().waitForTransaction(res.hash).then(res=>{
            console.log(res)
        })
    }).catch(res=>{
        vm.$open('error',res.message,res.code)
    })
}
//存款  error
async function deposit(amount){
    return new Promise(async(resolve,reject)=>{
        const usdtAllownance=await getERC20allowance(FDFStakingABI.testUSDT,vm.$store.state.user.UserAddress,FDFStakingABI.contractAddress)
        const Ftokenallowance=await getERC20allowance(FDFStakingABI.Ftoken,vm.$store.state.user.UserAddress,FDFStakingABI.contractAddress)
        const usdtapprove=await getContractObj(FDFStakingABI.testUSDT,IERC20.abi).approve(FDFStakingABI.contractAddress,ethers.utils.parseUnits(amount.toString(),6))
        await provider().waitForTransaction(usdtapprove.hash).then(res=>{console.log(res)})
        const ftoeknapprove=await getContractObj(FDFStakingABI.Ftoken,IERC20.abi).approve(FDFStakingABI.contractAddress,ethers.utils.parseUnits((amount*9999).toString(),18))
        await provider().waitForTransaction(ftoeknapprove.hash)
        const depositobj=await getFDFstakingObj().deposit(ethers.utils.parseUnits(amount.toString(),6)).catch(res=>{
            console.log(res)
            vm.$open('error',res.message,res.code)
        })
        const deposittrans=await provider().waitForTransaction(depositobj.hash).then(res=>{
            return res
        })
        resolve(deposittrans)
    }).then(res=>{
        return res
    }).catch(res=>{
        console.log(res)
    })
}
//查询全网最新的十单
async function getOrders(){
    return await getFDFstakingObj().getOrders().then(res=>{
        return res
    })
}
//IDO和receive开关
async function setcondition(){
    const IERC20usdt=getContractObj(FDFStakingABI.testUSDT,IERC20.abi)
    const allowancce=await IERC20usdt.approve(FDFStakingABI.contractAddress,ethers.utils.parseUnits(amount.toString(),6))
}
//接收receive
async function receiveFDF(){
    const receiveFDFres=await getFDFstakingObj().receiveFDF().catch(res=>{
        console.log(res.data.message)
        getUserinfo(vm.$store.state.user.UserAddress)
    })
    console.log(await provider().waitForTransaction(receiveFDFres.hash))
}

//nft奖池提款

async function nftwithdraw(){
    return getContractObj(FDFStakingABI.nftPoolAddr,FNFTpool.abi).withdrawToken().then(res=>{
        console.log(res)
    })
}
export default {sendThis,
                connect,//链接钱包
                getUserinfo,//获取用户信息
                getIDOInfo,//获取IDO信息
                provider,//provider
                buyFDF,//参与抢购
                getContractObj,//获取地址实例
                sendUsdt,//发送测试币 test
                register,//注册
                getSysInfo,//获取互助合约的信息
                getuserInfoPer,//查询单个用户业绩信息
                IDOswitch,//IDO开关
                getNFTpoolINFO,//获取nfg池子信息
                formatDateTime,//转换时间戳
                deposit,//互助入金
                setcondition,//设置条件
                receiveFDF,//接收fdf
                getNetwork,//获取网络
                accountsAchainid,//判断账户和chainId链接
                getOrders,//获取全网最新10单
                transitionBignum,
                getERC20allowance,
                userDownLevel1,//查询下一级用户信息
                downLevel1UserAddrs,//查询下一级所有用户地址
                withdraw,//提款USDT
                nftwithdraw
            }