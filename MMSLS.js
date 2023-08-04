/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=166e1486d3d6b9a31ba65cfc30e00f28",
    "https://www.maimemo.com/share/page?uid=28695949&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=166e1486d3d6b9a31ba65cfc30e00f28",
    "https://www.maimemo.com/share/page?uid=28695949&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=166e1486d3d6b9a31ba65cfc30e00f28",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=368d4252eecd273b266c80502edc45f4&tid=f7be6194f584f2788013e2158a8302cf",
    "https://www.maimemo.com/share/page?uid=28695949&pid=368d4252eecd273b266c80502edc45f4&tid=f7be6194f584f2788013e2158a8302cf",
    "https://www.maimemo.com/share/page?uid=28695949&pid=368d4252eecd273b266c80502edc45f4&tid=f7be6194f584f2788013e2158a8302cf",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
