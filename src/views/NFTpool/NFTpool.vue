<template>
    <div class="w-full">
        <div class="w-[345px] mx-auto">
             <div class="h-44 flex flex-row items-center justify-between">
                <div class="w-[103px] h-23 bg-[url('~@/img/logo.png')] bg-cover">
                </div>
                <div class="text-[14px] w-[103px] font-semibold Transtips overflow-hidden overflow-ellipsis">0x78C4A4D651FB4196a2dF13cD7A742FCe1C4c870A</div>
                <img src="../../img/Nav.png" class="w-[24px] h-[24px]" alt="">
            </div>
            <div class="w-full h-[345px] bg-[url('~@/img/NFTpool.png')] font-semibold bg-[345px,375px] mt-[-75px] overflow-hidden">
            <h1 class="Transtips text-[32px] mt-[100px] h-[45px]">持有NFT</h1>
            <h1 class="Transtips text-[32px] h-[45px]">平分奖池分红</h1>
        </div>
        <div class="bg-[url('~@/img/group.png')] w-[319px] overflow-hidden mt-[-11px] mx-auto h-[184px] bg-contain bg-no-repeat">
            <h1 class="h-[34px] text-[24px] pool mt-[6px]">当前奖池</h1>
            <div class="bg-[url('~@/img/time2.png')] bg-no-repeat bg-contain mt-[28px] ml-[20px] w-[279px] h-[35px] relative">
                <p class="text-[10px] text-[#633706] h-35px leading-[35px] text-left pl-[8px]">每满24小时可领一次奖</p>
                <span class="absolute leading-[26px] top-[5px] right-[15px] text-[#633706] font-semibold">
                    <span class="brownback">24</span>
                    时
                    <span class="brownback">00</span>
                    分
                    <span class="brownback">00</span>
                    秒
                </span>
            </div>
            <div class="Transtips text-[32px] font-semibold mt-[15px]">10000000.00 <span class="text-[16px]">USDT</span></div>
        </div>
        <div class="available w-[284px] mx-auto h-[34px] mt-[19px]">
            <p class="w-full h-full bg-[#020202] rounded-[53px] leading-[34px] text-[#F8DCB5]">当前可领取分红:10000000.00USDT</p>
        </div>
        <div class="w-[284px] h-[40px] bg-[url('~@/img/receiveBut.png')] mt-[16px] bg-[270px,35px] mx-auto bg-no-repeat bg-center font-semibold text-[#633706] leading-[32px]">立即领取</div>
        </div>
    </div>
</template>

<script>


</script>

<style lang="less" scoped>


.available{
    background-image: linear-gradient(to bottom,#FAE2BE,#E3B97D);
    border-radius: 53px;
    padding: 1px;
}
.Transtips{
    background-image: linear-gradient(to bottom,#FFFFFF,#FFFFFF,#D08200);
     -webkit-background-clip: text;
      color: transparent;
}
.pool{
    background-image: linear-gradient(to bottom,#FFE7D2,#FFE7D2,#E8CBB1,#D0B199);
     -webkit-background-clip: text;
      color: transparent;
      font-weight: 600;
}
.brownback{
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #633706;
    color: white;
}


</style>
