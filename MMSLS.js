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
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=5e67bb3051e535a0eff7d8c616440f44",
    "https://www.maimemo.com/share/page?uid=28695949&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=5e67bb3051e535a0eff7d8c616440f44",
    "https://www.maimemo.com/share/page?uid=28695949&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=5e67bb3051e535a0eff7d8c616440f44",
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
