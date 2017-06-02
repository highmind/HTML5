### 本地存储
  1. 每个域名存储 5MB左右
  2. localStorage --- 本地存储
    * 用于长期存储网页数据
    * tip:判断是否支持localStorage
      ``` JavaScript
         if(window.localStorage){

         }
      ```
    * 语法：localStorage[keyName]  = data;
    * 例如：localStorage['user_name'] = "zhangsan"
  3. sessionStorage --- 会话存储
    * 用于临时保存针对一个窗口的数据，关闭浏览器以后 会删除

  4. 语法
    1. setItem(key, value) 设置一个key
    2. getItem(key) 获取一个key
    3. removeItem(key) 移除一个key
    4. length  类似数组的length，用于访问 storage对象的item的数量
    5. key(n) 用于访问第N个key的名称
    6. clear() 清除当前域名下的所有localStorage内容   
