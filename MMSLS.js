/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=f87138aab618418074580d366d182307&tid=d2d511fdeaef4a7e586b34b15fe8da79",
    "https://www.maimemo.com/share/page?uid=28695949&pid=f87138aab618418074580d366d182307&tid=d2d511fdeaef4a7e586b34b15fe8da79",
    "https://www.maimemo.com/share/page?uid=28695949&pid=f87138aab618418074580d366d182307&tid=d2d511fdeaef4a7e586b34b15fe8da79",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=5331eac1094d6a4e207fa1368155df7e&tid=4060b9f977e006d4c0d8b7edfa936452",
    "https://www.maimemo.com/share/page?uid=28695949&pid=5331eac1094d6a4e207fa1368155df7e&tid=4060b9f977e006d4c0d8b7edfa936452",
    "https://www.maimemo.com/share/page?uid=28695949&pid=5331eac1094d6a4e207fa1368155df7e&tid=4060b9f977e006d4c0d8b7edfa936452",
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
