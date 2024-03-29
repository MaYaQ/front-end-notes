---
title: 命名规范
date: 2019-7-13
---

![](https://cdn.jsdelivr.net/gh/MaYaQ/super-duper-train/img/front-end-develop-standard02.jpg)

<!-- more -->

## 驼峰式命名法介绍

- Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo
- Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

## 文件资源命名

- 文件名不得含有空格
- 文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如 README、LICENSE。 )
- 文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。

## 变量命名

命名方式 : 小驼峰式命名方法
命名规范 : 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词

| 类型     | 小写字母 |
| -------- | -------- |
| array    | a        |
| boolean  | b        |
| function | fn       |
| number   | n        |
| object   | o        |
| regular  | r        |
| string   | s        |

```javascript
推荐;
var tableTitle = "LoginTable";
var aTitle = ["LoginTable"];
不推荐;
var getTitle = "LoginTable";
```

## 函数

命名方式 : 小驼峰方式 ( 构造函数使用大驼峰命名法 )
命名规则 : 前缀为动词

| 动词 | 含义                                           | 返回值                                     |
| ---- | ---------------------------------------------- | ------------------------------------------ |
| can  | 判断是否可执行某个动作(权限)函数返回一个布尔值 | true：可执行；false：不可执行              |
| has  | 判断是否含有某个值函数返回一个布尔值。         | true：含有此值；false：不含有此值          |
| is   | 判断是否为某个值函数返回一个布尔值。           | true：为某个值；false：不为某个值          |
| get  | 获取某个值                                     | 函数返回一个非布尔值                       |
| set  | 设置某个值                                     | 无返回值、返回是否设置成功或者返回链式对象 |
| up   | 更新某个值                                     | 无返回值、返回是否设置成功或者返回链式对象 |
| hand | 页面交互动作                                   | 无返回值、返回是否设置成功或者返回链式对象 |

```javascript
//是否可阅读
function canRead(){
    return true;
}

//获取姓名
function getName{
    return this.name
}
```

## 常量

命名方法 : 全部大写
命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。
推荐：

```javascript
var MAX_COUNT = 10;
var URL = "http://www.baidu.com";
```

## 类的成员

- 公共属性和方法 : 同变量命名方式
- 私有属性和方法 : 前缀为下划线(\_)后面跟公共属性和方法一样的命名方式

```javascript
function Student(name) {
  var _name = name; // 私有成员 推荐(将name换成this是不是更熟悉了呢)

  // 公共方法
  this.getName = function () {
    return _name;
  };

  // 公共方式
  this.setName = function (value) {
    _name = value;
  };
}
var st = new Student("tom");
st.setName("jerry");
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

# 注释

原则

- As short as possible（如无必要，勿增注释）：尽量提高代码本身的清晰性、可读性。
- As long as necessary（如有必要，尽量详尽）：合理的注释、空行排版等，可以让代码更易阅读、更具美感。

## 多行注释 ( `/* 注释说明 */` )

若开始(`/*和结束(*/`)都在一行，推荐采用单行注释
若至少三行注释时，第一行为`/*，最后行为*/`，其他行以`*开始，并且注释文字与*`保留一个空格。
推荐 :

```javascript
/*
 * 代码执行到这里后会调用setTitle()函数
 * setTitle()：设置title的值
 */
setTitle();
```

## 单行注释

必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致。

## 文件注释

文件注释用于告诉不熟悉这段代码的读者这个文件中包含哪些东西。 应该提供文件的大体内容, 它的作者,创建时间, 依赖关系。如下:

```javascript
/**
 * Create by GaryLew in 2019-04-23
 * 在用户管理页面使用
 * 包含新用户创建、修改
 */
```

## 函数 ( 方法 ) 注释

函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求.
语法：

```javascript
/**
 * 函数说明
 * @关键字
 * */
```

常用注释关键字

| 注释名   | 语法                                      | 含义                      | 示例                                         |
| -------- | ----------------------------------------- | ------------------------- | -------------------------------------------- |
| @param   | @param 参数名 {参数类型} 描述信息         | 描述参数的信息            | @param name {String} 传入名称                |
| @return  | @return {返回类型} 描述信息               | 描述返回值的信息          | @return {Boolean} true:可执行;false:不可执行 |
| @author  | @author 作者信息 [附属信息：如邮箱、日期] | 描述此函数作者的信息      | @author 张三 2015/07/21                      |
| @version | @version XX.XX.XX                         | 描述此函数的版本号        | @version 1.0.3                               |
| @example | @example 示例代码                         | @example setTitle(‘测试’) |

```javascript
/**
 * mergeCells 合并Grid的行
 * @param grid {Ext.Grid.Panel} 需要合并的Grid
 * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 * @return {object}
 * @author GaryLew 2019-05-16
 * @example
 */
function mergeCells(grid, cols, isAllSome) {
  // Do Something
}
```
