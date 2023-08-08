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
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=1d957b940f12e06d8332e05f64c037c7&tid=248bdd6cc11b5213ec282a89ebc41e8e",
    "https://www.maimemo.com/share/page?uid=28695949&pid=1d957b940f12e06d8332e05f64c037c7&tid=248bdd6cc11b5213ec282a89ebc41e8e",
    "https://www.maimemo.com/share/page?uid=28695949&pid=1d957b940f12e06d8332e05f64c037c7&tid=248bdd6cc11b5213ec282a89ebc41e8e",
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
