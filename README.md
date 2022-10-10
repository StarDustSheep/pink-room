# pink-room主题介绍
我发现思源的集市上没有粉色系的主题，于是打算自己做一个给自己用。<br>
pink-room的界面颜色以浅粉色、白色以及米色为主，试图营造出清新、温馨的感觉。

## 主要特性
### 风格化行内代码和按键kbd<br>
将按键和行内代码做得更加易读<br><br>
![image](https://user-images.githubusercontent.com/114859111/193455127-3c1f9c14-2b8b-4466-b790-22d5964aacb5.png)

### 超级块边框<br>
为一级超级块添加边框，以用来进行不同话题内容图文的分区<br><br>
![image](https://user-images.githubusercontent.com/114859111/193455158-fdedcab4-b448-4f87-b002-1caec93c0f2f.png)<br>
此特性默认开启，如不需要，请下载好主题后用任意文本编辑器找到主题文件夹内theme.css中的```@import url("style/超级块边框.css");```，在其两边的加上```/*```和```*/```后保存。<br><br>

### 卷轴页面<br>
将整个图文编辑区域改为固定宽度，所有内容都好像在一个竖向无限长的卷轴之上
![image](https://user-images.githubusercontent.com/114859111/194843869-bd16dc87-4906-4330-991d-538c0d1ba6f9.png)
此特性默认不开启，如需开启，请下载好主题后用任意文本编辑器将主题文件夹内theme.css中的```@import url("style/卷轴页面.css");```两边的```/*```和```*/```删除后保存，**并在思源笔记中开启自适应宽度**<br><br>

### 字体样式菜单
对字体样式菜单做了改动，添加了号码以让人能更加轻易地找到自己所需要的样式<br>
未对思源默认的自定义字色、底色做偏离色调的大修改，以防止用户笔记外观和默认主题差距过大无法使用。但未来可能会加入另外标准的自定义字色和底色。<br><br>
![image](https://user-images.githubusercontent.com/114859111/193455782-6f7380f2-7f68-402d-be28-0edd115f3551.png)<br><br>

### 四色系字体颜色
作者自用字体样式<br>
![image](https://user-images.githubusercontent.com/114859111/194844923-b471a84c-2a51-46b1-8f9d-316d2a54bd06.png)
此特性默认不开启，如需开启，请下载好主题后用任意文本编辑器将主题文件夹内theme.css中的```@import url("style/4类主要自定义字色.css");```两边的```/*```和```*/```删除后保存，**并在思源笔记中开启自适应宽度**<br><br>

### 复习用填空&黑条样式
第13种字色和第13种字体底色改为填空样式和黑色色块，只有将鼠标移动上去的时候才会显示文字，用来对特定内容进行回忆复习。
![13号样式展示](https://user-images.githubusercontent.com/114859111/194845706-d6b95b32-6709-45a7-88f7-f3729a0f948f.gif)
此特性默认开启，如不需要，请下载好主题后用任意文本编辑器找到主题文件夹内theme.css中的```@import url("style/复习用填空&黑条样式.css");```，在其两边的加上```/*```和```*/```后保存。<br><br>

### 另外两种配色界面
如需开启，请下载好主题后用任意文本编辑器将主题文件夹内theme.css打开，找到底部对应颜色界面的代码，将那一行的两边加上```/*```和```*/```后保存。<br><br>
![image](https://user-images.githubusercontent.com/114859111/194846486-ae96ffb1-3a8b-4bde-bbc1-88b751911051.png)
![image](https://user-images.githubusercontent.com/114859111/194846514-20d71ab9-2661-4957-addb-a1bbadcf5461.png)


### 背景图片
默认不开启，需要使用者请下载好主题后用任意文本编辑器将主题文件夹内theme.css打开，将```@import url("style/背景图片.css");```两边的```/*```和```*/```删除后保存，并按上面的方法开启卷轴页面。
![image](https://user-images.githubusercontent.com/114859111/194846882-bf4dadbb-7063-4f12-a5f1-6a3889599f3b.png)



# 更新日志

## 0.2版本

### 说明

* 未来应该会以所有人都有的微软雅黑字体为标准做调整，用户如有字体修改的意愿可以直接在思源的<kbd>设置</kbd>-<kbd>编辑器</kbd>中更换自己设备上安装了的字体
* 采用思源默认的字色标准（意义不明的标准），**特色性四色系字色需要在根据上方的说明手动开启
* 卷轴页面现在同四色系字色一样需要手动开启

### 新增特性

* **页签栏：** 将页签栏改成支持多行
* **块拖放合并提示**：将思源默认的拖放合并块提示色条改得更加显眼
* **标签样式：** 新增标签样式 ![image](https://user-images.githubusercontent.com/114859111/194849208-ecdb5f49-a2a6-46ce-b4c4-141ef9d94f04.png)

* **字体样式：** 增加了红、绿、蓝、紫的4色系自定义字色和背景色，为特色性功能

### 问题修复
* 使代码块和嵌入块在块合并操作中能正常显示拖放合并块提示色条
* 开启超级块边框后，鼠标悬浮在最外层超级块的图标上时，能正确地显示该超级块的范围了
* 去除了代码块左边影响美观的虚线
### 其他改动

* **卷轴页面：** 取消了竖卷轴页面的边框，以防止其边框线影响干扰对正文的阅读。
* **块引用&amp;超级块标示**：根据微软雅黑字体进行调整

## 0.1版本

上架了初版的pink-room主题

* 修改了按键和行内代码的外观
* 为超级块添加了边框和底色，以实现卡片外观
* 添加了特性：竖卷轴页面
* 对字体样式菜单做了改动，添加了号码以让人能更加轻易地定位到自己所需要的样式


# 更多图片展示
通过<kbd>Ctrl</kbd>+<kbd>+</kbd>/<kbd>-</kbd>可以对界面进行缩放，以调整出合适自己的比例<br><br>
![image](https://user-images.githubusercontent.com/114859111/193455229-a02cf0ce-43a0-423f-ba13-ea64008c4d90.png)

![image](https://user-images.githubusercontent.com/114859111/193455452-2ca2f9ad-cd2d-477c-86f7-69d9537dfd9a.png)

竖屏使用能看到更多的内容
![image](https://user-images.githubusercontent.com/114859111/193455376-5b30ac9c-6830-4c69-8d45-536cc07cb0db.png)


# 改进计划
## 短期改进计划
* 收集使用者反馈
* 改善思源各界面的使用体验
* 将其他主题作者的自定义字体样式方案引入作为用户可选方案

## 长期改进计划
* 建立自己的自定义字体样式通用方案
* 制作出设计语言统一但整体色调为其他颜色的变体
* 编写制作背景图教程
