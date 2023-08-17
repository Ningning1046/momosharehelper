**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "",
    "",
    "",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28695949&pid=d31781bb791dc6af50f9890f83e28150&tid=6a99a4e7d64cd885bd02fdf9e2512e3d",
    "https://www.maimemo.com/share/page?uid=28695949&pid=d31781bb791dc6af50f9890f83e28150&tid=6a99a4e7d64cd885bd02fdf9e2512e3d",
    "https://www.maimemo.com/share/page?uid=28695949&pid=d31781bb791dc6af50f9890f83e28150&tid=6a99a4e7d64cd885bd02fdf9e2512e3d",
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
